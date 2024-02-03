import React from 'react';
import "../../Styles/Block_3.scss"
import phoneIcon from "../../image/phoneIcon.png"
import cardIcon from "../../image/cardIcon.png"
import telIcon from "../../image/telIcon.png"
const Block3 = () => {
    return (
        <div className="block_3">
            <h1>Как работает приложение</h1>

            <div className="block_3_content">
                <div className="block_3_content_contacts">
                    <span><a href="#"><img src={phoneIcon} alt=""/></a></span>
                    <div className="block_3_content_contacts_text">
                        <h2>Установление и регистрация</h2>
                        <p>Установите приложение и создайте учетную запись, указывая лишь номер телефона.</p>
                    </div>
                </div>
                <div className="block_3_content_contacts">
                    <span>
                        <a href="#"><img src={cardIcon} alt=""/></a>
                    </span>
                    <div className="block_3_content_contacts_text">
                        <h2>Поиск или размещение объявлений</h2>
                        <p>Ищите и просматривайте доступные автомобили или же легко и быстро размещайте объявления.</p>
                    </div>
                </div>
                <div className="block_3_content_contacts">
                    <span>
                        <a href="#"><img src={telIcon} alt=""/></a>
                    </span>
                    <div className="block_3_content_contacts_text">
                        <h2>Связь с продавцом или покупателем</h2>
                        <p>Для получения дополнительной информации, организации осмотра и заключения сделки!</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Block3;