import "./App.css";
import { Header } from "./components/Header/Header";
import { Hero } from "./components/Hero/hero";
import { Welcome } from "./components/Welcome/welcome";
import { Menu } from "./components/Menu/menu";
import { Reservation } from "./components/Reservation/reservation";
function App() {
    return (
        <>
            <Header />
            <Hero />
            <Welcome />
            <Menu />
            <Reservation />
        </>
    );
}

export default App;
