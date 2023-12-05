import chef1 from "../../../../assets/betran.png";
import chef2 from "../../../../assets/ferry.png";
import chef3 from "../../../../assets/iswan.png";
import "./Chefs.css";

const Chef = (props) => {
    return (
        <div class="chefs-section__chef">
            <img src={props.img} alt="Betran Chef" />
            <h4>{props.name}</h4>
            <p>{props.title}</p>
        </div>
    );
};

const Chefs = () => {
    return (
        <section id="chefs-section">
            <div class="chefs-section__container container">
                <h2>
                    Our Greatest famous <span>Chefs</span>
                </h2>
                <div class="chefs-section__chefs">
                    <Chef img={chef1} name="Betran Komar" title="Head Chef" />
                    <Chef img={chef2} name="Iswan Dracho" title=" Chef" />
                    <Chef img={chef3} name="Ferri Sauwi" title="Chef" />
                </div>
                <button class="btn btn-lg btn-orange">View All</button>
            </div>
        </section>
    );
};
export { Chefs };
