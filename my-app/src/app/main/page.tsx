'use client';

import Header from "@/components/header/header"
import FooterMbl from "@/components/header/footerMbl"
import { useState, useEffect } from "react"
import { getAtividades } from "../bd/atvBD";
import { Atividade } from "../bd/typesAtv";
import CardAtv from "@/components/cards/cardAtv"

export default function Main() {
    const [atividades, setAtividades] = useState<Atividade[]>([])
    
    useEffect(() => {
        async function fetchAtividades() {
            const data = await getAtividades()
            setAtividades(data)   
        }
        fetchAtividades()
    }, [])

    return (
        <div className="bg-zinc-300 w-full h-dvh flex flex-col justify-end md:justify-start">
            <Header/>           
            <div className="flex-1 px-6 py-10 overflow-auto no-scrollbar text-(--mainCl)">
                <div className="w-full">
                    <h1 className="text-2xl font-bold">SUAS ATIVIDADES</h1>
                    <div className="w-full h-0.75 bg-(--mainCl)"/>
                    <div className="w-full flex flex-col items-center gap-4 mt-4">
                    {atividades.map((item) => (
                        <CardAtv 
                            key={item.id} 
                            atividade={item} 
                        />
                    ))}
                </div>
                </div>
            </div>
            <FooterMbl/>
        </div>
    )
}