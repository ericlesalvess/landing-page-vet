import consultaImg from "../../../../public/consulta1.jpg";
import vacinaImg from "../../../../public/vacina.jpg";
import taxiImg from "../../../../public/taxipet.jpg";
import examesImg from "../../../../public/exames.jpg";
import banhoImg from "../../../../public/banho1.jpg";

import {Stethoscope,Syringe,Scissors,Activity,HeartPulse,Ambulance
} from "lucide-react";

export const services = [

    {
        id:1,
        title:"Consultas Veterinárias",
        description:"Atendimento clínico completo para cães e gatos, com profissionais especializados e equipamentos modernos.",
        image:consultaImg,
        button:"Agendar Consulta",
        icon:Stethoscope
    },

    {
        id:2,
        title:"Vacinação",
        description:"Proteja seu pet contra as principais doenças com um calendário vacinal completo.",
        image:vacinaImg,
        button:"Agendar Vacina",
        icon:Syringe
    },

    {
        id:3,
        title:"Cirurgias",
        description:"Centro cirúrgico equipado para procedimentos de baixa e alta complexidade.",
        image:taxiImg,
        button:"Saiba Mais",
        icon:HeartPulse
    },

    {
        id:4,
        title:"Exames Laboratoriais",
        description:"Diagnósticos rápidos e precisos para garantir um tratamento eficaz.",
        image:examesImg,
        button:"Ver Exames",
        icon:Activity
    },

    {
        id:5,
        title:"Banho e Tosa",
        description:"Muito carinho, higiene e estética para deixar seu melhor amigo sempre feliz.",
        image:banhoImg,
        button:"Agendar Banho",
        icon:Scissors
    },
]