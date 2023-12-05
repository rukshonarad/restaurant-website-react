import twitter from "../../../../assets/twitter.svg";
import instagram from "../../../../assets/instagram.svg";
import facebook from "../../../../assets/facebook.svg";
import "./Footer.css";
const Footer = () => {
    return (
        <footer id="footer">
            <div class="footer__container container">
                <div class="footer__content">
                    <div class="footer__brand">
                        <img
                            src="./assets/logo-dark.svg"
                            alt=""
                            class="footer__logo"
                        />
                        <p class="footer__text">
                            Lorem, ipsum dolor sit amet consectetur adipisicing
                            elit
                        </p>
                        <div class="footer__social-icons">
                            <img src={twitter} alt="twitter" />
                            <img src={instagram} alt="instagram" />
                            <img src={facebook} alt="facebook" />
                        </div>
                    </div>
                    <div class="footer__pages">
                        <h4 class="footer__heading">Page</h4>
                        <a href="" class="footer__text">
                            Home
                        </a>
                        <a href="" class="footer__text">
                            Menu
                        </a>
                        <a href="" class="footer__text">
                            Order Online
                        </a>
                        <a href="" class="footer__text">
                            Catering
                        </a>
                        <a href="" class="footer__text">
                            Reservation
                        </a>
                    </div>
                    <div class="footer__about">
                        <h4 class="footer__heading">Information</h4>
                        <a href="" class="footer__text">
                            About Us
                        </a>
                        <a href="" class="footer__text">
                            {" "}
                            Testimonials
                        </a>
                        <a href="" class="footer__text">
                            Event
                        </a>
                    </div>
                    <div class="footer__contact">
                        <h4 class="footer__heading">Get In Touch</h4>
                        <p class="footer__text">
                            3247 Jahnson Ave,
                            <br />
                            Bronx, NY 10463
                        </p>
                        <a
                            href="mailto: rrukhshona@yahoo.com"
                            class="footer__text"
                        >
                            rrukhshona@yahoo.com
                        </a>
                        <a href="tel:347-567-2828" class="footer__text">
                            347-367-2828
                        </a>
                    </div>
                </div>
                <p class="footer__text text__center">
                    Copyright &copy;2023 Delizioso
                </p>
            </div>
        </footer>
    );
};
export { Footer };
