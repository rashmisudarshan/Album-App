# Generated by Django 4.2.5 on 2023-09-28 00:12

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Album',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('album', models.CharField(max_length=500, null=True)),
                ('artist', models.CharField(max_length=500, null=True)),
                ('genre', models.CharField(max_length=500, null=True)),
                ('average_rating', models.DecimalField(decimal_places=2, max_digits=4, null=True)),
                ('ranking', models.IntegerField(null=True)),
                ('release_date', models.CharField(max_length=50, null=True)),
            ],
        ),
    ]
