import { useContext, useEffect, useState } from "react";
import { Strings } from "../../interfaces/Strings";
import { LangContext } from "../../providers/LangProvider";
import { CitiesService } from "../../services/cities";



export default function Search({inputSearchText, setInputSearchText}){

      //Language
    const strings:Strings = useContext(LangContext);


    
    const [cities, setCities] = useState(null);

    useEffect(() => {
    
        (async()=>{
          const citiesDb = new CitiesService();
          
          
          const result = await citiesDb.getCities();
    
          setCities(result);
          
    
        })();
        
      }, []);

    return(
        <div className="my-3 w-11/12 md:w-1/2 lg:w-1/3 mx-auto">
              
            <div className="simple-input flex items-center shadow-md">
            <input  type="text" 
                    placeholder={strings.searchInputPlaceholder} 
                    className="w-full outline-none rounded-xl p-3"
                    value={inputSearchText}
                    onChange={(e)=>setInputSearchText(e.target.value) }/>
            
            {
                inputSearchText.length > 0 &&
                <span className="mx-2 flex items-center cursor-pointer" onClick={()=>setInputSearchText('')}>
                <i className="far fa-times-circle fa-lg"></i>
                </span>
            }
            
            <button className="simple-style-btn rounded-r-xl py-3 px-3">
                <i className="fas fa-search fa-lg"></i>
            </button>
            </div>
        
        </div>
    )
}