# Generated by Django 4.2.5 on 2023-09-28 00:31

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('albums', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='album',
            name='average_rating',
            field=models.DecimalField(decimal_places=2, max_digits=2, null=True),
        ),
        migrations.AlterField(
            model_name='album',
            name='genre',
            field=models.CharField(max_length=255, null=True),
        ),
    ]