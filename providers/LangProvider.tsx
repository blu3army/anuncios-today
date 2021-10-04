
import { createContext, useEffect, useState } from 'react';
import { Strings } from '../interfaces/Strings';
import { stringsEs, stringsPr } from '../utils/strings';

export const LangContext =  createContext(null);

export default function LangProvider({children}){


    const strings:Strings = stringsEs;
    const [lang, setLang] = useState(strings);

    
    useEffect(() => {
        if(navigator.language === 'es-ES'){
            setLang(stringsEs);
        }    
    }, []);

    return(
        <LangContext.Provider value={lang}>
        
            {children}   

        </LangContext.Provider>
    ) 
        
        
        
    
}