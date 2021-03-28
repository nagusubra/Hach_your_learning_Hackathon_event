
from django.urls import path
from . import views
app_name='articles'
urlpatterns = [
    path('home',views.landing,name="landing"),
    path('chat', views.chat, name = "chat"),
]
 
