'use client'

import Image from "next/image";

export default function PerfilTela() {

    return (

        <div className="bg-zinc-100 w-full h-dvh flex flex-col justify-end md:justify-start text-zinc-200">
            <div className="gradient-bg flex items-center py-4 px-6 text-4xl font-bold sticky">PERFIL</div>
            <div className="w-full h-full bg-amber-500">
                <div className="w-22 h-22 rounded-full overflow-hidden border-2 border-zinc-300 md:w-32 md:h-32 relative">
                    <Image
                    src="/1.png"
                    fill
                    className="absolute"
                    alt="Profile picture"
                    />
                </div>
            </div>
        </div>
    )
}