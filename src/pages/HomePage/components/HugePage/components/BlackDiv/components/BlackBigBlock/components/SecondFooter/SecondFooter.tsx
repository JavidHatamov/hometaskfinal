import "../SecondFooter/SecondFooter.css";
import avatar from "../SecondFooter/Avatar.png"
export const SecondFooter = () => {
    return(
        <div id="secondfooter">
        <div className="flex">
            <h1>Ещё<br />вопросы?</h1>
            <p>Задайте их и наш менеджер<br />свяжется с Вами в течение<br />15 минут</p>
                <div className="flexavatar">
                    <img src={avatar} alt="image" className="avatar"/>
                        <p>Вам ответит Анастасия — Ваш<br />персональный менеджер</p>
                    </div>
            </div>
                <div className="column firstcolumn">
                    <div>
                        <p className="special">Как Вас зовут?</p>
                        <input type="text" placeholder="Иванов Иван" name="Name" />
                    </div>
                    <div className="special">
                        <p className="special">Ваш телефон</p>
                        <input type="text" placeholder="+7 (000) 000 00 00" name="Number" />
                    </div>
                    <p className="diffrentcolumn desktop-only" >Нажимая кнопку “Задать вопрос”, Вы<br />соглашаетесь с условиями обработки<br />персональных данных</p>
                    </div>
                        <div className="column secondcolumn">
                            <h2>Напишите свои вопросы:</h2>
                            <textarea placeholder="Вы можете задать нескольковопросов"></textarea>
                            <p className="diffrentcolumn mobile-only">Нажимая кнопку “Задать вопрос”, Вы<br />соглашаетесь с условиями обработки<br />персональных данных</p>
                                <input type="button" value="Задать вопрос" />
                                </div>
                            </div>
    );
}