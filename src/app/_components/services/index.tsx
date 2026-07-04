"use client";

import { Swiper, SwiperSlide } from "swiper/react";

import {
    Pagination,
    Autoplay,
    EffectFade
} from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

import { services } from "./services";
import { ServiceSlide } from "./ServiceSlide";

export function Services(){

    return(

<section className="bg-stone-50 py-24">

<div className="container mx-auto px-4">

<div className="text-center mb-14">

<span className="text-emerald-600 uppercase tracking-[0.3em] font-semibold">

Nossos Serviços

</span>

<h2 className="text-4xl md:text-5xl font-bold text-slate-800 mt-3">

Tudo que seu pet precisa em um só lugar

</h2>

<p className="text-slate-600 max-w-2xl mx-auto mt-5 leading-8">

Oferecemos atendimento completo com estrutura moderna,
profissionais qualificados e muito carinho para cuidar do seu melhor amigo.

</p>

</div>

<Swiper

modules={[Pagination,Autoplay,EffectFade]}

slidesPerView={1}

loop={true}

effect="fade"

pagination={{
clickable:true
}}

autoplay={{
delay:5000,
disableOnInteraction:false
}}

speed={900}

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

</div>

</section>

    )

}