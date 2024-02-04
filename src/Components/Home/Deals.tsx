import React from 'react';
import "../../Styles/Deals.scss"
import phone from "../../image/phone.svg"
import apple from "../../image/applstore.svg"
import google from "../../image/googlplay.svg"
const Deals = () => {
    return (
            <section className="deals">
                <div className="deals_text">
                    <h1>
                        Лучшие сделки на <br/>
                        автомобили здесь!
                    </h1>
                    <p>
                        Арзан Машина предлагает широкий выбор автомобилей
                        различных марок и моделей для покупки и продажи по
                        самым привлекательным ценам на рынке.
                        Откройте для себя новый уровень удобства и экономии
                        вместе с нами!

                    </p>
                    <div className='deals_text_btn' >
                        <a href="#"><img src={apple} alt=""/></a>
                        <a href="#"><img src={google} alt=""/></a>
                    </div>
                </div>

                <div className="phone">
                    <img src={phone} alt=""/>
                </div>

                <div className="deals_progress">
                    <div className="deals_progress_inside">
                        <span></span>
                    </div>
                </div>

            </section>
    );
}

export default Deals;