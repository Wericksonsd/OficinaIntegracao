'use client'

import { Perfil } from "@/bd/typesPerfil"
import { useState, useEffect } from "react"
import Image from 'next/image'

interface CardPerfilProps {
    perfil: Perfil;
}

export default function CardPerfil({ perfil }: CardPerfilProps) {

    const [troggleActv, setTroggleActv] = useState(false)
    const [windowWidth, setWindowWidth] = useState(0);
    const [id, setId] = useState(0);

    useEffect(() => {
        setWindowWidth(window.innerWidth);

        const handleResize = () => setWindowWidth(window.innerWidth);
        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const handleModal = () => {
        setId(perfil.id)
        setTroggleActv(!troggleActv)
    }

    const isMobile = windowWidth < 768 ? 90 : 130;

    return(
        <div
        onClick={() => handleModal()}
        className="w-[46%] h-52 md:h-72 px-4 py-2 flex flex-col items-center border-(--mainCl) border-2 rounded-lg bg-(--mainCl) text-zinc-300 md:w-48 md:p-4">            
            <div className="w-22 h-22 rounded-full overflow-hidden border-2 border-zinc-300 md:w-32 md:h-32">
                <Image
                    src={perfil.foto}
                    width={isMobile}
                    height={isMobile}
                    alt="Profile picture"
                />
            </div>
            <p className="font-bold text-[1.2rem] text-left">{perfil.nome}</p>
            <div className="flex flex-col items-center justify-start text-center">
                <p>{perfil.setor}</p>
                <p className="font-light text-[0.8rem]">{perfil.curso}</p>
            </div>            
        </div>
    )
}