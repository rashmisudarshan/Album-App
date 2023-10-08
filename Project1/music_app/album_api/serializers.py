from rest_framework import serializers
from albums.models import Album


class AlbumSerializer(serializers.ModelSerializer):
    class Meta:
        fields = ('id', 'album', 'artist', 'genre', 'average_rating', 'ranking', 'release_date')
        model = Album