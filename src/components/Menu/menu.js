import spaghetti from "../../assets/menu-spaghetti.png";
import star from "../../assets/star-filled.svg";
import gnocchi from "../../assets/menu-gnocchi.png";
import ravioli from "../../assets/menu-rovioli.png";
import splitza from "../../assets/menu-splitza.png";
import risoto from "../../assets/menu-risoto.png";
const Menu = () => {
    return (
        <section id="menu-section">
            <div class="menu-section__container container">
                <h2>Our Popular Menu</h2>
                <div class="menu-section__filters">
                    <button class="btn btn-lg btn-black">All Catagories</button>
                    <button class="btn btn-lg btn-gray">Out Dinner</button>
                    <button class="btn btn-lg btn-gray">Lunch</button>
                    <button class="btn btn-lg btn-gray">Dessert</button>
                    <button class="btn btn-lg btn-gray">Drink</button>
                </div>
                <div class="menu-section__meals">
                    <div class="card">
                        <img
                            src={spaghetti}
                            alt="Spaghetti"
                            class="card__img"
                        />
                        <h3 class="card__title">Spaghetti</h3>
                        <div class="menu-section__stars">
                            <img src={star} alt="" />
                            <img src={star} alt="" />
                            <img src={star} alt="" />
                            <img src={star} alt="" />
                            <img src={star} alt="" />
                        </div>
                        <p class="card__text">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Egestas consequat mi eget auctor aliquam,diam.
                        </p>
                        <div class="card__footer">
                            <span class="menu-section__price">$11.99</span>
                            <button class="btn btn-md btn-orange">
                                Order Now
                            </button>
                        </div>
                    </div>
                    <div class="card">
                        <img src={gnocchi} alt="Spaghetti" class="card__img" />
                        <h3 class="card__title">Gnocchi</h3>
                        <div class="menu-section__stars">
                            <img src={star} alt="" />
                            <img src={star} alt="" />
                            <img src={star} alt="" />
                            <img src={star} alt="" />
                            <img src={star} alt="" />
                        </div>
                        <p class="card__text">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Egestas consequat mi eget auctor aliquam,diam.
                        </p>
                        <div class="card__footer">
                            <span class="menu-section__price">$14.49</span>
                            <button class="btn btn-md btn-orange">
                                Order Now
                            </button>
                        </div>
                    </div>
                    <div class="card">
                        <img src={ravioli} alt="Spaghetti" class="card__img" />
                        <h3 class="card__title">Rovioli</h3>
                        <div class="menu-section__stars">
                            <img src={star} alt="" />
                            <img src={star} alt="" />
                            <img src={star} alt="" />
                            <img src={star} alt="" />
                            <img src={star} alt="" />
                        </div>
                        <p class="card__text">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Egestas consequat mi eget auctor aliquam,diam.
                        </p>
                        <div class="card__footer">
                            <span class="menu-section__price">$8.99</span>
                            <button class="btn btn-md btn-orange">
                                Order Now
                            </button>
                        </div>
                    </div>
                    <div class="card">
                        <img
                            src="./assets/menu-penne-alla-vodak.png"
                            alt="Spaghetti"
                            class="card__img"
                        />
                        <h3 class="card__title">Penne Alla Vodak</h3>
                        <div class="menu-section__stars">
                            <img src={star} alt="" />
                            <img src={star} alt="" />
                            <img src={star} alt="" />
                            <img src={star} alt="" />
                            <img src={star} alt="" />
                        </div>
                        <p class="card__text">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Egestas consequat mi eget auctor aliquam,diam.
                        </p>
                        <div class="card__footer">
                            <span class="menu-section__price">$6.99</span>
                            <button class="btn btn-md btn-orange">
                                Order Now
                            </button>
                        </div>
                    </div>
                    <div class="card">
                        <img src={risoto} alt="Spaghetti" class="card__img" />
                        <h3 class="card__title">Risoto</h3>
                        <div class="menu-section__stars">
                            <img src={star} alt="" />
                            <img src={star} alt="" />
                            <img src={star} alt="" />
                            <img src={star} alt="" />
                            <img src={star} alt="" />
                        </div>
                        <p class="card__text">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Egestas consequat mi eget auctor aliquam,diam.
                        </p>
                        <div class="card__footer">
                            <span class="menu-section__price">$9.99</span>
                            <button class="btn btn-md btn-orange">
                                Order Now
                            </button>
                        </div>
                    </div>
                    <div class="card">
                        <img src={splitza} alt="Spaghetti" class="card__img" />
                        <h3 class="card__title">Splitza Signature</h3>
                        <div class="menu-section__stars">
                            <img src={star} alt="" />
                            <img src={star} alt="" />
                            <img src={star} alt="" />
                            <img src={star} alt="" />
                            <img src={star} alt="" />
                        </div>
                        <p class="card__text">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Egestas consequat mi eget auctor aliquam,diam.
                        </p>
                        <div class="card__footer">
                            <span class="menu-section__price">$17.99</span>
                            <button class="btn btn-md btn-orange">
                                Order Now
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
export { Menu };
