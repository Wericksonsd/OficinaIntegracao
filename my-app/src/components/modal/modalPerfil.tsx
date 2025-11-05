'use client'

import { Perfil } from "@/bd/typesPerfil"
import { useState, useEffect } from "react"
import Image from 'next/image'

interface ModalPerfilProps {
  modalOpen: boolean;
  perfil: Perfil;
  handleModal: () => void;
}

interface CardPerfilProps {
  perfil: Perfil;
}

export default function ModalPerfil({ modalOpen, handleModal, perfil}: ModalPerfilProps){

  return (
    <div className={`bg-[#222222cc] z-1 inset-0 p-12 py-24 fixed ${modalOpen ? "flex" : "hidden"} items-center justify-center`}>
      <div className="w-full h-full py-12 bg-zinc-200 rounded-lg flex flex-col gap-4 items-center justify-start relative">
        <button
          type="button"
          id="btnCloseModalPfl"
          onClick={handleModal}
          className="p-2 px-4 rounded-lg absolute right-2 top-2 bg-(--mainCl) text-zinc-200 cursor-pointer hover:bg-zinc-200 hover:text-(--mainCl) hover:border hover:border-(--mainCl)">
          x
        </button>
        <div className="w-56 h-56 rounded-full border-4 border-(--mainCl) relative overflow-hidden">
            <Image
                src={perfil.foto}
                fill
                className="absolute"
                alt="Profile picture"
            />
        </div>
        <div className="w-full flex flex-col items-center justify-center">
          <p className="font-bold text-4xl">{perfil.nome}</p>
          <p>{perfil.setor}</p>
        </div>
        {/*<div className="w-4/5 h-0.75 bg-(--mainCl)"/>*/}
        <div className="flex-1 w-4/5">
          <div className="text-(--mainCl) border-2 border-(mainCl) mt-4 rounded-md text-center relative">
            <div className="w-32 font-bold rounded-md px-2 bg-(--mainCl) text-zinc-200 border-(--mainCl) text-left absolute top-0 left-0 -translate-y-1/2">CURSO</div>
            <p className="text-2xl mt-3">{perfil.curso}</p>
          </div>

          <div className="text-(--mainCl) border-2 border-(mainCl) mt-6 rounded-md text-center relative">
            <div className="w-32 font-bold rounded-md px-2 bg-(--mainCl) text-zinc-200 border-(--mainCl) text-left absolute top-0 left-0 -translate-y-1/2">CIDADE</div>
            <p className="text-2xl mt-3">{perfil.cidade}</p>
          </div>

          <div className="text-(--mainCl) border-2 border-(mainCl) mt-6 rounded-md text-center relative">
            <div className="w-32 font-bold rounded-md px-2 bg-(--mainCl) text-zinc-200 border-(--mainCl) text-left absolute top-0 left-0 -translate-y-1/2">HOBBIES</div>
            <div className="flex flex-col mt-3">
              {perfil.hobbie.map((item, index) => (
                <span key={index} className="text-2xl">
                  {item}
                </span>
              ))}
            </div>
          </div>          
        </div>
        
      </div>
    </div>
  );
}
