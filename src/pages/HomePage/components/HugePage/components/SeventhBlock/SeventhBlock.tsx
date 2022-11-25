import "../SeventhBlock/SeventhBlock.css";
import image from "../SeventhBlock/Telephone.png"
export const SeventhBlock = () => {
    return(
        <div className="seventh-block narrowcontainer">
        <img src={image} alt="Telephone" />
            <div className="fiffour">
                <h2>Учитесь —<br className="desktop-only" />где<br className="mobile-only" /> и когда<br className="desktop-only" />хотите</h2>
                    <p className="firstbistro diffrent">Учёба полностью онлайн: от<br className="mobile-only" /> вступительных<br className="desktop-only" />тестов до самой защиты.<br className="mobile-only" /> Для занятий достаточно смартфона,<br className="mobile-only" /> планшета или ноутбука.</p>
                    </div>
                    </div>
    );
}