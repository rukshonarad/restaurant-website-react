import React from "react";
import hero from "../../assets/hero.png";
class Hero extends React.Component {
    render() {
        return (
            <section id="hero-section">
                <div class="hero-section__container container">
                    <div class="hero-section__left">
                        <span>Restaurant</span>
                        <h1 class="hero-section__heading">Italian Cuisine</h1>
                        <p class="hero-section__description">
                            Welcome to our restaurant website! We are a modern
                            Italian restaurant that offers authentic cuisine
                            made from the freshest ingredients.
                        </p>
                        <div class="hero-section__cta">
                            <button class="btn btn-lg btn-orange">
                                Order Now
                            </button>
                            <button class="btn btn-lg btn-green">
                                Reserve Now
                            </button>
                        </div>
                    </div>

                    <div class="hero-section__right">
                        <img
                            src={hero}
                            alt="Spaghetti"
                            class="hero-section__img"
                        />
                    </div>
                </div>
            </section>
        );
    }
}
export { Hero };
