import "./ThirdBlock.css";
import image1 from "../ThirdBlock/grid1.png"
import image2 from "../ThirdBlock/grid2.png"
import image3 from "../ThirdBlock/grid3.png"
import image4 from "../ThirdBlock/grid4.png"
import image5 from "../ThirdBlock/grid5.png"
import image6 from "../ThirdBlock/grid6.png"
import firstImage from "../ThirdBlock/firstimage.png"
import secondImage from "../ThirdBlock/secondimage.png"
import thirdImage from "../ThirdBlock/thirdimage.png"
import fourthImage from "../ThirdBlock/fourthimage.png"
import fifthImage from "../ThirdBlock/fifthimage.png"
import sixthImage from "../ThirdBlock/sixthimage.png"
export const ThirdBlock = () => {
    return (
        <>
            <div className="third-block narrowcontainer">
                <div className="main-one">
                    <div className="headofone">
                        <div className="head1">Направления</div>
                        <div className="head2">
                            <div className="n14">Высшее<sup className="sup1">14</sup></div>
                            <div className="n9">Среднее<sup className="sup2">9</sup></div>
                            <div className="n36">ДПО<sup className="sup3">36</sup></div>
                        </div>
                    </div>
                    <div className="grid-layout">
                        <div className="griditem">
                            <img src={image1} />
                            <div className="gridContent">
                                <h1>Turizm</h1>
                                <p> • от 12 500 ₽ семестр
                                    <br />• от 2,5 лет
                                </p>
                                <p>консультация</p>
                                <img className="image1" src={firstImage} alt="1" />
                            </div>
                        </div>
                        <div className="griditem">
                            <img src={image2} />
                            <div className="gridContent">
                                <h1>Turizm</h1>
                                <p> • от 12 500 ₽ семестр
                                    <br />• от 2,5 лет
                                </p>
                                <p>консультация</p>
                                <img className="image1" src={secondImage} alt="1" />
                            </div>
                        </div>
                        <div className="griditem">
                            <img src={image3} />
                            <div className="gridContent">
                                <h1>Turizm</h1>
                                <p> • от 12 500 ₽ семестр
                                    <br />• от 2,5 лет
                                </p>
                                <p>консультация</p>
                                <img className="image1" src={thirdImage} alt="1" />
                            </div>
                        </div>
                        <div className="griditem">
                            <img src={image4} />
                            <div className="gridContent">
                                <h1>Turizm</h1>
                                <p> • от 12 500 ₽ семестр
                                    <br />• от 2,5 лет
                                </p>
                                <p>консультация</p>
                                <img className="image1" src={fourthImage} alt="1" />
                            </div>
                        </div>
                        <div className="griditem">
                            <img src={image5} />
                            <div className="gridContent">
                                <h1>Turizm</h1>
                                <p> • от 12 500 ₽ семестр
                                    <br />• от 2,5 лет
                                </p>
                                <p>консультация</p>
                                <img className="image1" src={fifthImage} alt="1" />
                            </div>
                        </div>
                        <div className="griditem">
                            <img src={image6} />
                            <div className="gridContent">
                                <h1>Turizm</h1>
                                <p> • от 12 500 ₽ семестр
                                    <br />• от 2,5 лет
                                </p>
                                <p>консультация</p>
                                <img className="image1" src={sixthImage} alt="1" />
                            </div>
                        </div>
                    </div>
                    <div className="bottomtext">
                        <p className="button24">Показать ещё 24 направления</p>
                        <svg xmlns="http://www.w3.org/2000/svg" width="7" height="10" viewBox="0 0 7 10" fill="none" className="But24svg">
                            <path d="M6.5 5L1.5 10L0.5 9L4.5 5L0.5 0.999999L1.5 -4.37114e-08L6.5 5Z" fill="black" />
                        </svg>
                    </div>
                </div>
            </div>
        </>
    );
}
