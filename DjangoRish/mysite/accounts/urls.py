from django.urls import path
from . import views

app_name='accounts' #name of app

urlpatterns = [
  path('', views.signup_view, name="signup"),
  path('',views.login_view,name="login"),
  # path('logout/',views.logout_view,name="logout"),

]
 