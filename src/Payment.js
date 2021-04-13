import React from 'react'
import './Payment.css'
import ProductCart from './ProductCart';
import { Link } from 'react-router-dom'
import { useStateValue } from './StateProvider'

function Payment() {
    const [{basket, loggedInUser}, dispatch] = useStateValue();
    return (
        <div className='payment'>
            <div className='payment__container'>
                <h1>
                    Checkout (
                        <Link to="/checkout"> {basket?.length} items </Link>
                        )
                </h1>
                {/* payment section - delivery address */}

                <div className='payment__section'>
                    <div className='payment__title'>
                        <h3>Delivery Address</h3>
                    </div>
                    <div className='payment__address'>
                        <p>{loggedInUser?.email}</p>
                        <p>Some Address</p>
                        <p>A Particular City</p>
                    </div>
                </div>

                {/* payment section - Review Items */}

                <div className='payment__section'>
                    <div className='payment__title'>
                        <h3>Review Items And Delivery</h3>
                    </div>
                    <div className='payment__items'>
                        {basket.map(item => (
                            <ProductCart
                                id={item.id}
                                title={item.title}
                                image={item.image}
                                price={item.price}
                                rating={item.rating}
                            />
                        ))}
                    </div>
                </div>

                {/* payment section - payment method */}

                <div className='payment__section'>
                    <div className='payment__title'>
                        <h3>Payment Method</h3>
                    </div>
                    <div className='payment__details'>
                        <h3>Would normally use Stripe for this, but since the app is only a portfolio project i won't</h3>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Payment