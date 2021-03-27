from django.shortcuts import render
from .models import Article
from django.http import HttpResponse
# Create your views here.


def landing(request):
	return render(request,'articles/landing.html')

def chat(request):
	return render(request,'articles/chat.html')