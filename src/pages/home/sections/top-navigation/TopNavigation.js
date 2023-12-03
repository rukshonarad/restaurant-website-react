import logoWhite from "../../../../assets/logo-white.svg";
import cart from "../../../../assets/cart.svg";
import "./TopNavigation.css";

const links = [
    { text: "Home", link: "http://google.com" },
    { text: "Menu", link: "https://facebook.com" },
    { text: "About Us", link: "http://google.com" },
    { text: "Reservation", link: "http://google.com" },
    { text: "Home", link: "http://google.com" }
];

const TopNavigation = () => {
    return (
        <header className="header">
            <nav className="navigation container">
                <img src={logoWhite} alt="DeliziOso" className="logo-white" />
                <ul className="navigation__links">
                    {links.map((link, idx) => {
                        return (
                            <li key={idx}>
                                <a href={link.link}>{link.text}</a>
                            </li>
                        );
                    })}
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
export { TopNavigation };
