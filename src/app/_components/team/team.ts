import { StaticImageData } from "next/image"
import vetImg1 from "../../../../public/vetImg1.png"
import vetImg2 from "../../../../public/vetImg2.png"
import vetImg3 from "../../../../public/vetImg3.png"
import vetImg4 from "../../../../public/vetImg4.png"
import vetImg5 from "../../../../public/vetImg5.png"
import vetImg6 from "../../../../public/vetImg6.png"

export interface TeamMember{
    id:number;
    name:string;
    role:string; 
    crmv:string;
    image:StaticImageData;

}

export const team: TeamMember[] = [
    {
        id: 1,
        name: "Dra. Juliana Mendes",
        role: "Dermatologia Veterinária",
        crmv: "CRMV 11223",
        image: vetImg1
    },
    {
        id: 2,
        name: "Dr. Ricardo Souza",
        role: "Ortopedia e Traumatologia",
        crmv: "CRMV 99887",
        image: vetImg2
    },
    {
        id: 3,
        name: "Dra. Mariana Costa",
        role: "Medicina de Felinos",
        crmv: "CRMV 44556",
        image: vetImg3
    },
    {
        id: 4,
        name: "Dr. Felipe Dias",
        role: "Cardiologia Veterinária",
        crmv: "CRMV 55443",
        image: vetImg4
    },
    {
        id: 5,
        name: "Dra. Beatriz Santos",
        role: "Anestesiologia",
        crmv: "CRMV 77889",
        image:  vetImg5
    },
    {
        id: 6,
        name: "Dr. Bruno Alves",
        role: "Animais Silvestres e Exóticos",
        crmv: "CRMV 22334",
        image: vetImg6
    }
];