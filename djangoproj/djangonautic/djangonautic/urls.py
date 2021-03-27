
from django.contrib import admin
from django.urls import path,include
from . import views
from django.contrib.staticfiles.urls import staticfiles_urlpatterns
urlpatterns = [
    path('admin/', admin.site.urls),
    path('articles/',include('articles.urls')),
    path('about/',views.about),
    path("",views.homepage),
    path('projects/',views.project),
    path('education/',views.education)
]

urlpatterns+=staticfiles_urlpatterns()