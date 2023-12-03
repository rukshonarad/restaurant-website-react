import betran from "../../../../assets/betran.png";
import ferry from "../../../../assets/ferry.png";
import iswan from "../../../../assets/iswan.png";
const Chefs = () => {
    return (
        <section id="chefs-section">
            <div class="chefs-section__container container">
                <h2>
                    Our Greatest famous <span>Chefs</span>
                </h2>
                <div class="chefs-section__chefs">
                    <div class="chefs-section__chef">
                        <img src={betran} alt="Betran Chef" />
                        <h4>Betran Komar</h4>
                        <p>Lead chef</p>
                    </div>
                    <div class="chefs-section__chef">
                        <img src={ferry} alt="Ferry chef" />
                        <h4>Ferry Sauwi</h4>
                        <p>Chef</p>
                    </div>
                    <div class="chefs-section__chef">
                        <img src={iswan} alt="Iswan Chef" />
                        <h4>Iswan Dracho</h4>
                        <p>Chef</p>
                    </div>
                </div>
                <button class="btn btn-lg btn-orange">View All</button>
            </div>
        </section>
    );
};
export { Chefs };
