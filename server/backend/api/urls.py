from django.urls import path
from .views import api_home, handle_request, article_detail  # Import your views

urlpatterns = [
    # Homepage for testing
    path('', api_home, name='api-home'),

    # Handle GET and POST requests for articles
    path('articles/', handle_request, name='handle-request'),

    # Handle GET, PUT, and DELETE requests for a specific article
    path('articles/<int:pk>/', article_detail, name='article-detail'),
]