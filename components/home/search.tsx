import { useContext, useEffect, useState } from "react";
import Link from 'next/link';

import City from "../../interfaces/City";
import { Strings } from "../../interfaces/Strings";
import { LangContext } from "../../providers/LangProvider";
import { CitiesService } from "../../services/cities";
import _ from 'lodash';


export default function Search({inputSearchText, setInputSearchText}){

    //Language
    const strings:Strings = useContext(LangContext);
   
    const [cities, setCities] = useState(null);
    const [citiesSearched, setCitiesSearched] = useState([]);
    

    useEffect(() => {
    
        (async()=>{
          const citiesDb = new CitiesService();
          

          const result = await citiesDb.getCities();
    
          setCities(result);
          
    
        })();
        
      }, []);


    //Se ejecuta al escribir en el input
    const onChangeInput = async (e:any)=>{
      
      const text = e.target.value;
      setInputSearchText(text);
      
      if(text.length > 2){
        const arr:City[] = _.filter(cities, (city:City)=>{
  
            const patt = new RegExp(text, 'i');
            const test = patt.test(city.name);
            return test;
            
        });
  
        setCitiesSearched(arr);
      }
      else{
        setCitiesSearched([]);
      }

      

    }

    return(
        <div className="my-3 w-11/12 md:w-1/2 lg:w-1/3 mx-auto">
              
            <div className="simple-input flex items-center shadow-md">
              <input  type="text" 
                      placeholder={strings.searchInputPlaceholder} 
                      className="w-full outline-none rounded-xl p-3"
                      value={inputSearchText}
                      onChange={(e)=> onChangeInput(e) }/>
              
              {
                  inputSearchText.length > 0 &&
                  <span className="mx-2 flex items-center cursor-pointer" onClick={()=>{
                    setInputSearchText(''); setCitiesSearched([]);
                  }}>

                    <i className="far fa-times-circle fa-lg"></i>
                  
                  </span>
              }
              
              <button className="simple-style-btn rounded-r-xl py-3 px-3">
                  <i className="fas fa-search fa-lg"></i>
              </button>
            </div>
            
            {
              citiesSearched.length > 0 &&
            
              <div className="bg-white mt-2 shadow-md rounded-xl py-2 text-left">
                
                {
                  citiesSearched.map((val:City, i)=>{

                    return(
                      <Link href={`/city/${val.code}`}>
                        <div className="px-4 py-2 cursor-pointer hover:bg-trueGray-100">
                          {val.name}
                        </div>
                      </Link>
                    );

                  })
                }
              </div>
            }
        
        </div>
    )
}