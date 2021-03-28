from django.urls import path
from . import views

app_name ='video'

urlpatterns = [
	path('link/',views.index,name="link"),
]