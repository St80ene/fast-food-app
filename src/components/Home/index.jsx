import React from 'react';
import './Home.scss';
import '../../styles/random.scss';
import { Second } from '../../assets/img';

function HomePage() {
  return (
    <>
      <main className="main layout">
        <section className="section">
          <div className="hero">
            <div className="hero__introtext">
              <p>Great calories in every bite.</p>
              <h3>
                It's not just Food,
                <br />
                It's an Experience.
              </h3>
            </div>
            <div className="hero__introImage">
              <img alt="food" src={Second} />
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default HomePage;
