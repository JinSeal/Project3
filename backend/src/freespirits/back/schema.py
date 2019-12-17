import graphene
from graphene_django.types import DjangoObjectType

from freespirits.back.models import Cat, Photo, Article, User, Donation, Adoption, Item, CartItem, OrderItem, Order

class CatType(DjangoObjectType):
    class Meta:
        model = Cat
class PhotoType(DjangoObjectType):
    class Meta:
        model = Photo
class ArticleType(DjangoObjectType):
    class Meta:
        model = Article
class UserType(DjangoObjectType):
    class Meta:
        model = User
class DonationType(DjangoObjectType):
    class Meta:
        model = Donation
class AdoptionType(DjangoObjectType):
    class Meta:
        model = Adoption
class ItemType(DjangoObjectType):
    class Meta:
        model = Item
class CartItemType(DjangoObjectType):
    class Meta:
        model = CartItem
class OrderItemType(DjangoObjectType):
    class Meta:
        model = OrderItem
class OrderType(DjangoObjectType):
    class Meta:
        model = Order





class Query(object):
    all_cat = graphene.List(CatType)
    all_photo = graphene.List(PhotoType)

    def resolve_all_cat(self, info, **kwargs):
        return Cat.objects.all()

    def resolve_all_photo(self, info, **kwargs):
        # We can easily optimize query count in the resolve method
        return Photo.objects.select_related('cat').all()