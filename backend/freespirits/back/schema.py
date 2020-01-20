import graphene
from graphene_django.types import DjangoObjectType
from datetime import datetime
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
          name = kwargs.get('name')

          if name is not None:
              return Cat.objects.get(name=name)

          return None



    
class DonationInput(graphene.InputObjectType):
    amount = graphene.Float()
    email = graphene.String()
    stripetoken = graphene.String()
    cat = graphene.String()

class CreateDonation(graphene.Mutation):
    class Arguments:
        input = DonationInput(required=True)

    ok = graphene.Boolean()
    donation = graphene.Field(DonationType)

    @staticmethod
    def mutate(root, info, input=None):
        ok = True
        date = datetime.now()
        cat = Cat.objects.get(name=input.cat)
        donation = Donation(amount=input.amount, email=input.email, stripetoken=input.stripetoken, cat=cat, date=date)
        donation.save()
        return CreateDonation(ok=ok, donation=donation)

class Mutation(graphene.ObjectType):
    create_donation = CreateDonation.Field()

