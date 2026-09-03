"use client"

import Image, { StaticImageData } from "next/image"
import{motion} from "motion/react"
import { cardHover, fadeUp, staggerContainer } from "@/animations"

interface TeamCardProps {
  name: string
  role: string
  crmv: string
  image: StaticImageData
}

export function TeamCard({
    name,role,crmv,image,
}: TeamCardProps) {
  return (
    <motion.div
    variants={cardHover}
    initial="rest"
    whileHover="hover"
    className="bg-white
     rounded-3xl
     overflow-hidden
     shadow-lg
     border border-slate-200
     h-full
     "
    >
        <div className="relative h-[360px] sm:h-[400px] md:h-[440px] lg:h-[600px] overflow-hidden"> 
           <motion.div
           className="absolute inset-0"
           whileHover={{scale:1.08}}
           transition={{duration:0.4}}
           >

            <Image
                src={image}
                alt={name}
                fill
                className="
                object-cover
                object-top 
        "
                />

           </motion.div>
            

               <div className="
                   absolute
                    inset-0
                    bg-gradient-to-t
                    from-black/80
                    via-black/20
                    to-transparent">
             </div>  
             <motion.div
             variants={staggerContainer}
             initial="hidden"
              whileInView="visible"
              viewport={{once:true,amount:0.2}}
              className="absolute bottom-10 left-10 text-white"
             >
                <motion.h3 className="text-2xl font-bold">
                    {name}
                </motion.h3>
                <motion.p  variants={fadeUp} className="text-slate-200"> {role}</motion.p>
                <motion.p variants={fadeUp} className="text-slate-300 "> {crmv}</motion.p>   
                
            
              
              
              </motion.div>


              
        </div>


    </motion.div>
  )
}