import React from 'react'
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">

        <img
          className="home__image"
          src="https://images-na.ssl-images-amazon.com/images/G/15/kindle/journeys/MTM3M2NhM2Et/MTM3M2NhM2Et-MDZiMjBiMjkt-w1500._CB406836698_.jpg"
          alt="" />

        <div className="home__row">
          <Product
            id="23538097"
            title="Nintendo Switch Console - Neon Edition"
            price={299.99}
            image="https://images-na.ssl-images-amazon.com/images/I/71ivrWiYkLL._AC_SL1500_.jpg"
            rating={5}
          />

          <Product
            id="49538094"
            title="Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer
            with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl"
            price={239.99}
            image="https://images-na.ssl-images-amazon.com/images/I/81O%2BGNdkzKL._AC_SL1500_.jpg"
            rating={4}
          />
        </div>

        <div className="home__row">
          <Product
            id="4903850"
            title="Fitbit Versa 2 Health and Fitness Smartwatch with Heart Rate, Music, Alexa Built-In"
            price={239.99}
            image="https://images-na.ssl-images-amazon.com/images/I/715obo1cz0L._AC_SL1500_.jpg"
            rating={3} />

          <Product
            id="23445930"
            title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
            price={99.99}
            image="https://images-na.ssl-images-amazon.com/images/I/61b4qFTXRML._AC_SL1000_.jpg"
            rating={5}
          />

          <Product
            id="3254354345"
            title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) – Silver (4th Generation)"
            price={598.99}
            image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
            rating={4}
          />
        </div>

        <div className="home__row">
          <Product
            id="90829332"
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor"
            price={239.99}
            image="https://images-na.ssl-images-amazon.com/images/I/71916r38cNL._AC_SL1500_.jpg"
            rating={4} />

        </div>

      </div>
    </div>
  )
}

export default Home
