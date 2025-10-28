'use client'

import { Perfil } from "@/bd/typesPerfil"
import { useState } from "react"
import Image from 'next/image'

interface CardPerfilProps {
    perfil: Perfil;
}

export default function CardPerfil({ perfil }: CardPerfilProps) {

    const [troggleActv, setTroggleActv] = useState(false)
    

    const handleTroggleActv = () => {
        setTroggleActv(!troggleActv)
    }

    return(
        <div
        onClick={() => handleTroggleActv()}
        className="w-[46%] mt-4">
            <div className={`w-full overflow-hidden flex flex-col border-(--mainCl) border-2 rounded-lg bg-(--mainCl) text-zinc-300`}>
                <div className="w-full px-4 py-1  flex flex-col">
                    <div className="w-22 h-22 rounded-full overflow-hidden border-2 border-zinc-300">
                        <Image
                            src={perfil.foto}
                            width={90}
                            height={90}
                            alt="Profile picture"
                        />
                    </div>
                    <p className="font-bold text-[1.2rem] flex-1 text-left">{perfil.nome}</p>
                    <div className="flex justify-between">
                        <p>{perfil.aniversario}</p>
                        <p>Entrega: {perfil.cidade}</p>
                    </div>
                </div>
                {troggleActv && (
                    <div className="bg-zinc-300 w-full py-2 flex flex-col gap-4 text-(--mainCl) p-4">
                        <p className="font-bold text-justify">
                        Descrição: <span className="font-medium">{perfil.hobbie}</span>
                        </p>
                        <button
                        type="button"
                        className="px-4 py-2 rounded-md bg-(--mainCl) flex gap-2 items-center justify-end text-zinc-300 self-end"
                        >
                        ANEXAR ARQUIVO
                        
                        </button>
                    </div>
                )}
            </div>
        </div>
    )
}