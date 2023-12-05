import { TopNavigation } from "./sections/top-navigation/TopNavigation";
import { Hero } from "./sections/hero/Hero";
import { Menu } from "./sections/menu/Menu";
import { Welcome } from "./sections/welcome/Welcome";
import { Reservation } from "./sections/reservation/Reservation";
import { Chefs } from "./sections/chefs/Chefs";
import { Testimonials } from "./sections/testimonial/Testimonial";
import { Hours } from "./sections/hours/Hours";
import { Footer } from "./sections/footer/Footer";

const Home = () => {
    return (
        <>
            <TopNavigation />
            <Hero />
            <Menu />
            <Welcome />
            <Reservation />
            <Chefs />
            <Testimonials />
            <Hours />
            <Footer />
        </>
    );
};
export { Home };
