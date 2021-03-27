
from django.contrib import admin
from django.urls import path,include
from . import views
from django.contrib.staticfiles.urls import staticfiles_urlpatterns
from django.conf.urls.static import static
from django.conf import settings

urlpatterns = [
    path('admin/', admin.site.urls),
    path('about/',views.about),
    path('water-movement/',include('articles.urls')), #landing page
    path('projects/',views.project), 
    path('education/',views.education)
]

urlpatterns+=staticfiles_urlpatterns()
# urlpatterns+=static(setting.MEDIA_URL,document_root=settings.MEDIA_ROOT)

