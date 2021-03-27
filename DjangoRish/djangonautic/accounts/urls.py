from django.urls import path
from . import views

app_name='accounts' #name of app

urlpatterns = [
  path('signup/', views.signup_view, name="signup")
]