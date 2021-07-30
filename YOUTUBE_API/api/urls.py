from rest_framework import routers
from django.urls import path
from django.conf.urls import include
from .views import VideoViewSet, CreateUserView

# genericで作ったviewはas_viewでurlに登録
# ModelViewSetで作ったviewはrouterを使って登録

router = routers.DefaultRouter()
router.register('videos', VideoViewSet)

urlpatterns = [
    path('create/', CreateUserView.as_view(), name='create'),
    path('', include(router.urls)),
]
