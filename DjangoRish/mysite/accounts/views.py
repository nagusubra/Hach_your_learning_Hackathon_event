from django.shortcuts import render,redirect
from django.contrib.auth.forms import UserCreationForm,AuthenticationForm 

# Create your views here.
def signup_view(request):
	if request.method=='POST':
		form = UserCreationForm(request.POST) #validates our form
		if form.is_valid(): #returns true on valid and false on invalid
			form.save()
			#log the user in 
			# return redirect('articles:list')
			return render(request,'accounts/signup.html')

	else:		
		form= UserCreationForm()
	return render(request,'accounts/signup.html',{'form':form})

def login_view(request):
	if request.method=='POST':
		form = AuthenticationForm(data=request.POST)
		if form.is_valid(): #returns true on valid and false on invalid
			# form.save()
			#log the user in 
			# user= form.get_user()
			# login(request,user)
			# return redirect('articles:list')
			return render(request,'accounts/signup.html')
	else:
		form=AuthenticationForm()
	return render(request,'accounts/login.html',{'form':form})

# def logout_view(request):
# 	if request.method=='POST'
# 		logout(request)
# 		return redirect('articles:list')


