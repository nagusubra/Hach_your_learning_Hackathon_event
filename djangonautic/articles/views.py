from django.shortcuts import render
from .models import Article
from django.http import HttpResponse
from django.contrib.auth.forms import UserCreationForm 
# Create your views here.


def landing(request):
	return render(request,'articles/landing.html')

def chat(request):
	return render(request,'articles/chat.html')

def signup_view(request):
	form= UserCreationForm()
	return render(request,'articles/signup.html',{'form':form})
