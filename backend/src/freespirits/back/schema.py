import graphene
from graphene_django.types import DjangoObjectType
from django.contrib.auth import get_user_model, login, logout, authenticate
from freespirits.back.models import Cat, Photo, Article, Donation, Adoption, Item, CartItem, OrderItem, Order

class CatType(DjangoObjectType):
    class Meta:
        model = Cat
class PhotoType(DjangoObjectType):
    class Meta:
        model = Photo
class ArticleType(DjangoObjectType):
    class Meta:
        model = Article
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
class UserType(DjangoObjectType):
    class Meta:
        model = get_user_model()


class Query(graphene.ObjectType):
    all_cats = graphene.List(CatType)
    all_photos = graphene.List(PhotoType)
    me = graphene.Field(UserType)

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

    def resolve_me(self, info):
        user = info.context.user
        if user.is_anonymous:
            raise Exception('Not logged in!')

        return user





class CreateUser(graphene.Mutation):
    user = graphene.Field(UserType)

    class Arguments:
        username = graphene.String(required=True)
        password = graphene.String(required=True)
        email = graphene.String(required=True)

    def mutate(self, info, username, password, email):
        user = get_user_model()(
            username=username,
            email=email,
        )
        user.set_password(password)
        user.save()

        return CreateUser(user=user)


class CreateAdoption(graphene.Mutation):
    adoption = graphene.Field(AdoptionType)

    class Arguments:
        cat_id = graphene.Int(required=True)
        user_id = graphene.Int(required=True)

    def mutate(self, info, cat_id, user_id):
        print(repr(info))
        adoption = Adoption(
            cat_id = Cat.objects.get(pk=cat_id),
            user_id = get_user_model().objects.get(pk=user_id)
        )
        adoption.save()
        
        return CreateAdoption(adoption = adoption)


# class Login(graphene.Mutation):
#     class Arguments:
#         username = graphene.String(required=True)
#         password = graphene.String(required=True)
        
#     def mutate(self, info, username, password):
#         user = authenticate(username=username, password=password)
#         return user


class Mutation(graphene.ObjectType):
    create_user = CreateUser.Field()
    create_adoption = CreateAdoption.Field()
    # login = Login.Field()


    
# # Set your secret key: remember to change this to your live secret key in production
# # See your keys here: https://dashboard.stripe.com/account/apikeys
# stripe.api_key = 'sk_test_NyaCo4VX3cDyY5TBu9WA2ZhW00SAssAE9N'

# # Token is created using Stripe Checkout or Elements!
# # Get the payment token ID submitted by the form:
# token = request.form['stripeToken'] # Using Flask

# charge = stripe.Charge.create(
#     amount=999,
#     currency='aud',
#     description='Example charge',
#     source=token,
# )