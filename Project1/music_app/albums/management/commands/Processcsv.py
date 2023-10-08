import csv
import os
from django.core.management.base import BaseCommand
from django.conf import settings
from albums.models import Album

class Command(BaseCommand):
    def handle(self, *args, **options):
        with open(os.path.join(settings.BASE_DIR / 'data.csv'), 'r') as csv_file:
            csv_reader = csv.reader(csv_file, delimiter=',')
            for row in csv_reader:
                Album.objects.create(id=row[0], album=row[1], artist=row[2],genre=row[3],average_rating=row[4], ranking = row[5],release_date = row[6])