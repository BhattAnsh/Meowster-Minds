from django.shortcuts import render
from django.contrib.auth.models import User
from rest_framework import generics
from .serializers import UserSerializers, MedicalRecordsSerializer, AppointmentSerializer, PatientSerializer
from .models import PatientDetails, AppointmentDetails, MedicalRecords
from rest_framework.permissions import IsAuthenticated, AllowAny


class createUserView(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializers
    permission_classes = [AllowAny]
class getUserView(generics.ListAPIView):
    serializer_class = UserSerializers
    permission_classes = [AllowAny]

    def get_queryset(self):
        user = self.request.user
        return User.objects.filter(username = user)

class createPatientDetails(generics.ListCreateAPIView):
    serializer_class = PatientSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        user = self.request.user
        return PatientDetails.objects.filter(user = user)
    def perform_create(self, serializer):
        if serializer.is_valid():
            serializer.save(user = self.request.user)
        else:
            print(serializer.error)

class createAppintment(generics.ListCreateAPIView):
    serializer_class = AppointmentSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        user = self.request.user
        return AppointmentDetails.objects.filter(patient = user)
    def perform_create(self, serializer):
        if serializer.is_valid():
            serializer.save(patient = self.request.user)
        else:
            print(serializer.error)

class createMedicalRecords(generics.ListCreateAPIView):
    serializer_class = MedicalRecordsSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        user = self.request.user
        return MedicalRecords.objects.filter(patient = user)
    def perform_create(self, serializer):
        print(self.request.data)
        if serializer.is_valid():
            serializer.save(patient = self.request.user, patient_id = self.request.user.id)
        else:
            print(serializer.error)

