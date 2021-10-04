import { useContext, useEffect, useState } from "react";
import { useRouter } from "next/router";

import { CitiesService } from '../../services/cities';
import City from '../../interfaces/City';
import { LangContext } from "../../providers/LangProvider";
import { Strings } from "../../interfaces/Strings";

export default function CityPage(){

    // Router
    const router = useRouter();
    const { id } = router.query;
   
    //Language
    const strings:Strings = useContext(LangContext);

    //States
    const [city, setCity] : [city:City, setCity:any] = useState(null)
    
    useEffect(() => {
        
        if(!router.isReady) return;

        (async()=>{
            
            
            const cities = new CitiesService();
            const _city = await cities.getCity(id) as City;
                       
            setCity(_city);

        })();
        
    }, [router.isReady]);




    return(
        <div className="">
            {
                city &&
                <div className="flex w-full lg:w-4/6 mx-auto">
                    
                    <div className=" bg-blue-500 w-2/6 p-1 text-center">
                        <img src="/images/city_4.jpeg" className="inline w-full object-cover rounded-full" />
                    </div>

                    <div className="flex-grow bg-blue-200 p-2">
                        <h1 className="text-2xl md:text-3xl lg:text-5xl">
                            {city.name}, {city.province}
                        </h1>
                        
                        <p className="text-sm md:text-base px-1 py-2">
                            {strings.postalCode}: {city.code}
                        </p>
                        
                    </div>
                </div>
            }
        </div>
    )
}