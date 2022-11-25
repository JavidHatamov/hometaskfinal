import './FirstBlock.css';
import castle from '../FirstBlock/castle.png';
import background from '../FirstBlock/background-nov-qorod.png';
export const FirstBlock = () => {
    return(
        <>
        <div className="first-block">
            <img src={castle} className="mobile-only"/>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none" className="mobile-only svg1">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M17.5 5C18.8807 5 20 3.88071 20 2.5C20 1.11929 18.8807 0 17.5 0C16.1193 0 15 1.11929 15 2.5C15 2.60458 15.0064 2.70765 15.0189 2.80886L4.23551 8.20055C3.78587 7.76679 3.17409 7.5 2.5 7.5C1.11929 7.5 0 8.61929 0 10C0 11.3807 1.11929 12.5 2.5 12.5C3.15434 12.5 3.74996 12.2486 4.19556 11.8372L15.0003 17.5397C15.0215 18.9021 16.1325 20 17.5 20C18.8807 20 20 18.8807 20 17.5C20 16.1193 18.8807 15 17.5 15C16.7083 15 16.0025 15.368 15.5445 15.9423L4.97379 10.3633C4.99106 10.2447 5 10.1234 5 10C5 9.89542 4.99358 9.79235 4.98111 9.69114L15.7645 4.29945C16.2141 4.73321 16.8259 5 17.5 5Z" fill="gray"/>
                </svg>
            <div className="nov-qorod">
                <img src={ background}/><div className="threetext">
                <div className="h1">Образование<br/>онлайн в Нижнем<br/>Новгороде</div>
                <div className="mi">Мы — единая приёмная комиссия<br className="mobile-only"/> вузов<br className="desktop-only"/>и колледжей по дистанционным программам<br className="desktop-only"/>обучения</div>
                <div className="rubl">• от 12 500 ₽ семестр   •   от 2,5 лет   •   100% онлайн</div>
                </div>
                <div className="iconandimage desktop-only">
                    <div className="icon"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M17.5 5C18.8807 5 20 3.88071 20 2.5C20 1.11929 18.8807 0 17.5 0C16.1193 0 15 1.11929 15 2.5C15 2.60458 15.0064 2.70765 15.0189 2.80886L4.23551 8.20055C3.78587 7.76679 3.17409 7.5 2.5 7.5C1.11929 7.5 0 8.61929 0 10C0 11.3807 1.11929 12.5 2.5 12.5C3.15434 12.5 3.74996 12.2486 4.19556 11.8372L15.0003 17.5397C15.0215 18.9021 16.1325 20 17.5 20C18.8807 20 20 18.8807 20 17.5C20 16.1193 18.8807 15 17.5 15C16.7083 15 16.0025 15.368 15.5445 15.9423L4.97379 10.3633C4.99106 10.2447 5 10.1234 5 10C5 9.89542 4.99358 9.79235 4.98111 9.69114L15.7645 4.29945C16.2141 4.73321 16.8259 5 17.5 5Z" fill="gray"/>
                        </svg></div>
                    <div className="image"><img src={castle} alt="Castle"/></div>
                </div>
            </div>
            <div className="scroll desktop-only">
                <div className="scrolling">
                    <div className="threeline">
                        <div className="line"></div>
                        <div className="line"></div>
                        <div className="line"></div>
                    </div>
                    <div className="Text-scroll">
                        <div className="text">Подобрать обучение</div>
                        <div className="division">1/3</div>
                    </div>
                </div>
                <div className="question">
                    <div className="question1">Какое у Вас образование?</div>
                    <div className="firstline partner">
                        <div className="border">9 классов</div>
                        <div className="border">11 классов</div>
                    </div>
                    <div className="secondline partner">
                        <div className="border">Училище</div>
                        <div className="border">Колледж</div>
                        <div className="border">Техникум</div>
                    </div>
                    <div className="thirdline partner">
                        <div className="border">Неоконченное высшее</div>
                        <div className="border">Высшее</div>
                    </div>
                </div>
                <div className="buttonfirst">
                    <input type="button"name="submit" value="Отправить заявку" className="input"/>
                </div>
            </div>
        </div>
        </>
    );
}