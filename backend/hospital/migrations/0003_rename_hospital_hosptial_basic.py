# Generated by Django 4.2.13 on 2024-06-08 08:14

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('hospital', '0002_remove_hospital_latitude_remove_hospital_longitude'),
    ]

    operations = [
        migrations.RenameModel(
            old_name='Hospital',
            new_name='Hosptial_Basic',
        ),
    ]
