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
        <p className="font-bold text-4xl">{perfil.nome}</p>
        <p>{perfil.setor}</p>
        <div className="w-4/5 h-0.75 bg-(--mainCl)"/>
        <div className="">

        </div>
      </div>
    </div>
  );
}
