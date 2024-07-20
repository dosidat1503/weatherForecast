import './button.scss'
import { Riple } from 'react-loading-indicators';

interface ButtonProps {
    name: string;
    onClick: () => void;
    backgroundColor: string;
    isLoading?: boolean;
}

export default function Button({ name, onClick, backgroundColor, isLoading = false} : ButtonProps){
    return (
        isLoading 
        ? <div className='loading'>
            <Riple color="#309fff" size="small" text="" textColor="" style={{ width: "10px" }}/>
        </div> 
        : <button 
            onClick={() => onClick()} 
            className={`btn btn-${backgroundColor} text-light w-100`} 
        >
            {name}
        </button>
    )
}