"use client";

import { signIn } from "next-auth/react";
import React, { useState } from "react";
import { User, KeyRound, IdCard } from "lucide-react";

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

    const [ loginState, setLoginState] = useState(0);

    const buttonColor = (x: number) =>{
        setLoginState(x);
    }

    return (
        <form onSubmit={login} className="flex flex-col items-center justify-start gap-4 w-full mt-12 p-8 flex-1 bg-zinc-100 rounded-lg" >

            <div className="w-full flex">
                <button
                    type="button"
                    className={`w-1/2 text-3xl ${loginState === 0 ? "text-(--mainCl)" : "text-zinc-500"} font-bold text-left hover:cursor-pointer`}
                    onClick={() => buttonColor(0)}>
                        <p>LOGIN</p>
                        <div className={`w-full h-1 ${loginState === 0 ? "bg-(--mainCl)" : "bg-zinc-500"} rounded-l-lg`}></div>
                </button>
                <button
                    type="button"
                    onClick={() => buttonColor(1)}
                    className={`w-1/2 text-3xl ${loginState === 1 ? "text-(--mainCl)" : "text-zinc-500"} font-bold text-right hover:cursor-pointer`}>
                        <p>SINGIN</p>
                        <div className={`w-full h-1 ${loginState === 1 ? "bg-(--mainCl)" : "bg-zinc-500"} rounded-r-lg`}></div>
                </button>
            </div>

            <p className="text-[#211f45] text-center flex-1">
                {loginState === 0 ? "Acesse utilizando seu e-mail institucional.  Caso seja seu primeiro acesso, clique em SINGIN crie sua conta." : "Crie sua conta utilizando seu e-mail institucional e seus dados. Você receberá no seu e-mail um link de confirmação, após confirmado, você poderá acessar o sistema."}
            </p>

            <div className="w-full flex item gap-4 p-4 rounded-lg text-zinc-300 border-2 border-zinc-300 hover:bg-zinc-300 hover:text-(--mainCl)">
                <User />
                <input
                    name="email"
                    type="email"
                    placeholder="E-mail"
                    className="flex-1 bg-transparent outline-none"
                />
            </div>

            <div className={`w-full ${loginState === 1 ? "flex" : "hidden"} item-center gap-4 p-4 rounded-lg text-zinc-300 border-2 border-zinc-300 hover:bg-zinc-300 hover:text-(--mainCl)`}>
                <IdCard />
                <input
                    name="ra"
                    type="text"
                    placeholder="RA"
                    className="flex-1 bg-transparent outline-none"
                />
            </div>

            <div className="w-full flex item-center gap-4 p-4 rounded-lg text-zinc-300 border-2 border-zinc-300 hover:bg-zinc-300 hover:text-(--mainCl)]">
                <KeyRound />
                <input
                    name="password"
                    type="password"
                    placeholder="Senha"
                    className="flex-1 bg-transparent outline-none"
                />
            </div>

            <button id="logar" className="w-full mt-6 bg-(--mainCl)  py-4 rounded-lg text-2xl font-bold" type="submit"> LOGAR </button>
        </form>
    );
}