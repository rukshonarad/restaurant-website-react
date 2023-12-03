import "./Hours";
const Hours = () => {
    return (
        <section id="hours-section">
            <div class="hours-section__container container">
                <div class="hours-section__backgraund">
                    <div class="hours-section__hours">
                        <h2>We are open from</h2>
                        <h3>Monday - Sunday</h3>
                        <div class="hours-section__lunch-dinner">
                            <p>Launch: Mon-Sun: 11:00am-02:00pm</p>
                            <p>Dinner: Sunday: 4:00pm-8:00pm</p>
                            <p>4:00pm-9:00pm</p>
                        </div>
                        <button class="btn btn-lg btn-orange">Order Now</button>
                        <button class="btn btn-lg btn-white">
                            Reservation
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};
export { Hours };
