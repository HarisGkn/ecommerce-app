import Product from './Product'
import home from './img/home.jpg'
import laptop from './img/laptop.jpg'
import smartphone from './img/smartphone.jpg'
import camera from './img/camera.jpg'
import smartwatch from './img/smartwatch.jpg'
import vintageTV from './img/vintageTV.jpg'
import speakers from './img/speakers.jpg'
import motherboard from './img/motherboard.jpg'
import "./Home.css"


function Home(){
    return(
        <div className="home">
            <img className="home__image" src={home} alt="logo"/>

            <div className="home__row">
                <Product
                    id="000001"
                    title="Laptop "
                    price={1499.99}
                    rating={5}
                    image={laptop}
                />
                <Product
                    id="000002"
                    title="Vintage TV"
                    price={54.99}
                    rating={4}
                    image={vintageTV}
                />
                <Product
                    id="000003"
                    title="Camera"
                    price={534.99}
                    rating={3}
                    image={camera}
                />
                <Product
                    id="000004"
                    title="Smart Watch"
                    price={399.99}
                    rating={4}
                    image={smartwatch}
                />
            </div>
            <div className="home__row">
                <Product
                    id="000005"
                    title="Speakers"
                    price={299.99}
                    rating={5}
                    image={speakers}
                />
                <Product
                    id="000006"
                    title="Smartphone"
                    price={349.99}
                    rating={4}
                    image={smartphone}
                />
                <Product
                    id="000007"
                    title="Motherboard"
                    price={119.99}
                    rating={5}
                    image={motherboard}
                />
            </div>
        </div>
    )
}
export default Home