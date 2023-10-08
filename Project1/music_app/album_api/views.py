from django.shortcuts import get_object_or_404
from albums.models import Album
from .serializers import AlbumSerializer
from rest_framework import viewsets, filters, generics, permissions
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.permissions import SAFE_METHODS, IsAuthenticated, IsAuthenticatedOrReadOnly, BasePermission, IsAdminUser, DjangoModelPermissions


class AlbumUserWritePermission(BasePermission):
    message = 'Editing posts is restricted to the author only.'

    def has_object_permission(self, request, view, obj):

        if request.method in SAFE_METHODS:
            return True

        return obj.author == request.user


class AlbumList(generics.ListAPIView):
    
    serializer_class = AlbumSerializer
    queryset = Album.objects.all()

class AlbumDetail(generics.RetrieveAPIView):
   
    serializer_class = AlbumSerializer

    def get_object(self, queryset=None, **kwargs):
        item = self.kwargs.get('pk')
        return get_object_or_404(Album, id=item)

# Post Search

class AlbumListDetailfilter(generics.ListAPIView):
    
    queryset = Album.objects.all()
    serializer_class = AlbumSerializer
    filter_backends = [filters.SearchFilter]
    # '^' Starts-with search.
    # '=' Exact matches.
    search_fields = ['album','artist']

class AlbumSearch(generics.ListAPIView):
    
    queryset = Album.objects.all()
    serializer_class = AlbumSerializer
    filter_backends = [filters.SearchFilter]
    # '^' Starts-with search.
    # '=' Exact matches.
    search_fields = ['album','artist']

# Post Admin

class CreateAlbum(generics.CreateAPIView):
    
    queryset = Album.objects.all()
    serializer_class = AlbumSerializer

class AdminAlbumDetail(generics.RetrieveAPIView):
    
    queryset = Album.objects.all()
    serializer_class = AlbumSerializer

class EditAlbum(generics.UpdateAPIView):
    
    serializer_class = AlbumSerializer
    queryset = Album.objects.all()

class DeleteAlbum(generics.RetrieveDestroyAPIView):
    
    serializer_class = AlbumSerializer
    queryset = Album.objects.all()
    

""" Concrete View Classes
# CreateAPIView
Used for create-only endpoints.
# ListAPIView
Used for read-only endpoints to represent a collection of model instances.
# RetrieveAPIView
Used for read-only endpoints to represent a single model instance.
# DestroyAPIView
Used for delete-only endpoints for a single model instance.
# UpdateAPIView
Used for update-only endpoints for a single model instance.
# ListCreateAPIView
Used for read-write endpoints to represent a collection of model instances.
RetrieveUpdateAPIView
Used for read or update endpoints to represent a single model instance.
# RetrieveDestroyAPIView
Used for read or delete endpoints to represent a single model instance.
# RetrieveUpdateDestroyAPIView
Used for read-write-delete endpoints to represent a single model instance.
"""