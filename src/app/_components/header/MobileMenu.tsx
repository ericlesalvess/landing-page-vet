import Link from "next/link";
import {motion, AnimatePresence} from "motion/react";
import { WhatsappLogoIcon, X } from "@phosphor-icons/react";
import { menuItems } from "./menu";

interface MobileMenuProps {
    open:boolean;
    onClose:() => void;
}

export function MobileMenu({open,onClose}: MobileMenuProps){
    return(

            <AnimatePresence>
                {open && (
                    <>
                      {/* Overlay */}
                       <motion.div initial={{opacity:0}} animate={{opacity:1}}
                       exit={{opacity:0}} onClick={onClose}
                       className="fixed inset-0 bg-black/50 z-40"
                       />
                         {/* Drawer */}
                       <motion.div initial={{x: "100%"}} animate={{x:0}} exit={{x:"100%"}} transition={{duration:0.35}} 
                                    className="fixed top-0 right-0 h-screen w-80 bg-white/95 backdrop-blur-xl z-50 shadow-2xl p-8"
                            >
                            
                                {/* Fechar */}
                                <button onClick={onClose} className="mb-12">
                                        <X size={32} />
                                </button>
                                {/* Links */}

                                <nav className="flex flex-col gap-7">
                                    {menuItems.map((item)=>(
                                        <Link key={item.href} 
                                        href={item.href} 
                                        onClick={onClose}
                                        className="text-lg font-medium text-slate-700 hover:text-emerald-600 transition-colors self-end"
                                        >
                                            {item.label}
                                        </Link>
                                    ))}
                                </nav> 
                                {/* Botão */}
                                <Link href="https://wa.me/55SEUNUMERO" target="_blank"
                                className="mt-12 flex items-center gap-3 rounded-xl bg-emerald-600 text-white py-4 font-semibold justify-center px-4"
                                >
                                <WhatsappLogoIcon size={22} />
                                Agendar
                                </Link> 
                         </motion.div>

                    </>
                )}
            </AnimatePresence>
    )
}