"use client"
import {motion} from "motion/react"

import{ Swiper, SwiperSlide} from "swiper/react";
import { Autoplay, Pagination, Navigation} from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";


import { testimonials } from "./testimonials";
import { TestimonialCard} from "./TestimonialCard";
import { fadeUp, staggerContainer} from "@/animations";


export function Testimonials(){
    return (
        <section className="bg-stone-50 py-24">
            
          <div className="container mx-auto px-4">

                  <motion.div
                      variants={staggerContainer}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{once: true, amount:0.2}}  //Anima só uma vez quando aparecer 20% do elemento
                      className="text-center mb-14" >

                    <motion.h1 variants={fadeUp} className=" mx-auto text-3xl text-emerald-600 uppercase tracking-[0.3em] font-semibold">
                       Quem confia em nós, recomenda
                    </motion.h1>  
                      <motion.p variants={fadeUp} className=" text-lg max-w-2xl mx-auto text-slate-600 leading-7 mt-3">
                      Veja o que os nossos clientes têm a dizer sobre o nosso atendimento, infraestrutura e dedicação.
                      </motion.p>
                </motion.div>     
                 
                <motion.div
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{once:true, amount:0.1}}//10%do carrosel na tela ele aparece
                    transition={{delay:0.3}} //delay para q o texto anime antes da foto
                    className="posi-seta relative">

                    <Swiper
                                modules={[Pagination,Autoplay,Navigation]}
                                //Mobile
                                slidesPerView={1}
                                spaceBetween={30}
                                loop={true}
                                //Responsividade
                                breakpoints={{
                                    768:{slidesPerView:2,
                                    },
                                    1024:{slidesPerView: 3
                                    }
                                }}
                                autoplay={{
                                  delay:5000,
                                  disableOnInteraction:false,
                                  pauseOnMouseEnter:true
                                }}
                                
                               
                    
                                >
                            { testimonials.map((testimonial)=>( // {...testimonial} pega todas as props dos dados o operador "..." significa todos 
                                <SwiperSlide key={testimonial.id} className="py-4">
                                    <TestimonialCard {...testimonial} ></TestimonialCard> 
                                </SwiperSlide>
                            ))}
                    </Swiper>

                      {/* botão de seta esquerda */}
                    
                </motion.div>
         </div>
       </section>
    )
}