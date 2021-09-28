
from rest_framework.response import Response

from rest_framework.generics import ( GenericAPIView)
# Create Stripe Customer User
import stripe
import os
from dotenv import load_dotenv
from .utils import ResponseInfo

load_dotenv()

stripe.api_key = "sk_test_oeTpceF6HsI6ApSfRsnu338T009QgIfkxD"



# Create one time Payment
class CreateOneTimePaymentAPIView(GenericAPIView):
    """
    Create One time Payment API View
    """

    def __init__(self, **kwargs):
        """
         Constructor function for formatting the web response to return.
        """
        self.response_format = ResponseInfo().response

    def post(self, request):
        print("Api called")

        amount = self.request.data["amount"]
        payment_intent_data = stripe.PaymentIntent.create(
                                                amount=amount,
                                                currency='inr',
                                                       )
        self.response_format["data"] = payment_intent_data
        return Response(self.response_format)
