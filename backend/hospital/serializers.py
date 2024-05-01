from django.contrib.auth.models import User
from rest_framework import serializers
from .models import Hospital

class hospitalSerializers(serializers.ModelSerializer):
    class Meta:
        model = Hospital
        fields = ["name", "address_line1", "address_line2", "city", "state", "country", "postal_code", "contact_phone","contact_email", "services_offered", "specialization", "website"]