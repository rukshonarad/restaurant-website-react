import customerSecond from "../../../../assets/customer-2.png";
import customerFirst from "../../../../assets/customer-1.png";
import customerThird from "../../../../assets/customer-3.png";
import "./Testimonial.css";
const Testimonial = () => {
    return (
        <section id="testimonials-section">
            <div class="testimonials-section__container container">
                <h2>What Customer Say</h2>
                <div class="testimonials-section__testimonials">
                    <div class="testimonials-section__testimonial">
                        <img src={customerSecond} alt="Starla Virgoun" />
                        <h4>Starla Virgoun</h4>
                        <h5>Finansial Advisor</h5>
                        <p>
                            The ambiance was cozy and welcoming, and the staff
                            were friendly and attentive. The menu offered a
                            great variety of Italian dishes, and the food was
                            absolutely delicious.
                        </p>
                    </div>
                    <div class="testimonials-section__testimonial">
                        <img src={customerFirst} alt=" Tosh Mat" />
                        <h4>Tosh Mat</h4>
                        <h5>Uber Driverr</h5>
                        <p>
                            Lorem ipsum dolor sit, amet consectetur adipisicing
                            elit. Maxime in laboriosam deserunt molestiae
                            voluptatem fugiat quaerat ratione. Doloribus,
                            tenetur! .
                        </p>
                    </div>

                    <div class="testimonials-section__testimonial">
                        <img src={customerThird} alt="James Steven" />
                        <h4>James Steven</h4>
                        <h5>Teacher</h5>
                        <p>
                            Lorem ipsum dolor sit, amet consectetur adipisicing
                            elit. Maxime in laboriosam deserunt molestiae
                            voluptatem fugiat quaerat ratione. Doloribus,
                            tenetur! .
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};
export { Testimonial };
