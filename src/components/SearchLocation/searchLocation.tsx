import { useState } from "react";
import Button from "../Button/button"
import './searchLocation.scss'

interface SearchLocationProps {
    handleSearchLocation: (cityName: string) => void;
    message?: string;
}

export default function SearchLocation({handleSearchLocation, message}: SearchLocationProps){

    const [cityName, setCityName] = useState<string>("");

    return (
        <div className="search-location"> 
            <label htmlFor="city" className="form-label">
                <h6 className="search-location-label fw-bold mb-0">Enter a City Name</h6>
            </label>
            <input 
                type="text" 
                id="city"
                className="form-control w-100"
                placeholder="E.g., New York, London, Tokyo"
                name="city"
                onChange={(e) => setCityName(e.target.value)}
            />  
            {message ? <p className="text-danger mt-1">{message}</p> : <br></br>}
            <Button 
                name="Search" 
                onClick={() => handleSearchLocation(cityName)} 
                backgroundColor="primary"
            />
            <div className="divider">or</div>
            <Button 
                name="Use Current Location" 
                onClick={() => {}} 
                backgroundColor="secondary"
            />
            <div className="mb-4"></div>
        </div>
    )
}