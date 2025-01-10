from django.urls import path,include
from . import views
from .views import handle_request, article_detail  # Import your views

urlpatterns = [
    # URL for handling GET and POST requests (list and create articles)
    path('articles/', handle_request, name='handle-request'),

    # URL for handling GET, PUT, and DELETE requests (retrieve, update, delete a specific article)
    path('articles/<int:pk>/', article_detail, name='article-detail'),
]
urlpatterns = [
    path('',views.api_home),
]