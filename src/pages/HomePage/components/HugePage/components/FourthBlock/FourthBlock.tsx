import "./FourthBlock.css";
import mobileimage from "../FourthBlock/Diplom-image mobile.png"
import desktopimage from "../FourthBlock/diplom-image.png"
export const FourthBlock = () => {
    return(
        <> 
         <div className="fourth-block narrowcontainer">
                                                    <div className="diplom">
                                                        <h1 className="diplomh1">Вы получите —<br className="mobile-only" />диплом<br className="desktop-only" />гособразца</h1>
                                                            <p className="diplomp1">Все наши учебные заведения-партнёры<br />имеют госаккредитацию, а дипломы заносятся <br />в федеральный реестр.</p>
                                                                <div className="threep">
                                                                    <p className="threep1">Высшее</p>
                                                                    <p className="threep2">Среднее</p>
                                                                    <p className="threep3">ДПО</p>
                                                                </div>
                                                            </div>
                                                                <div className="diplom-image desktop-only"><img src={desktopimage}/></div>
                                                                <div className="diplom-image-mob mobile-only"><img src={mobileimage} /></div>
                                                            </div>
        </>
    );
}