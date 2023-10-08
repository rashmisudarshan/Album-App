from django.db import models

# Create your models here.


class Album(models.Model):
  
  album = models.CharField(max_length=500, null=True)
  artist = models.CharField(max_length=500,null=True)
  genre = models.CharField(max_length=255, null = True)
  average_rating = models.DecimalField(decimal_places = 2,max_digits = 4,null = True)
  ranking = models.IntegerField(null = True)
  release_date = models.CharField(max_length=50,null=True)
