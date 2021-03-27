from django.shortcuts import render
from .models import Article
from django.http import HttpResponse
# Create your views here.


def landing(request):
	# return HttpResponse('homepage')
	return render(request,'articles/landing.html')
