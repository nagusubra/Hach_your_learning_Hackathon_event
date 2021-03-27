
from django.urls import path
from . import views
app_name='articles'
urlpatterns = [
    path('',views.landing,name="landing"),
    path('/',views.landing,name="landing"),
]
