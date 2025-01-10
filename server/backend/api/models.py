from django.db import models

# Create your models here.
class Article(models.Model):
    title = models.CharField(max_length=50)
    introduction = models.CharField(max_length=100)
    body = models.TextField(max_length=5000)
    date_published = models.DateTimeField(auto_now_add=True)
    picture = models.ImageField(default='fallback.png',blank=True)


    def __str__(self):
        return self.title