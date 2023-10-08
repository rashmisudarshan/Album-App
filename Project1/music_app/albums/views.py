from django.shortcuts import render
from django.http import HttpResponse
from django.template import loader
from albums.models import Album
# Create your views here.

def albums(request):
   albumslist = Album.objects.all().values()
   template = loader.get_template('all_albums.html')
   context = {
    'albumslist': albumslist,
  }
   return HttpResponse(template.render(context, request))

def details(request, id):
  artist = Album.objects.get(artist=id)
  template = loader.get_template('details.html')
  context = {
    'artist': artist,
  }
  return HttpResponse(template.render(context, request))


def main(request):
  template = loader.get_template('main.html')
  return HttpResponse(template.render())

def testing(request):
  template = loader.get_template('template.html')
  context = {
    'fruits': ['Apple', 'Banana', 'Cherry'],   
  }
  return HttpResponse(template.render(context, request))
