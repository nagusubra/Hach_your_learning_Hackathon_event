from django.http import HttpResponse
from django.shortcuts import render

def homepage(request):
	# return HttpResponse('homepage')
	return render(request,'homepage.html')
def about(request):
	# return HttpResponse('about')
	return render(request,'about.html')
def project(request):
	return HttpResponse('My Projects')
def education(request):
	return HttpResponse('Education')
