import React from 'react'
import './Footer.css'

function Footer(){

    return(
            <div className="footerArea">
                <div className="footerArea__links">
                    <div className="footerArea__linkArea">
                        <span>About Us</span>
                    </div>
                    <div className="footerArea__linkArea">
                        <span>Payment Methods</span>
                    </div>
                    <div className="footerArea__linkArea">
                        <span>Delivery rates and policy</span>
                    </div>
                </div>
                <div className="footerArea__links">
                    <div className="footerArea__linkArea">
                        <span>Returns and replacements</span>
                    </div>
                    <div className="footerArea__linkArea">
                        <span>Environmental policy</span>
                    </div>
                    <div className="footerArea__linkArea">
                        <span>Customer service</span>
                    </div>
                </div>
                <div className="footerArea__links">
                    <div className="footerArea__linkArea">
                        <span>Company location</span>
                    </div>
                    <div className="footerArea__linkArea">
                        <span>Contact info</span>
                    </div>
                    <div className="footerArea__linkArea">
                        <span>Covid-19</span>
                    </div>
                </div>
                
            </div>
    )

}

export default Footer