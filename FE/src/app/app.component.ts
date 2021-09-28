import { Component } from "@angular/core";
import { environment } from "../../src/environments/environment";
import { loadStripe } from "@stripe/stripe-js";
import { DashboardServiceService } from "../../src/app/core/services/dashboard-service/dashboard-service.service";
import { ToastrService } from "ngx-toastr";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  title = "Demo";
  public stripe: any;

  isHideFooter: boolean = false;
  clientSecretKey: any;
  constructor(
    private dashboardService: DashboardServiceService,
    private toastr: ToastrService
  ) {}

  ngOnInit() {
    this.paymentApi();
  }
  ngAfterViewInit() {
    this.loadStripe();
  }
  async loadStripe() {
    const stripe = await loadStripe(environment.stripeKey);
    var style = {
      base: {
        color: "#828282",
        fontSize: "16px",
        "::placeholder": {
          color: "#828282",
          opacity: 1,
        },
        fontFamily: '"Poppins", Serif, Sans-serif, cursive, fantasy, Monospace',
      },
      invalid: {
        color: "#fa755a",
        iconColor: "#fa755a",
      },
    };

    var paymentRequest = stripe.paymentRequest({
      country: "IN",
      currency: "inr",
      total: {
        label: "Demo total",
        amount: 100 * 100,
      },
      requestPayerName: true,
      requestPayerEmail: true,
    });

    var elements = stripe.elements();
    var prButton = elements.create("paymentRequestButton", {
      paymentRequest: paymentRequest,
      style: {
        paymentRequestButton: {
          type: "default",
          // One of 'default', 'book', 'buy', or 'donate'
          // Defaults to 'default'

          theme: "dark",
          // One of 'dark', 'light', or 'light-outline'
          // Defaults to 'dark'

          height: "64px",
          // Defaults to '40px'. The width is always '100%'.
        },
      },
    });
    this.stripe = stripe;
    let clientSecretKey = this.clientSecretKey;
    let toastr = this.toastr;
    // Check the availability of the Payment Request API first.
    paymentRequest.canMakePayment().then(function (result) {
      if (result) {
        console.log("Yes");
        prButton.mount("#payment-request-button");
      } else {
        console.log("No");

        document.getElementById("payment-request-button").style.display =
          "none";
      }
    });

    paymentRequest.on("paymentmethod", (ev) => {
      stripe
        .confirmCardPayment(
          this.clientSecretKey,
          { payment_method: ev.paymentMethod.id },
          { handleActions: false }
        )
        .then(function (confirmResult) {
          if (confirmResult.error) {
            ev.complete("fail");
          } else {
            ev.complete("success");
            toastr.success("Payment Completed Sucessfully.");
            if (confirmResult.paymentIntent.status === "requires_action") {
              stripe
                .confirmCardPayment(this.clientSecretKey)
                .then(function (result) {
                  if (result.error) {
                  } else {
                  }
                });
            } else {
            }
          }
        });
    });
  }
  paymentApi() {
    console.log("paymentApipaymentApi");
    let data = {
      amount: 100 * 100,
      payment_method_id: null,
    };

    this.dashboardService.payment(data).subscribe(
      (res: any) => {
        this.clientSecretKey = res.data.client_secret;
        console.log("resresres", res.data.client_secret);
      },
      (error) => {}
    );
  }
}
