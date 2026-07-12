"use client";

import { Swiper, SwiperSlide } from "swiper/react";

import {Pagination,Autoplay,EffectFade,Navigation} from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";


import { services } from "./services";
import { ServiceSlide } from "./ServiceSlide";

export function Services(){

    return(

    <section className="bg-stone-50 py-10">

      <div className="container mx-auto px-4">

        <div className="text-center mb-14">

            <span className="text-3xl text-emerald-600 uppercase tracking-[0.3em] font-semibold">
                Nossos Serviços
            </span>

            <h2 className="text-1xl md:text-5xl font-bold text-slate-800 mt-7">
            Tudo que seu pet precisa em um só lugar
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto mt-5 leading-8">
            Oferecemos atendimento completo com estrutura moderna,
            profissionais qualificados e muito carinho para cuidar do seu melhor amigo.
            </p>  
        </div>

        <div className="posi-seta relative">
        <Swiper

           style={{
             "--swiper-pagination-color": "#059669",
             "--swiper-pagination-bullet-inactive-color": "#94a3b8",
             "--swiper-pagination-bullet-inactive-opacity": "0.5", // Transparência das inativas
             "--swiper-pagination-bullet-size": "10px", // Tamanho das bolinhas (opcional)
             "--swiper-pagination-bullet-horizontal-gap": "6px" // Espaço entre elas (opcional)
             } as React.CSSProperties}


            modules={[Pagination,Autoplay,EffectFade,Navigation]}
            slidesPerView={1}
            loop={true}
            effect="fade"
            pagination={{ clickable:true}}
            autoplay={{
            delay:4000,
            disableOnInteraction:false
            }}
            speed={900}
            navigation={{
                prevEl: '.seta-esquerda',
                nextEl: '.seta-direita',
            }}
            >
        {

            services.map((service)=>(

            <SwiperSlide key={service.id}>

            <ServiceSlide
                title={service.title}
                description={service.description}
                image={service.image}
                button={service.button}
                icon={service.icon}
                />
            </SwiperSlide>
            ))
        }
        </Swiper>

        {/* botão de seta esquerda */}
       <button className="seta-esquerda absolute -left-7 top-1/2 z-10 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-white text-emerald-600 shadow-md transition-all hover:bg-emerald-600 hover:text-white disabled:opacity-50 md:h-14 md:w-14 md:-left-7 xl:-left-7">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
            </svg>
          </button>

        {/* botão de seta direita */}
          <button className="seta-direita absolute -right-7 top-1/2 z-10 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-white text-emerald-600 shadow-md transition-all hover:bg-emerald-600 hover:text-white disabled:opacity-50 md:h-14 md:w-14 md:-right-7
            xl:-right-7">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </button>



        </div>
     </div>
    </section>

    )
}