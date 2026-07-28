'use client'

import Image, { StaticImageData } from "next/image";
import {motion} from "motion/react"



interface InfrastructureCardProps {
    title: string;
    image: StaticImageData;
    className?:string;
}

export function InfrastructureCard({
    title,
    image,
    className,}: InfrastructureCardProps) {
    return (
        <div
className={`relative overflow-hidden rounded-3xl group h-full aspect-[4/5] ${className}`}
>           

        <motion.div
            className="abosulut inset-0"
            whileHover={{ scale: 1.08 }}
            transition={{ duration: 0.5 }}        
        
        >
             <Image     
                src={image}
                alt={title}
                fill
                className="object-cover
                          transition-transform
                          duration-500
                          group-hover:scale-105
                          select-none
                          overflow-hidden
                          "    
                                 
            />
        </motion.div>
           
            <div className="absolute
               inset-0
              bg-gradient-to-t
              from-black/70
              via-black/20
                to-transparent
                transition-all
                duration-300
               group-hover:from-black/80">

            </div>
            <div
                className="
                absolute
                bottom-8
                left-8
                "
                >

                <h3
                className="
                text-white
                text-2xl
                font-bold
                transition-all
                duration-300
                group-hover:-translate-y-1
                "
                >

                {title}

                </h3>

        </div>
            
    </div>


    


    )
}
