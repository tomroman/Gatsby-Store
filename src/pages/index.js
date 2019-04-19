import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

class Button extends React.Componenet {
  componentDidMount() {
    this.stripe = Stripe('pk_test_K9AD7LxDvcFm2QCFUp6CWozG00IkLvxGoz', {betas: ['checkout_beta_4']});
  }

  render() {
    return (
      <form onSubmit={event => {
        event.preventDefault();
        this.stripe.redirectToCheckout({
          items: [{sku: 'sku_Eubk4P0rcAf2U6', quantity: 1}],
    
          // Note that it is not guaranteed your customers will be redirected to this
          // URL *100%* of the time, it's possible that they could e.g. close the
          // tab between form submission and the redirect.
          successUrl: 'https://localhost:8000/success',
          cancelUrl: 'https://localhost:8000/canceled',
        })
        .then(function (result) {
          if (result.error) {
            // If `redirectToCheckout` fails due to a browser or network
            // error, display the localized error message to your customer.
            var displayError = document.getElementById('error-message');
            displayError.textContent = result.error.message;
          }
        });
      }}>
      </form>
    )
  }
}
  

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h1>Buy Freelance Pants</h1>
    <button> Buy Pants</button>
   
  </Layout>
)

export default IndexPage
