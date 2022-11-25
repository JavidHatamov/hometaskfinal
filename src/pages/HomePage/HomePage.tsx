
import './HomePage.css';
import { FirstBlock } from './components/FirstBlock/FirstBlock';
import { SecondBlock } from './components/SecondBlock/SecondBlock';
import { HugePage } from './components/HugePage/HugePage';

export const HomePage = () =>{
    return(
        <>
            <FirstBlock />
            <SecondBlock />
            <HugePage />                         
        </>
        );
}
