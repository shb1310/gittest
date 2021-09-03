from django.urls import path
from testapp.views import GeoTest, CbvTestView, DBList, Search, MainView

urlpatterns = [

 	path('api', MainView.as_view()),
    path('cbvtest', CbvTestView.as_view()),
    path('geotest', GeoTest, name='geog'),
	path('dblist',DBList, name='dblist'),
	path('search',Search, name='search'),
]
