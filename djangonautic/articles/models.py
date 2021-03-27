from django.db import models

# Create your models here.
class Article(models.Model):
	title = models.CharField(max_length=100)
	slug = models.SlugField()
	body = models.TextField()
	date = models.DateTimeField(auto_now_add=True) #automatically adds time
	# thumb=models.ImageField(default='default.png',blank=True)
	# add in thumbnail later
	# add in author later
	#python manage.py makemigrations
	#python manage.py migrate

	def __str__(self):
		return self.title

	def snippet(self):
		return self.body[0:100]+'.....'