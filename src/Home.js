import Product from './Product'
import home from './img/home.jpg'
import laptop from './img/laptop.jpg'
import smartphone from './img/smartphone.jpg'
import camera from './img/camera.jpg'
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
                    title="Smartphone"
                    price={349.99}
                    rating={4}
                    image={smartphone}
                />
                <Product
                    id="000003"
                    title="Camera"
                    price={534.99}
                    rating={5}
                    image={camera}
                />
            </div>
        </div>
    )
}
export default Home