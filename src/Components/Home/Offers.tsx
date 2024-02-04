import React from 'react';
import "../../Styles/Offers.scss"
import phoneOffers from "../../image/phoneOffers.svg"
import arrow from "../../image/arrow.jpg"
const Offers = () => {
    return (
        <section className="offers">
            <h1>Что мы предлагаем?</h1>

            <div className="offers_content">
                <img src={phoneOffers} alt=""/>

                <div className="offers_content_text">
                    <div className="offers_content_text_auto">
                        <span>01</span>
                        <img src={arrow} alt=""/>
                        <p>Широкий выбор автомобилей по <br/> выгодным ценам</p>
                    </div>
                    <div className="offers_content_text_auto">
                        <span>01</span>
                        <img src={arrow} alt=""/>
                        <p>Максимально простой и удобный<br/> процесс использвания</p>
                    </div>
                    <div className="offers_content_text_auto">
                        <span>01</span>
                        <img src={arrow} alt=""/>
                        <p>Размещение объявлений без <br/> лишних усилий и затрат времени</p>
                    </div>
                    <div className="offers_content_text_auto">
                        <span>01</span>
                        <img src={arrow} alt=""/>
                        <p>Поиск и размещение объявлений в <br/> любое время и в любом месте</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Offers;