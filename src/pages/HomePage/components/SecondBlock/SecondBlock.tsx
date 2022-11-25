import { FirstBlock } from "../FirstBlock/FirstBlock";
import "../SecondBlock/SecondBlock.css";
import first from '../SecondBlock/first.png'
import second from '../SecondBlock/second.png'
import third from '../SecondBlock/third.png'
import fourth from '../SecondBlock/fourth.png'
import fifth from '../SecondBlock/fifth.png'
import sixth from '../SecondBlock/sixth.png'
export const SecondBlock = () => {
    return(
        <>
        <div className="second-block container">
                <img src={first} alt="image1" className="imagesb" />
                    <img src={second} alt="image2" className="imagesb" />
                        <img src={third} alt="image3" className="imagesb desktop-only" />
                            <img src={fourth} alt="image4" className="imagesb desktop-only" />
                                <img src={fifth} alt="image5" className="imagesb desktop-only" />
                                    <img src={fourth} alt="image4" className="imagesb desktop-only" />
                                        <img src={fifth} alt="image5" className="imagesb desktop-only" />
                                            <img src={sixth} alt="image6" className="imagesb desktop-only" />
                                            </div>
        </>
    );
}