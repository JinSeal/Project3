from django.contrib import admin
from freespirits.back.models import Cat, Photo, Donation

class CatAdmin(admin.ModelAdmin):

    list_display = ('name', 'iucn_status', 'number', 'subspecies')
    list_filter = ['iucn_status']
    search_fields = ['name']
    
# Register your models here.

admin.site.register(Cat, CatAdmin)
admin.site.register(Photo)
admin.site.register(Donation)



