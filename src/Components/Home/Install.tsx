import React from 'react';
import "../../Styles/Install.scss"
import phoneInstall from "../../image/phoneInstall.svg"
const Install = () => {
    return (
        <section className="install">
            <div className="install_content">
                <img src={phoneInstall} alt=""/>

                <div className="install_content_text">
                    <h1>Установите приложение</h1>
                    <p>
                        Наши широкие возможности поиска, безопасные сделки и
                        удобное взаимодействие с продавцами помогут вам найти
                        свой автомобиль. Начните ваше путешествие в мире машин
                        прямо сейчас!
                    </p>
                    <button>Скачать Арзан Машина</button>
                </div>
            </div>
        </section>
    );
};

export default Install;