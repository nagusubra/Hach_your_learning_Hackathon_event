from django.shortcuts import render
from .models import Video
# Create your views here.
def index(request):
	all_video=Video.objects.all()
	video=Video.objects.all()
	return render(request,'video/index.html',{"video":video})