from django.shortcuts import render
from rest_framework import generics
from .models import MenuItem, Order
from .serializers import MenuItemSerializer, OrderSerializer

# Create your views here.


# GET all menu items
class MenuItemList(generics.ListAPIView):
    queryset = MenuItem.objects.all()
    serializer_class = MenuItemSerializer

# POST an order
class OrderCreate(generics.CreateAPIView):
    queryset = Order.objects.all()
    serializer_class = OrderSerializer