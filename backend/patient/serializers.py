from django.contrib.auth.models import User
from rest_framework import serializers
from .models import PatientDetails, AppointmentDetails, MedicalRecords
class UserSerializers(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ["id", "username", "password", "email"]
        extra_kwargs = {"password": {'write_only':True}}

    def create(self, validated_data):
        user = User.objects.create_user(**validated_data)
        return user
    
class PatientSerializer(serializers.ModelSerializer):
    class Meta:
        model = PatientDetails
        fields = ["user","fullName", "phoneNo", "Gender", "Address", 'id']
        extra_kwargs = {"user":{'read_only':True}}

class AppointmentSerializer(serializers.ModelSerializer):
    class Meta:
        model = AppointmentDetails
        fields = ["appointment_id", "patient", "appointment_date", "appointment_Time", "reason_for_visit", "status"]

class MedicalRecordsSerializer(serializers.ModelSerializer):
    class Meta:
        model = MedicalRecords
        fields = ["patient", "allergies", "past_medical_conditions", "surgical_history", "family_medical_history"]
        extra_kwargs = {"patient":{'read_only':True}}


    