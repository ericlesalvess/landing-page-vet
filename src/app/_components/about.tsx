import {WhatsappLogoIcon} from '@phosphor-icons/react/dist/ssr'
import Image from "next/image";
import { Check, MapPin } from "lucide-react";
import about1Img  from '../../../public/sobre3.jpg'
import about2Img  from '../../../public/sobre4.jpg'

export function About (){
    return (
        <section className="bg-stone-50 py-24">
           <div className="container px-4 mx-auto ">
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>

                <div className="relative">
                 <div className="  relative w-full h-[400px] rounded-xl rounded-3x1 overflow-hidden shadow-2xl">
                    <Image
                        src={about1Img}
                        alt="Foto Cachorro e Gato"
                        fill
                        quality={100}
                        className="object-cover hover:scale-110 duration-300"
                         priority/>
                  </div>
 
                 <div className="absolute w-40 h-40 right-4 -bottom-8 border-4 overflow-hidden rounded-lg border-white shadow-xl">
                    <Image
                        src={about2Img}
                        alt="Foto Cachorro e Gato 2"
                        fill
                        quality={100}
                        priority/>
                  </div>

                </div>

                <div className="space-y-6 mt-8">
                    <h2 className="text-4xl font-bold text-slate-900">SOBRE</h2>
                    
                    
                    <p className=" text-slate-600 leading-8">udhaouhdaohdaouhdaouhdwoudwhaoudhwaoudhaouhdaoudhaoudahoudahdahodua
                        duahodahodahodawhodwuhaoudhaouhdaouahdouwhdouwhdaouhawodhawohdoawhdoaw
                        uodahodahoduahoduwahodahodahdoauhdaouhdaouhdaohdaohdaphdaohda
                        doauhdaohdaohdaouhdaouhdaouhdaouhadouhdaohdaodahodahoudahouadhoadhoad.
                    </p>

                    <ul className="space-y-4">
                        
                        <li className="flex items-center gap-2">
                            <Check className="text-emerald-600" />
                            Aberto desde 2016
                        </li>
                         <li className="flex items-center gap-2">
                            <Check className="text-emerald-600" />
                            Equipe com mais de 10 veterinários.
                        </li>
                        <li className="flex items-center gap-2">
                            <Check className="text-emerald-600" />
                            Qualidade é a nossa prioridade
                        </li>
                        <li className="flex items-center gap-2">
                            <Check className="text-emerald-600" />
                            ⭐ 5.0 de avaliação
                        </li>
                        

                    </ul>

                    <div className="flex gap-2">
                        <a href="#"
                    className="bg-emerald-600 hover:bg-emerald-700 text-white px-5 py-3 
                                rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl 
                                 flex items-center gap-2 w-fit">
                        <WhatsappLogoIcon className='w-5 h-5 text-white '/>
                        Contato via WhatsApp
                    </a>

                     <a href="#"
                    className="border border-emerald-600 text-emerald-600 hover:text-white transition duration-300 px-4 py-2 rounded-xl flex items-center gap-2">
                        <MapPin className='w-5 h-5 text-black'/>
                        Endereço da Loja
                    </a>
                    </div>

                </div>
                
                
            </div>
            </div>

        </section>
    );
}