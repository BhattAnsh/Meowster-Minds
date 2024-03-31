from django.contrib import admin
from django.urls import path, include
from . import views
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView
urlpatterns = [
    path('register/', views.createUserView.as_view(), name="register"),
    path('details/', views.createPatientDetails.as_view(), name = "Patient_Details"),
    path('medical-details/', views.createMedicalRecords.as_view(), name = "Patient_Medical_Details"),
    path('token/', TokenObtainPairView.as_view(), name = 'get_token'),
    path('token/refresh/', TokenRefreshView.as_view(), name = 'refresh_token'),
    path('patient-auth/', include('rest_framework.urls')),
    path('get-User/', views.getUserView.as_view(), name="user_name"),
]

