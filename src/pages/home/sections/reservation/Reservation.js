import reservation from "../../../../assets/reservation.png";
const Reservation = () => {
    return (
        <section id="reservation-section">
            <div class="reservation-section__container container">
                <figure class="reservation-section__left">
                    <img src={reservation} alt="People Gathering" />
                </figure>
                <div class="reservation-section__right">
                    <h2>
                        Lets reserve <span>a table</span>
                    </h2>
                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Sunt, rerum voluptatum corrupti optio esse sequi
                        laudantium maiores quibusdam debitis dolorum quia. Quis
                        laudantium enim necessitatibus ullam perspiciatis beatae
                        magnam qui.
                    </p>
                    <button class="btn btn-lg btn-orange">Reservation</button>
                </div>
            </div>
        </section>
    );
};
export { Reservation };
