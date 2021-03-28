from django.shortcuts import render
from .models import Item
# Create your views here.
def index(request):
	obj = Item.objects.all()
	return render(request, 'video/index.html', {'obj':obj})