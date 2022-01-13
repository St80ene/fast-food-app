import React from 'react';
import './Home.scss';
import '../../styles/random.scss';
import { Salad, Second } from '../../assets/img';
import 'animate.css';

function HomePage() {
  return (
    <>
      <main className="main layout">
        <section className="hero-section">
          <div className="hero">
            <div className="hero__intro-text">
              <p>Great calories in every bite.</p>
              <h3>
                It's not just Food,
                <br />
                It's an Experience.
              </h3>
            </div>
            <div className="hero__intro-image">
              <img alt="food" src={Second} />
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
        {/* <section>
          <div className="experience">
            <div className="experience__image">
              <img alt="salad" src={Salad} />
            </div>
            <div className="experience__text">
              <h3>
                High Quality Food
                <br />
                Material.
              </h3>
            </div>
          </div>
        </section> */}
      </main>
    </>
  );
}

export default HomePage;
