import Image from 'next/image';
import { NextRouter, useRouter } from 'next/router';
import { useContext, useEffect, useState } from 'react';


import Search from '../components/home/search';

import { LangContext } from '../providers/LangProvider';

import { Strings } from '../interfaces/Strings';




export default function Home() {


  //Configuraciones
  const router:NextRouter = useRouter();  
  console.log(router.pathname);
  
  //Language
  const strings:Strings = useContext(LangContext);

  const title:string = 'anuncios.today';
  

  // States
  const [inputSearchText, setInputSearchText] = useState('');


 




  return (
      
        <div className="flex flex-col  py-2 text-center">

            {/* Title */}
            {
              inputSearchText.length < 1 &&
              <div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
                  
                    {title} 
                  
                </h1>

                <h2 className="text-sm md:text-base base-text-color">
                  Empezá buscando anuncios en alguna ciudad
                </h2>

            </div>
            }



            {/* Search */}

            <Search inputSearchText={inputSearchText} setInputSearchText={setInputSearchText} />
            

        </div>
      
  )
}
