import Header from './Header';
import Discussion from "./Discussion";
import MessageBox from "./MessageBox";

export default function Content(){
    return(
        <div className='components'>
            <Header />
            <div className='components'>
                <Discussion />
                <MessageBox />
            </div>
        </div>

    );
}