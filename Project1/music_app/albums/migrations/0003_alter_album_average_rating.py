# Generated by Django 4.2.5 on 2023-09-28 00:36

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('albums', '0002_alter_album_average_rating_alter_album_genre'),
    ]

    operations = [
        migrations.AlterField(
            model_name='album',
            name='average_rating',
            field=models.DecimalField(decimal_places=2, max_digits=4, null=True),
        ),
    ]