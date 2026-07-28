"use client";

import Image, { StaticImageData } from "next/image";

interface ServiceSlideProps{
    title:string;
    description:string;
    image:StaticImageData;
    button:string;
    icon:any;
}

export function ServiceSlide({title,description,image,button,icon:Icon}
:ServiceSlideProps){
    return(

    <div className="relative h-[420px] md:h-[500px] lg:h-[650px] w-full rounded-none md:rounded-3xl overflow-hidden">
        
        <Image
            src={image}
            alt={title}
            fill
            priority
            className="object-cover"
        />

            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/20"/>

                <div className="absolute inset-0 flex items-center">

                    <div className="max-w-xl text-white px-12 md:px-16 ">

                        <div className="w-16 h-16 rounded-full bg-emerald-500 flex items-center justify-center mb-6">
                        <Icon className="w-8 h-8"/>
                        </div>
                     <h2 className="text-3xl md:text-5xl font-bold mb-6">{title}</h2>
                     <p className="text-lg leading-8 text-slate-200 mb-8">{description}</p>
                     <button className="bg-emerald-600 hover:bg-emerald-700 transition-all duration-300 px-8 py-4">{button}</button>
                </div>
            </div>
    </div>

    )

}