import { useState } from "react";

import request from "../../utils/request";
import SearchLocationHelper from "../../helpers/searchLocation";

import Button from "../Button/button"

import './subcribeMail.scss'

interface MessageProps {
    content: string;
    status: boolean;
}

interface SubcribeInfoProps {
    email: string; 
    cityName: string
}
 
export default function SubcribeMail(){

    const { handleSearchLocation, messageLocationError, setMessageLocationError } = SearchLocationHelper();
    const [isLoadingSubcribe, setIsLoadingSubcribe] = useState<boolean>(false);

    const [subcribeInfo, setSubcribeInfo] = useState<SubcribeInfoProps>({
        email: "",
        cityName: ""
    });
    const [message, setMessage] = useState<MessageProps>({
        content: "",
        status: false
    })

    const handleSubcribeMail = async () => {
        setIsLoadingSubcribe(true)
        console.log(subcribeInfo)
        try {
            if(subcribeInfo.email === "" || subcribeInfo.cityName === ""){
                setMessage({
                    content: "Enter full information to subcribe",
                    status: false
                })
                setIsLoadingSubcribe(false)
                console.log("subcribeInfo")
            }  
            await handleSearchLocation(subcribeInfo.cityName)
            if(messageLocationError !== ""){
                setMessage({
                    content: messageLocationError,
                    status: false
                })
                setIsLoadingSubcribe(false)
            }
            else { 
                request.post('/subcribeMailReceiveInfoDaily', subcribeInfo)
                .then((response) => { 
                    setMessage({
                        content: response.data.message,
                        status: true
                    }) 
                    console.log(messageLocationError)
                    setIsLoadingSubcribe(false)
                })
                .catch((error) => {
                    setMessage({
                        content: error.response.data.message,
                        status: false
                    }) 
                    console.log(messageLocationError)
                    setIsLoadingSubcribe(false) 
                })
            }
            
            setMessageLocationError("")
        } 
        catch (error) {
            console.error("Error in handleSearchLocation:", error);
            setMessage({
                content: `${error}`,
                status: false
            });
            setIsLoadingSubcribe(false)
            setMessageLocationError("")
        }
    }

    return (
        <div className="subcribe-mail mt-5"> 
            <label htmlFor="mail" className="form-label">
                <h6 className="subcribe-mail-label fw-bold mb-0 d-flex justify-content-flex-start">Enter mail to subcribe receive daily weather forecast info</h6>
            </label>
            <input 
                type="email" 
                id="mail"
                className="form-control w-100"
                placeholder="Email"
                name="mail"
                onChange={(e) => setSubcribeInfo({...subcribeInfo, email: e.target.value})}
            />  
            
            <input 
                type="text" 
                id="city"
                className="form-control w-100 mt-2"
                placeholder="E.g., New York, London, Tokyo"
                name="city"
                onChange={(e) => setSubcribeInfo({...subcribeInfo, cityName: e.target.value})}
            />

            {
                message 
                ? <p className= {`${message.status ? 'text-success' : 'text-danger'}  mt-1`}>{message.content}</p> 
                : <br></br>
            }
            
            <Button 
                name="Subcribe" 
                onClick={() => handleSubcribeMail()} 
                backgroundColor="primary" 
                isLoading={isLoadingSubcribe}
            />
            
            <div className="mb-4"></div>
        </div>
    )
}