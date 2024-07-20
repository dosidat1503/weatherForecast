import { createContext, useContext, useState } from "react";


export interface WeatherProps {
    city: string;
    date: string;
    temperature: number;
    wind: number;
    humidity: number;
    conditionCurrent: string;
    conditionCurrentImage: string;
}

interface contextType { 
    weatherInfoList: WeatherProps[],
    setWeatherInfoList: (weatherInfoList: WeatherProps[]) => void,
    forecastDayQuantity: number,
    isLoading: boolean,
    setIsLoading: (isLoading: boolean) => void
}

const GlobalContext = createContext<contextType | null>({ 
    weatherInfoList: [],
    setWeatherInfoList: () => {},
    forecastDayQuantity: 0,
    isLoading: false,
    setIsLoading: () => {}
});

export function GlobalProvider({children}: {children: React.ReactNode}) { 
    const [weatherInfoList, setWeatherInfoList] = useState<WeatherProps[]>([])  
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const forecastDayQuantity = 5

    return (
        <GlobalContext.Provider value={{
            weatherInfoList, setWeatherInfoList,
            forecastDayQuantity,
            isLoading, setIsLoading
        }}>
            {children}
        </GlobalContext.Provider>
    );
};
 
export default function useGlobalContext() {
    return useContext(GlobalContext);
}  