from django.contrib import admin
from .models import MenuItem, Order

# Register your models here.

admin.site.register(MenuItem)  # Allow Menu Items in Django Admin
admin.site.register(Order)  # Allow Orders in Django Adminpython manage.py runserver



