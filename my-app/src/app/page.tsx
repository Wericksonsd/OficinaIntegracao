'use client';

import { redirect } from "next/navigation";

import Header from "@/components/header/header"
import FooterMbl from "@/components/header/footerMbl"
import { useState, useEffect } from "react"

import { getAtividades } from "../bd/atvBD";
import { Atividade } from "../bd/typesAtv";
import CardAtv from "@/components/cards/cardAtv"

import { getReuniao } from "../bd/reuniaoBD";
import { Reuniao } from "../bd/typesReuniao";
import CardReuniao from "@/components/cards/cardReuniao";   

import { getPerfils } from "@/bd/perfilBD";
import { Perfil } from "@/bd/typesPerfil";
import CardPerfil from "@/components/cards/cardPerfil";

import ModalNewAtv from "../components/modal/modalNewAtv";
import { addAtividade } from "@/bd/atvBD";
import ModalNewReuniao from "@/components/modal/modalNewNewReuniao";
import { addReuniao } from "@/bd/reuniaoBD";

export default function Main() {
    
    /*redirect("/login")*/

    const [atividades, setAtividades] = useState<Atividade[]>([])
    const [reunioes, setReunioes] = useState<Reuniao[]>([])
    const [perfils, setPerfils] = useState<Perfil[]>([])    
    const [modalOpen, setModalOpen] = useState(false);
    const [modalRn, setModalRn] = useState(false);

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


    const handleModal = () => setModalOpen(!modalOpen);

    const handleModalRn = () => setModalRn(!modalRn);

    const salvarNovaAtv = async (novaAtv: Atividade) => {
        await addAtividade(novaAtv);
        setAtividades((prev) => [...prev, novaAtv]);
    };

    const salvarReuniao = async (nova: Reuniao) => {
        await addReuniao(nova);
        setReunioes((prev) => [...prev, nova]);
    };

    return (
        <div className="bg-zinc-100 w-full h-dvh md:max-h-dvh flex flex-col justify-end md:justify-start text-zinc-200">
            <Header/>
            <div className="gradient-bg flex items-center py-4 px-6 text-4xl font-bold sticky"> MATERIAL</div>           
            <div className="flex-1 px-6 py-10 flex flex-col gap-12 overflow-auto no-scrollbar text-(--mainCl) md:flex-row md:flex-wrap md:justify-between md:px-16 md:overflow">
                <div className="w-full md:w-3/7">
                    <div className="w-full flex items-center justify-between">
                        <h1 className="text-2xl font-bold">SUAS ATIVIDADES</h1>
                        <button 
                            onClick={handleModal}
                            className="bg-(--mainCl) text-zinc-200 px-2 py-1 mt-2 border-2 border-(--mainCl) hover:bg-transparent hover:text-(--mainCL) hover:cursor-pointer"
                        >
                            Nova Atividade
                        </button>
                        <ModalNewAtv
                            modalOpen={modalOpen}
                            handleModal={handleModal}
                            onSave={salvarNovaAtv}
                        />
                    </div>
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
                <div className="w-full md:w-3/7">
                    <div className="w-full flex items-center justify-between">
                        <h1 className="text-2xl font-bold">SUAS REUNIÕES</h1>
                        <button 
                            onClick={handleModalRn}
                            className="bg-(--mainCl) text-zinc-200 px-2 py-1 mt-2 border-2 border-(--mainCl) hover:bg-transparent hover:text-(--mainCL) hover:cursor-pointer"
                        >
                            Nova Reunião
                        </button>
                        <ModalNewReuniao
                            modalOpen={modalRn}
                            handleModal={handleModalRn}
                            onSave={salvarReuniao}
                        />
                    </div>                        
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
                    <div className="w-full mt-4 flex flex-wrap gap-4 items-center justify-between md:flex-nowrap md:overflow-x no-scrollbar md:min-w-full">
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