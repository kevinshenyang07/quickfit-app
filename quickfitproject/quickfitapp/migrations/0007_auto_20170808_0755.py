# -*- coding: utf-8 -*-
# Generated by Django 1.11.4 on 2017-08-08 07:55
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('quickfitapp', '0006_workout_workout_data'),
    ]

    operations = [
        migrations.AlterField(
            model_name='movement',
            name='demo_url',
            field=models.CharField(blank=True, max_length=2000),
        ),
    ]
