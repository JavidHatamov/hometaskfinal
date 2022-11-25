import "../SixthBlock/SixthBlock.css";
import image from "../SixthBlock/bistroimage.png"
export const SixthBlock = () => {
    return(
        <div className="sixth-block narrowcontainer">
        <div className="fiffour">
            <h2>Поступайте —<br />быстро и без<br />нервов</h2>
                <p className="firstbistro">Вступительные по результатам ЕГЭ или <br />онлайн-тестам. Ведём набор круглый год.</p>
                <p className="secondbistro desktop-only">Схема поступления</p>
            </div>
                <img src={image} alt="bistro" />
                    <p className="secondbistro mobile-only">Схема поступления</p>
                </div>
    );
}