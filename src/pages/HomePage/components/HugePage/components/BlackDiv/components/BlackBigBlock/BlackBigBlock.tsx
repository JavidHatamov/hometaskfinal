import "../BlackBigBlock/BlackBigBlock.css";
import { FirstFooter } from "./components/FirstFooter/FirstFooter";
import { Foot31Server } from "./components/Foot31Server/Foot31Server";
import { SecondFooter } from "./components/SecondFooter/SecondFooter";

export const BlackBigBlock = () => {
    return(
        <div className="blackbigblock container">
            <FirstFooter/>
            <SecondFooter />
            <Foot31Server/>                   
            </div>
    );
}