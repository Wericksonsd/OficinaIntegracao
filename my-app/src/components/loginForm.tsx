"use client";

import { signIn } from "next-auth/react";
import { User, KeyRound } from "lucide-react";

export default function LoginForm() {

    async function login(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        const formData = new FormData(e.currentTarget);
        const data = {
            email: formData.get("email"),
            password: formData.get("password"),
        }
        signIn("credentials", {
            ...data,
            callbackUrl: "/dashboard",
        })
    }

return (
    <form onSubmit={login} className="flex flex-col items-center justify-start gap-4 w-full mt-12 p-8 flex-1 bg-zinc-100 rounded-lg" >

        <div className="w-full flex">
            <div className="w-1/2 text-3xl text-[#211f45] font-bold">
                <p>LOGIN</p>
                <div className="w-full h-1 bg-[#211f45] rounded-l-lg"></div>
            </div>
            <div className="w-1/2 text-3xl text-zinc-500 font-bold text-right">
                <p>LOGIN</p>
                <div className="w-full h-1 bg-zinc-500 rounded-r-lg"></div>
            </div>
        </div>

        <p className="text-[#211f45] text-center flex-1">Acesse utilizando seu e-mail institucional. <br /> Caso seja seu primeiro acesso, crie sua conta.</p>

        <div className="w-full flex item gap-4 p-4 rounded-lg text-zinc-300 border-2 border-zinc-300 hover:bg-zinc-300 hover:text-[#211F45]">
            <User />
            <input
                name="email"
                type="email"
                placeholder="E-mail"
                className="flex-1 bg-transparent outline-none"
            />
        </div>

        <div className="w-full flex item gap-4 p-4 rounded-lg text-zinc-300 border-2 border-zinc-300 hover:bg-zinc-300 hover:text-[#211F45]">
            <KeyRound />
            <input
                name="password"
                type="password"
                placeholder="Senha"
                className="flex-1 bg-transparent outline-none"
            />
        </div>

        <button id="logar" className="btn btn-primary w-full mt-6" type="submit"> logar </button>
    </form>
);
}