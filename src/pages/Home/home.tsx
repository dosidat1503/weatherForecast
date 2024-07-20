import { useEffect, useState } from "react";
import { Riple } from "react-loading-indicators";

import useGlobalContext from "../../context/globalVariables";
import SearchLocationHelper from "../../helpers/searchLocation";

import CardToday from "../../components/CardToday/cardToday";
import CardForecast from "../../components/CardForecast/cardForecast";
import SearchLocation from "../../components/SearchLocation/searchLocation";
import SubcribeMail from "../../components/SubcribeMail/subcribeMail";
 
import './home.scss'
 
export default function Home() {  
    const { weatherInfoList, setWeatherInfoList, isLoading, setIsLoading } = useGlobalContext()!;
    const { messageLocationError, handleSearchLocation } = SearchLocationHelper();
    const [fadeClass, setFadeClass] = useState('');
 
    useEffect(() => { 
        const savedWeatherInfoList = localStorage.getItem('weatherInfoList');
        const currentDate = new Date().toISOString().split('T')[0];

        if (savedWeatherInfoList) 
        {
            const weatherInfoListLocalStorage = JSON.parse(savedWeatherInfoList); 

            if (weatherInfoListLocalStorage.length > 0 && weatherInfoListLocalStorage[0].date === currentDate) {
                setWeatherInfoList(weatherInfoListLocalStorage); 
                setIsLoading(false)
            } 
        }   
        else {
            handleSearchLocation("Hanoi")
        }
    }, [])

    useEffect(() => {
        if (!isLoading) {
          // Đợi một chút để đảm bảo rằng lớp CSS đã được áp dụng
          const timer = setTimeout(() => setFadeClass('fade-in'), 10); // Thời gian nhỏ để lớp CSS được áp dụng
          return () => clearTimeout(timer);
        } else {
          setFadeClass('');
        }
    }, [isLoading]);
 

    const renderWeatherInfoList = () => {
        return weatherInfoList.slice(1).map((weatherInfo, index) => (
            <CardForecast weatherInfo={weatherInfo}  key={index}/>
        ))
    }

    return (
        <div className="container">   
            <div className="row">
                <div className="col-xl-4 col-md-6 col-sm-12">
                    <SearchLocation 
                        handleSearchLocation={handleSearchLocation} 
                        message={messageLocationError}
                    />
                    <SubcribeMail/>
                </div>
                { 
                    <div className="col-xl-8 col-md-6 col-sm-12">
                        {
                            isLoading 
                            ? <Riple color="#309fff" size="medium" text="" textColor="" />
                            : (
                                <div className={`fade-transition ${fadeClass}`}>
                                    { weatherInfoList.length > 0 && <CardToday weatherInfo={weatherInfoList[0]} /> } 

                                    <h3 className="d-flex justify-content-flex-start fw-bold mt-4 mb-4">4-Day Forecast</h3>

                                    <div className="row">
                                        { renderWeatherInfoList() }
                                    </div>
                                </div> 
                            )
                        } 
                    </div>
                } 
            </div> 
        </div>
    )
}