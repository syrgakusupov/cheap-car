import React from 'react';
import "../../Styles/Block_1.scss"
import phone from "../../image/phone.svg"
import apple from "../../image/applstore.svg"
import google from "../../image/googlplay.svg"
const Block_1 = () => {
    return (
            <div className="block">
                <div className="block_text">
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
                    <div className='block_text_btn' >
                        <a href="#"><img src={apple} alt=""/></a>
                        <a href="#"><img src={google} alt=""/></a>
                    </div>
                </div>

                <div className="phone">
                    <img src={phone} alt=""/>
                </div>
                    <div className="block_progress">
                        <div className="block_progress_inside">
                            <span></span>

                        </div>
                    </div>

            </div>
    );
}

export default Block_1;