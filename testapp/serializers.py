from rest_framework import serializers
from .models import Mot2

class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Mot2
        fields = '__all__'