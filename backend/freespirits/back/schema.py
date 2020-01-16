import graphene
from graphene_django.types import DjangoObjectType
from django.contrib.auth import get_user_model, login, logout, authenticate
from freespirits.back.models import Cat, Photo, Donation

class CatType(DjangoObjectType):
    class Meta:
        model = Cat
class PhotoType(DjangoObjectType):
    class Meta:
        model = Photo
class DonationType(DjangoObjectType):
    class Meta:
        model = Donation

class Query(graphene.ObjectType):
    all_cats = graphene.List(CatType)
    all_photos = graphene.List(PhotoType)

    cat = graphene.Field(CatType, id=graphene.Int(), name=graphene.String())

    def resolve_all_cats(self, info, **kwargs):
        return Cat.objects.all()

    def resolve_cat(self, info, **kwargs):
          id = kwargs.get('id')
          name = kwargs.get('name')

          if id is not None:
              return Cat.objects.get(pk=id)

          if name is not None:
              return Cat.objects.get(name=name)

          return None





