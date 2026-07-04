import {WhatsappLogoIcon} from '@phosphor-icons/react/dist/ssr'
import dogImg from '../../../public/dog-hero.png'
import img2 from '../../../public/cachorro-gato.png'
import Image from 'next/image'

export function Hero(){
    return(
    <section className="bg-emerald-50  text-white relative overflow-hidden min-h-120">  

        <div>
            <Image 
                src={dogImg}
                alt='Foto do Cachorro'
                fill
                sizes='100vw'
                priority
                className=' scale-95 object-cover opacity-60 lg:hidden'
            />
            <div className='absolute inset-0 bg-black opacity-40 md:hidden'></div>
        </div>

     <div className="container mx-auto pt-16 pb-16 md:pb-0 px-4 relative  ">
       <article className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-end ">
         <div className="space-y-6 flex flex-col justify-between h-full">
            <div>
                <h1 className=" text-slate-900 text-3xl md:text-4xl lg:text-5xl font-bold leading-10">Seu pet merece cuidado, carinho e atenção especial</h1>
                <p className=" text-slate-600 mt-5 lg:text-lg">Oferecemos os melhores serviçoes para garantir o bem-estar 
               e a felicidade do seu amigo de quatro patas</p> 
            </div> 
            <div>
                <a href="#"
                className="bg-emerald-600 hover:bg-emerald-700 text-white px-5 py-3 rounded-xl font-semibold 
                transition-all duration-300 shadow-lg hover:shadow-xl flex items-center gap-2 w-fit"
                >
                    <WhatsappLogoIcon className='w-5 h-5'/>
                    Contato via Whatsapp
                </a>
             </div> 

             <div className="mt-8">
                <p className="text-sm mb-4 text-slate-900">
                <b className="bg-black text-white px-2 py-1 rounded-md">5%</b> de desconto na primeira compra
                </p>

                <div className='flex mt-auto'>
                    <div className='w-50 hidden lg:block'>
                        <Image
                            src={img2} 
                            alt='Foto cachorro-gato'
                            quality={100}
                            className='object-fill'
                        
                        />
                    </div>
                </div>
            </div>  
        </div> 
        <div className="hidden md:block h-full relative">
            <Image
                src={dogImg}
                alt='Foto do dog'
                className='object-contain object-bottom'
                fill
                sizes ="(max-width: 768px) 0vw, 50vw"
                quality={100}
                priority
            />
        </div>
        </article> 
      </div>
   

    </section>
    ) 
}