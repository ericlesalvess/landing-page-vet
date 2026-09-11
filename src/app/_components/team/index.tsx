"use client"
import{motion} from "motion/react"

import{fadeUp, staggerContainer} from "@/animations"
import{ Swiper, SwiperSlide} from "swiper/react";
import { Autoplay, Pagination, Navigation} from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import { team } from "./team";
import { TeamCard} from "./TeamCard";

export function Team(){
    return(
        <section id="equipe" className=" scroll-mt-15 py-12 bg-white">
            <div className="container mx-auto px-4">
                <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{once:true,amount:0.2}}
                className="text-center mb-14"
                >

                    <motion.h1 variants={fadeUp} className="  text-3xl text-emerald-600 uppercase tracking-[0.3em] font-semibold">
                        Nossa Equipe
                    </motion.h1>    

                    <motion.h2 variants={fadeUp} className="text-lg max-w-2xl mx-auto text-slate-900 leading-7 mt-3">
                        Profissionais apaixonados pelo bem-estar animal    
                    </motion.h2>

                    <motion.p
                        variants={fadeUp}
                        className="max-w-3xl mx-auto mt-3 text-slate-600 leading-7"
                         >
                        Nossa equipe reúne médicos veterinários altamente qualificados,
                            preparados para oferecer atendimento humanizado,
                            tecnologia e muito carinho ao seu melhor amigo.
                    </motion.p>

                    </motion.div>

                    <motion.div
                    variants={staggerContainer}
                     initial="hidden"
                     whileInView="visible"
                     viewport={{once:true,amount:0.2}}
                     className="text-center mb-14"
                    >
                        <Swiper
                            modules={[Pagination,Autoplay]}
                            slidesPerView={1}
                            spaceBetween={40}
                            loop={true}
                            centeredSlides={true}
                            speed={900}
                            
                            breakpoints={{
                                    768:{slidesPerView:2,
                                         spaceBetween:20,
                                    },
                                    1024:{slidesPerView: 2,
                                        spaceBetween:24,
                                    },
                                    1280:{slidesPerView: 3,
                                        spaceBetween:30,
                                    }, 
                            }}
                            autoplay={{
                                delay:5000,
                                disableOnInteraction:false,
                                pauseOnMouseEnter:true,
                            }}
                          
                        >
                            {team.map((TeamMember)=>(
                                <SwiperSlide key={TeamMember.id} className="py-4">
                                    <TeamCard {...TeamMember}></TeamCard>
                                </SwiperSlide>
                            ))}


                        </Swiper>
                    </motion.div>
                    
                

            </div>

        </section>
    )
}