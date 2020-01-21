from django.core.mail import EmailMultiAlternatives
from django.contrib.auth import get_user_model, login, logout, authenticate
from datetime import datetime
import graphene
from graphene_django.types import DjangoObjectType
from graphql.error import GraphQLError
import stripe
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
    amount = graphene.Int()
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
        stripe.api_key = "sk_test_NyaCo4VX3cDyY5TBu9WA2ZhW00SAssAE9N"
        try:
            charge = stripe.Charge.create(
                amount=input.amount*100,  
                currency="AUD",
                source=input.stripetoken
            )

            ok = True
            date = datetime.now()
            cat = Cat.objects.get(name=input.cat)
            donation = Donation(amount=input.amount, email=input.email, stripetoken=input.stripetoken, cat=cat, date=date)
            donation.save()


            subject = 'Thank your for your gift to Free Spirits'
            from_email = "admin@freespirits.com"
            to = input.email
            text_content = "Your donation of " + str(input.amount) + " dollors may be tax deductible."
            html_content = '<h1><strong>Thank You</strong> for this donation</h1><p>Your donation of ' + str(input.amount) +  ' dollors may be tax deductible.</p>'

            message = EmailMultiAlternatives(subject, text_content, from_email, [to])
            message.attach_alternative(html_content, "text/html")
            message.send()

            return CreateDonation(ok=ok, donation=donation)

        except stripe.error.CardError as e:
            body = e.json_body
            err = body.get("error", {})
            raise GraphQLError(err.get('message'))
            

        except stripe.error.RateLimitError as e:
            raise GraphQLError("Rate limit error")
            

        except stripe.error.InvalidRequestError as e:
            # Invalid parameters were supplied to Stripe's API
            raise GraphQLError("Invalid parameters")
            

        except stripe.error.AuthenticationError as e:
            # Authentication with Stripe's API failed
            # (maybe you changed API keys recently)
            raise GraphQLError("Not authenticated")

        except stripe.error.APIConnectionError as e:
            # Network communication with Stripe failed
            raise GraphQLError("Network error")

        except stripe.error.StripeError as e:
            # Display a very generic error to the user, and maybe send
            # yourself an email
            raise GraphQLError("Something went wrong. You were not charged. Please try again.")


class Mutation(graphene.ObjectType):
    create_donation = CreateDonation.Field()


