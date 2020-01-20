from django.db import models
from datetime import date, datetime
from django.conf import settings



class Cat(models.Model):
    EXTINCT = 1
    EXTINCT_IN_THE_WILD = 2
    CRITICALLY_ENDANGERED = 3
    ENDANGERED = 4
    VULNERABLE = 5
    NEAR_THREATENED = 6
    LEAST_CONCERN = 7
    IUCN_RED_LIST_STATUS = [
        (EXTINCT, 'Extinct'),
        (EXTINCT_IN_THE_WILD, 'Extinct in the wild'),
        (CRITICALLY_ENDANGERED, 'Critically endangered'),
        (ENDANGERED, 'Endangered'),
        (VULNERABLE, 'Vulnerable'),
        (NEAR_THREATENED, 'Near threatened'),
        (LEAST_CONCERN, 'Least concern'),
    ]


    name = models.CharField(max_length=100)
    description = models.TextField()
    habitat = models.TextField()
    iucn_status = models.IntegerField(
        choices=IUCN_RED_LIST_STATUS,
    )
    number = models.TextField()
    subspecies = models.IntegerField()
    life_span = models.TextField()
    size = models.TextField()
    weight = models.TextField()
    diet = models.TextField()
    image = models.URLField()
    bg = models.URLField()
    bg2 = models.URLField()

    def __str__(self):
        return self.name

    class Meta:
        ordering = ('iucn_status',)
    

class Photo(models.Model):
    title = models.CharField(max_length=100)
    url = models.CharField(max_length=100)
    cat = models.ForeignKey(Cat, on_delete=models.CASCADE, verbose_name = "Cat", null=True)
   

    def __str__(self):
        return self.title

    class Meta:
        ordering = ('title',)


class Donation(models.Model):
    amount = models.FloatField()
    date = models.DateField(default=date.today, blank=True)
    email = models.EmailField()
    stripetoken = models.TextField()
    cat = models.ForeignKey(Cat, on_delete=models.CASCADE, verbose_name = "Cat", null=True)

    def __str__(self):
        return self.email

    class Meta:
        ordering = ['-date','email']


