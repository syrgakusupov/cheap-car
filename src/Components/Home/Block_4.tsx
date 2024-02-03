import React from 'react';
import "../../Styles/Block_4.scss"
import phone_4 from "../../image/phon4.svg"
const Block4 = () => {
    return (
        <div className="block_4">
            <div className="block_4_content">
                <img src={phone_4} alt=""/>

                <div className="block_4_content_text">
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
        </div>
    );
};

export default Block4;