'use client';

import Header from "@/components/header/header"
import FooterMbl from "@/components/header/footerMbl"
import {Paperclip} from "lucide-react"
import {useState} from "react"


export default function Main() {
    const [troggleActv, setTroggleActv] = useState(false)

    const handleTroggleActv = () => {
        setTroggleActv(!troggleActv)
    }
;
    return (
        <div className="bg-zinc-300 w-full h-dvh flex flex-col justify-end md:justify-start">
            <Header/>           
            <div className="flex-1 px-6 py-10 overflow-auto no-scrollbar text-(--mainCl)">
                <div className="w-full">
                    <h1 className="text-2xl font-bold">SUAS ATIVIDADES</h1>
                    <div className="w-full h-0.75 bg-(--mainCl)"/>
                    <div
                    onClick={() => handleTroggleActv()}
                    className="w-full mt-4">
                        <div className={`w-full overflow-hidden flex flex-col border-(--mainCl) border-2 rounded-lg ${troggleActv ? 'bg-(--mainCl) text-zinc-300' : 'bg-zinc-300 text-(--mainCl)'}`}>
                            <div className="w-full px-4 py-1 h-18 flex flex-col">
                                <p className="font-bold text-[1.2rem] flex-1 text-left">SLIDES OFICINA 4</p>
                                <div className="flex justify-between">
                                    <p>Verbs to be</p>
                                    <p>Entrega: 18/11</p>
                                </div>
                            </div>
                            {troggleActv && (
                                <div className="bg-zinc-300 w-full py-2 flex flex-col gap-4 text-(--mainCl) p-4">
                                    <p className="font-bold text-justify">
                                    Descrição: <span className="font-medium">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio porro esse vel veritatis tenetur quae, repellendus laborum est totam provident maxime saepe labore debitis. Iste perspiciatis non neque quia ea, accusantium consequatur corporis esse sequi quis at, illum sunt. Voluptatibus quibusdam doloremque illum voluptas, vel ipsum perferendis cum nobis quidem?</span>
                                    </p>
                                    <button
                                    type="button"
                                    className="px-4 py-2 rounded-md bg-(--mainCl) flex gap-2 items-center justify-end text-zinc-300 self-end"
                                    >
                                    ANEXAR ARQUIVO
                                    <Paperclip/>
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
            <FooterMbl/>
        </div>
    )
}