import logoWhite from "../../assets/logo-white.svg";
import cart from "../../assets/cart.svg";
import "../Header/Header.css";
const Header = () => {
    return (
        <header className="header">
            <nav className="navigation container">
                <img src={logoWhite} alt="DeliziOso" className="logo-white" />
                <ul className="navigation__links">
                    <li>
                        <a href="" id="navigation__link">
                            Home
                        </a>
                    </li>
                    <li>
                        <a href="">Menu</a>
                    </li>
                    <li>
                        <a href="">About Us</a>
                    </li>
                    <li>
                        <a href="">Reservation</a>
                    </li>
                    <li>
                        <a href="">Contact Us</a>
                    </li>
                </ul>
                <div className="navigation__actions">
                    <figure>
                        <img src={cart} alt="Shopping Cart" />
                    </figure>
                    <button
                        className="btn btn-sm btn-green"
                        onClick={() => alert("My name is Rukhshona")}
                    >
                        Log In
                    </button>
                </div>
            </nav>
        </header>
    );
};
export { Header };
