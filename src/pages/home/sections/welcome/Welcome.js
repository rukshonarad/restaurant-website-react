import salad from "../../../../assets/salad.png";
import "./Welcome.css";
const Welcome = () => {
    return (
        <section id="welcome-section">
            <div class="welcome-section__container container">
                <figure class="welcome-section__left">
                    <img src={salad} alt="Salad" />
                </figure>
                <div class="welcome-section__right">
                    <h2>
                        Welcome to <span>DeliziOso</span>
                    </h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Facilisis ultricies at eleifend proin. Congue nibh nulla
                        malesuada ultricies nec quam
                    </p>
                    <button class="btn btn-lg btn-orange">See Our Menu</button>
                </div>
            </div>
        </section>
    );
};
export { Welcome };
