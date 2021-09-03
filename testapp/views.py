from django.shortcuts import render

# Create your views here.

from .serializers import ProductSerializer

from django.db.models import Q

from django.template.context_processors import csrf
from django.views.generic import ListView, TemplateView
from testapp.models import Mot2
from testapp.cftest import ClassTest as ct

from rest_framework.renderers import TemplateHTMLRenderer
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import viewsets
from rest_framework.generics import ListAPIView

class QueryView(viewsets.ModelViewSet):
	queryset =  Mot2.objects.all()
	serializer_class = ProductSerializer
				
	def get(self, request, *args, **kwargs):
		queryset =  Mot2.objects.filter(name='shb')
#		super.queryset
		return self.list(request)
		
class MainView(APIView):

	
	def get(self, request):
		key = request.GET.get('prid')
		print(request)
		print(key)
#		key = 'sh'
		if key:
			queryset = Mot2.objects.filter(name__icontains=key)
			
		else:
			queryset =  Mot2.objects.all()
			
		serializer = ProductSerializer(queryset, many=True)
		return Response(serializer.data)
		
            
class HomeTemplateView(APIView):

	renderer_classes = [TemplateHTMLRenderer]
	
	@classmethod
	def get_extra_actions(cls):
		return []

	def get(self, request):
		queryset = Mot2.objects.all()
		return Response({'profiles': queryset})

class MotListClassView(ListView):
	model = Mot2
		
class CbvTestView(TemplateView):
	template_name = "testapp/cbvtest.html"

	cargs = {'name': 'cbv','content': 'def'}			
	def get(self, request, *args, **kwargs):
		return self.render_to_response(self.cargs)
		
	def post(self, request, *args, **kwargs):
		self.cargs.update({'name':request.POST.get('name')})
		self.cargs.update({'content':request.POST.get('content')})
#		return render(request, 'testapp/parameter.html', self.cargs)
		return self.render_to_response(self.cargs)
		
def GeoTest(request):
	cargs = {'name': 'geo', 'content': 'def'}	
	cargs.update(csrf(request))
	if request.method == 'GET':
		return render(request, 'testapp/cbvtest.html', cargs)
		
	elif request.method == 'POST':
		cargs.update({'content':'post'})
		return render(request, 'testapp/parameter.html', cargs)
		
		
def DBList(request):
	if request.method == 'POST':
		mot = Mot2(name=request.POST.get('name'), content=request.POST.get('content'))
		mot.save()
	mota = Mot2.objects.all()
	motc = {'Mot' : mota}
	return render(request, 'testapp/dblist.html', motc)


motc = {}
def Search(request):
	global motc
	if request.method == 'POST':
		mot = Mot2.objects.filter(name=request.POST.get('search'))
		motc = {'Mot' : mot}

	return render(request, 'testapp/search.html', motc)

	
	