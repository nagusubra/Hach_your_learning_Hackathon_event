from django.shortcuts import render
#from .models import Article
from django.http import HttpResponse
from django.contrib.auth.forms import UserCreationForm 
# Create your views here.


def landing(request):
	return render(request,'main/home.html')




