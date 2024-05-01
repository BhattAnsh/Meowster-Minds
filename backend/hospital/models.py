from django.db import models

class Hospital(models.Model):
    name = models.CharField(max_length=100)
    address_line1 = models.CharField(max_length=255)
    address_line2 = models.CharField(max_length=255, blank=True, null=True)
    city = models.CharField(max_length=100)
    state = models.CharField(max_length=100)
    country = models.CharField(max_length=100)
    postal_code = models.CharField(max_length=20)
    contact_phone = models.CharField(max_length=20, blank=True, null=True)
    contact_email = models.EmailField(blank=True, null=True)
    services_offered = models.TextField(blank=True, null=True)
    specializations = models.TextField(blank=True, null=True)
    website = models.URLField(max_length=200, blank=True, null=True)

    def __str__(self):
        return self.name
