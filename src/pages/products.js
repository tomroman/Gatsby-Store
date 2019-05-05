import React from 'react';

class Product extends React.Component {
    componentDidMount() {
        this.stripe = window.Stripe('pk_test_K9AD7LxDvcFm2QCFUp6CWozG00IkLvxGoz', {
          betas: ['checkout_beta_4'],
        })
      }

      return() {
        const {id, currency, price, name } = this.props;

        const priceFloat = (price / 100).toFixed(2)
        const formattedPrice = Intl.NumberFormat('en-US', {
            style: 'currency',
            currency,
          }).format(priceFloat)

        return (
            <div>
                <h2>{name} </h2>
            </div>
        )
      }
}