# Generated by Django 4.0.3 on 2022-03-16 00:19

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('restaurants', '0008_imagemodel'),
    ]

    operations = [
        migrations.AddField(
            model_name='restaurant',
            name='postal_code',
            field=models.CharField(default=2, max_length=10),
            preserve_default=False,
        ),
    ]