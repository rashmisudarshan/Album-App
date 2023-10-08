from django.contrib import admin
from .models import Album

# Register your models here.

class AlbumAdmin(admin.ModelAdmin):
  list_display = ("album", "artist", "genre","average_rating","ranking", "release_date")

admin.site.register(Album,AlbumAdmin)