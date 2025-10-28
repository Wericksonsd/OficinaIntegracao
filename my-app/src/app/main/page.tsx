'use client';

import Header from "@/components/header/header"
import FooterMbl from "@/components/header/footerMbl"
import { useState, useEffect } from "react"
import Image from 'next/image'

import { getAtividades } from "../../bd/atvBD";
import { Atividade } from "../../bd/typesAtv";
import CardAtv from "@/components/cards/cardAtv"

import { getReuniao } from "../../bd/reuniaoBD";
import { Reuniao } from "../../bd/typesReuniao";
import CardReuniao from "@/components/cards/cardReuniao";   

import { getPerfils } from "@/bd/perfilBD";
import { Perfil } from "@/bd/typesPerfil";
import CardPerfil from "@/components/cards/cardPerfil";

export default function Main() {
    const [atividades, setAtividades] = useState<Atividade[]>([])
    const [reunioes, setReunioes] = useState<Reuniao[]>([])
    const [perfils, setPerfils] = useState<Perfil[]>([])
    
    useEffect(() => {
        async function fetchDados() {
            const dataAtv = await getAtividades()
            const dataRn = await getReuniao()
            const dataPf = await getPerfils()
            setPerfils(dataPf)
            setAtividades(dataAtv) 
            setReunioes(dataRn)  
        }
        fetchDados()

    }, [])

    return (
        <div className="bg-zinc-300 w-full h-dvh flex flex-col justify-end md:justify-start">
            <Header/>
            <div className="bg-(--mainCl) flex items-center py-2 px-4 text-4xl font-bold sticky"> MATERIAL</div>           
            <div className="flex-1 px-6 py-10 flex flex-col gap-12 overflow-auto no-scrollbar text-(--mainCl)">
                <div className="w-full">
                    <h1 className="text-2xl font-bold">SUAS ATIVIDADES</h1>
                    <div className="w-full h-0.75 bg-(--mainCl)"/>
                    <div className="w-full flex flex-col items-center gap-1">
                        {atividades.map((item) => (
                            <CardAtv 
                                key={item.id} 
                                atividade={item} 
                            />
                        ))}
                    </div>
                </div>
                <div className="w-full">
                    <h1 className="text-2xl font-bold">REUNIÕES</h1>                        
                    <div className="w-full h-0.75 bg-(--mainCl)"/>
                    {reunioes.map((item) => (
                            <CardReuniao
                                key={item.id} 
                                reuniao={item} 
                            />
                        ))}
                </div>
                <div className="w-full">
                    <h1 className="text-2xl font-bold">MEMBROS</h1>                        
                    <div className="w-full h-0.75 bg-(--mainCl)"/>
                    <div className="w-full flex flex-wrap items-center justify-between">
                        {perfils.map((item) => (
                            <CardPerfil
                                key={item.id}
                                perfil={item}
                            />
                        ))}
                    </div>
                </div>
            </div>
            <FooterMbl/>
        </div>
    )
}