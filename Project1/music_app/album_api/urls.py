from django.urls import path
from .views import AlbumList, AlbumDetail, AlbumListDetailfilter,AlbumSearch, CreateAlbum,AdminAlbumDetail,EditAlbum, DeleteAlbum
from rest_framework.routers import DefaultRouter


app_name = 'album_api'

#router = DefaultRouter()
#router.register('', AlbumList, basename='album')
#urlpatterns = router.urls


#urlpatterns = [
#   path('<int:pk>/', AlbumList.as_view({'get': 'list'}), name='detailcreate'),
#    path('', AlbumList.as_view({'get': 'list'}), name='listcreate'),
#]

urlpatterns = [
    path('albums/<int:pk>', AlbumDetail.as_view(), name='detailcreate'),
    path('search/', AlbumListDetailfilter.as_view(), name='albumsearch'),
    path('', AlbumList.as_view(), name='listcreate'),
    path('api/admin/create/', CreateAlbum.as_view(), name='createpost'),
    path('api/admin/edit/albumdetail/<int:pk>/', AdminAlbumDetail.as_view(), name='admindetailpost'),
    path('api/admin/edit/<int:pk>/', EditAlbum.as_view(), name='editpost'),
    path('api/admin/delete/<int:pk>/', DeleteAlbum.as_view(), name='deletepost'),
    path('admin/create/', CreateAlbum.as_view(), name='createpost'),
    path('admin/edit/albumdetail/<int:pk>/', AdminAlbumDetail.as_view(), name='admindetailpost'),
    path('admin/edit/<int:pk>/', EditAlbum.as_view(), name='editpost'),
    path('admin/delete/<int:pk>/', DeleteAlbum.as_view(), name='deletepost'),
]

