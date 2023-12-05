import React from "react";
import hero from "../../../../assets/hero.png";
import "./Hero.css";
const Hero = () => {
    return (
        <section id="hero-section">
            <div className="hero-section__container container">
                <div className="hero-section__left">
                    <span>Restaurant</span>
                    <h1 className="hero-section__heading">Italian Cuisine</h1>
                    <p className="hero-section__description">
                        Welcome to our restaurant website! We are a modern
                        Italian restaurant that offers authentic cuisine made
                        from the freshest ingredients.
                    </p>
                    <div className="hero-section__cta">
                        <button className="btn btn-lg btn-orange">
                            Order Now
                        </button>
                        <button className="btn btn-lg btn-green">
                            Reserve Now
                        </button>
                    </div>
                </div>

                <div className="hero-section__right">
                    <img
                        src={hero}
                        alt="Spaghetti"
                        className="hero-section__img"
                    />
                </div>
            </div>
        </section>
    );
};

export { Hero };
