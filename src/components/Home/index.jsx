import React from 'react';
import './Home.scss';
import '../../styles/random.scss';
import { Ball, Delivery, Salad, Second } from '../../assets/img';
import 'animate.css';
import { Link } from 'react-router-dom';
import Img from 'react-cool-img';
import FooterContainer from '../Footer/FooterContainers/footer';

function HomePage() {
  return (
    <>
      <main className="main layout">
        <section className="hero-section">
          <div className="hero">
            <div className="hero__intro-text">
              <div className="hero__intro-text__wrapper">
                <p>Great calories in every bite.</p>
                <h3>
                  It's not just Food,
                  <br />
                  It's an Experience.
                </h3>
              </div>
            </div>
            <div className="hero__intro-image">
              <Img alt="food" placeholder={Ball} debounce={700} src={Second} />
            </div>
          </div>
        </section>
        <section>
          <div className="taste">
            <h3 className="taste__text">
              EXTRAORDINARY TASTE <br /> EXPERIENCE
            </h3>
            <p>Delicious cuisines</p>
          </div>
        </section>
        <section>
          <div className="experience">
            <div className="experience__exImage">
              <Img
                placeholder={Ball}
                alt="salad"
                debounce={700}
                src={Salad}
                lazy={true}
              />
            </div>
            <div className="experience__exText">
              <div className="experience__exText__wrapper">
                <h3>
                  High quality Food <br />
                  you can trust
                </h3>
                <p>
                  Continually producing whole meal that is good <br /> for your
                  health.As our customer, we value your <br /> well-being. That
                  is why we try our best to give <br />
                  you that nutrition you so deserve
                </p>
                <Link to="/menu">Checkout Our Menu</Link>
              </div>
            </div>
          </div>
        </section>
        <section className="hero-section">
          <div className="hero">
            <div className="hero__intro-text">
              <div className="hero__intro-text__wrapper">
                <h3>
                  Fast Food Delivery
                  <br />
                  you can trust
                </h3>
                <p>
                  We make sure your food arrives <br />
                  on time for your healthy consumption.
                </p>
                <Link to="/services">Check Out Our Services</Link>
              </div>
            </div>
            <div className="hero__intro-image">
              <Img
                placeholder={Ball}
                alt="we deliver to your doorstep"
                debounce={700}
                src={Delivery}
              />
            </div>
          </div>
        </section>
        <FooterContainer />
      </main>
    </>
  );
}

export default HomePage;
