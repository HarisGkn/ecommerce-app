import Product from './Product'
import home from './img/home.jpg'
import laptop from './img/laptop.jpg'
import smartphone from './img/smartphone.jpg'
import camera from './img/camera.jpg'
import smartwatch from './img/smartwatch.jpg'
import vintageTV from './img/vintageTV.jpg'
import speakers from './img/speakers.jpg'
import motherboard from './img/motherboard.jpg'
import hdd from './img/hdd.jpg'
import powerbank from './img/powerbank.jpg'
import console from './img/console.jpg'
import keyboard from './img/keyboard.jpg'
import "./Home.css"


alert("this app was developed as a portfolio project and also so I could practice my react skills")

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
            <div className="home__row">
                <Product
                    id="000008"
                    title="HDD"
                    price={29.99}
                    rating={4}
                    image={hdd}
                />
                <Product
                    id="000009"
                    title="Powerbank"
                    price={18.99}
                    rating={3}
                    image={powerbank}
                />
                <Product
                    id="000010"
                    title="Game Console"
                    price={229.99}
                    rating={5}
                    image={console}
                />
                <Product
                    id="000011"
                    title="Keyboard"
                    price={17.99}
                    rating={2}
                    image={keyboard}
                />
            </div>
        </div>
    )
}
export default Home