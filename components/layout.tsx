import Head from 'next/head';

import LangProvider from '../providers/LangProvider';

import Footer from './footer/footer';

export default function Layout({children}){
  
    return(
        <div>
            <LangProvider>
                <Head>
                    <title>anuncios.today</title>
                    <link rel="icon" href="/favicon.ico" />
                    <link href="/fontawesome/css/all.min.css" rel="stylesheet" />
                </Head>

                <div className="min-h-screen bg-gray-100 base-text-color font-lexend">                

                        <div className="fixed bottom-0 md:top-0 h-16 shadow-md w-full bg-white">
                            Navbar
                        </div>
                        
                        <main className="md:pt-16 container mx-auto ">
                            {children}
                        </main>

                        {/* <Footer />   */}
                
                </div>
            </LangProvider>
        </div>
    )
}