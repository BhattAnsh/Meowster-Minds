from django.db import models
from django.contrib.auth.models import User

class PatientDetails(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name="patient_details")
    fullName = models.CharField(max_length=100)
    phoneNo = models.CharField(max_length=100)
    Gender = models.CharField(max_length = 10)
    Address = models.CharField(max_length = 500)

class AppointmentDetails(models.Model):
    appointment_id = models.AutoField(primary_key=True)
    patient = models.ForeignKey(User, on_delete=models.CASCADE, related_name="appointments")
    appointment_date = models.DateField()
    appointment_Time = models.TimeField()
    reason_for_visit = models.TextField()
    status = models.CharField(max_length=100)

class MedicalRecords(models.Model):
    patient = models.ForeignKey(User, on_delete=models.CASCADE, related_name="patient_medical_details")
    allergies = models.TextField(blank=True)
    past_medical_conditions = models.TextField(blank=True)
    surgical_history = models.TextField(blank=True)
    family_medical_history = models.TextField(blank=True)



