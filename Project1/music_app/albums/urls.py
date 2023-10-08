from django.urls import path
from . import views
from django.views.generic import TemplateView

app_name = 'albums'

urlpatterns = [
    path('', TemplateView.as_view(template_name="album/index.html")),
    path('albums/', views.albums, name='albums'),
    path('albums/details/<str:id>', views.details, name='details'),
    path('testing/', views.testing, name='testing'),
    
]
