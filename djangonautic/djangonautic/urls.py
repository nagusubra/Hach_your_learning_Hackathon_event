
from django.contrib import admin
from django.urls import path,include
from . import views
from django.contrib.staticfiles.urls import staticfiles_urlpatterns
from django.conf.urls.static import static
from django.conf import settings

urlpatterns = [
    path('admin/', admin.site.urls),
    path('accounts/', include('accounts.urls')),
    path('WaterMovement/',include('articles.urls')), #routing to pages like video lib, workshops, etc.
    path('about/',views.about),
    path("",views.homepage), #landing page
    path('projects/',views.project), 
    path('education/',views.education)
]

urlpatterns+=staticfiles_urlpatterns()
# urlpatterns+=static(setting.MEDIA_URL,document_root=settings.MEDIA_ROOT)

