
from django.urls import path
from . import views
app_name='articles'
urlpatterns = [
    path('',views.article_list,name="list"),
    #path('<slug:slug>', views.article_detail,name="detail"),
    path('test3/', views.test3, name = 'test3')
]
