from django.contrib import admin
from freespirits.back.models import Cat, Photo, Article, Donation, Adoption, Item, CartItem, OrderItem, Order

class CatAdmin(admin.ModelAdmin):

    list_display = ('name', 'iucn_status', 'number', 'subspecies')
    list_filter = ['iucn_status']
    search_fields = ['name']
    
# Register your models here.

admin.site.register(Cat, CatAdmin)
admin.site.register(Photo)
admin.site.register(Article)
admin.site.register(Donation)
admin.site.register(Adoption)
admin.site.register(Item)
admin.site.register(CartItem)
admin.site.register(OrderItem)
admin.site.register(Order)



