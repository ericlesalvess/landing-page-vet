'use client'
import { WhatsappLogoIcon } from '@phosphor-icons/react/dist/ssr'
import dogImg from '../../../public/dog-hero.png'
import img2 from '../../../public/cachorro-gato.png'
import Image from 'next/image'

import { motion } from "motion/react";
import { fadeUp, staggerContainer, ScaleIn } from '@/animations';

export function Hero() {
    return (
        <section className="bg-emerald-50 text-white relative overflow-hidden min-h-[550px] md:min-h-120">

            <motion.div 
                variants={staggerContainer} 
                initial="hidden" 
                animate="visible" 
                className="container mx-auto pt-16 pb-16 md:pb-0 px-4 h-full"
            >
                <article className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-end h-full">

                    <div className="space-y-6 flex flex-col justify-between h-full relative z-10">
                        <div>
                            <motion.h1 variants={fadeUp} className="text-slate-900 text-3xl md:text-4xl lg:text-5xl font-bold leading-10">
                                Seu pet merece cuidado, carinho e atenção especial
                            </motion.h1>
                            <motion.p variants={fadeUp} className="text-slate-600 mt-5 lg:text-lg">
                                Estrutura moderna, tecnologia de ponta e um corpo clínico especializado para garantir diagnósticos precisos e o melhor tratamento para cães e gatos.
                            </motion.p>
                        </div>
                        <div>
                            <motion.a variants={fadeUp} href="#"
                                className="bg-emerald-600 hover:bg-emerald-700 text-white px-5 py-3 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl flex items-center gap-2 w-fit"
                            >
                                <WhatsappLogoIcon className='w-5 h-5' />
                                Contato via Whatsapp
                            </motion.a>
                        </div>

                        <div className="mt-8">
                            <p className="text-sm mb-4 text-slate-900">
                                <motion.b variants={fadeUp} className=" text-slate-600 px-2 py-1 rounded-md">🏥 Atendimento Clínico e Cirúrgico</motion.b> 
                            </p>

                                <div className='flex mt-auto'>
                                    <motion.div
                                    variants={ScaleIn}
                                    initial="hidden"
                                    animate="visible"
                                     className='w-50 hidden lg:block'>
                                        <Image
                                            src={img2}
                                            alt='Foto cachorro-gato'
                                            quality={100}
                                            className='object-fill'
                                        />
                                    </motion.div>
                                </div>
                        </div>
                    </div>

                    <div className="absolute inset-0 z-0 lg:relative lg:inset-auto lg:w-full h-full lg:h-[500px] pointer-events-none lg:pointer-events-auto overflow-hidden">

                        <div className="absolute inset-0 bg-black opacity-40 lg:hidden z-10"></div>
                        
                        <motion.div
                            variants={ScaleIn}
                            initial="hidden"
                            animate="visible"
                            className="w-full h-full relative"
                        >
                            <Image
                                src={dogImg}
                                alt='Foto do dog'
                                className='object-cover lg:object-contain object-bottom lg:object-center opacity-60 lg:opacity-100 ' //transition all duration 500
                                fill
                                sizes="(max-width: 1024px) 100vw, 50vw"
                                quality={100}
                                priority
                            />
                        </motion.div>
                        
                    </div>

                </article>
            </motion.div>
        </section>
    )
}