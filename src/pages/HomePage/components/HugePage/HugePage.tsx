import "./HugePage.css";
import { FourthBlock } from "./components/FourthBlock/FourthBlock";
import { ThirdBlock } from "./components/ThirdBlock/ThirdBlock";
import { FifthBlock } from "./components/FifthBlock/FifthBlock";
import { SixthBlock } from "./components/SixthBlock/SixthBlock";
import { SeventhBlock } from "./components/SeventhBlock/SeventhBlock";
import { BlackDiv } from "./components/BlackDiv/BlackDiv";


export const HugePage = () =>{
    return(
        <>
         <div className="Huge">
                                      <ThirdBlock />          
                                               
                                        <FourthBlock />

                                            <FifthBlock />               

                                                <SixthBlock />
                                        

                                                    <SeventhBlock />

                                                           
                                                                      
                                                       <BlackDiv/>     

        </div>
                                                                                                    
                                                                                            
        </>
    );
}