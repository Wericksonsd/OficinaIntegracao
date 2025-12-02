"use client";

import { signIn } from "next-auth/react";
import React, { useState } from "react";
import Link from "next/link";
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

    return (
        <form onSubmit={login} className="flex flex-col items-center justify-start gap-4 w-full p-8 h-full bg-zinc-100 rounded-t-lg md:rounded-lg" >

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
                        <p>SIGNIN</p>
                        <div className={`w-full h-1 ${loginState === 1 ? "bg-(--mainCl)" : "bg-zinc-500"} rounded-r-lg`}></div>
                </button>
            </div>

            <p className="text-[#211f45] text-center flex-1">
                {loginState === 0 ? "Acesse utilizando seu e-mail institucional.  Caso seja seu primeiro acesso, clique em SIGNIN crie sua conta." : "Crie sua conta utilizando seu e-mail institucional e seus dados. Você receberá no seu e-mail um link de confirmação, após confirmado, você poderá acessar o sistema."}
            </p>

            <div className="w-full flex item gap-4 p-4 py-2 rounded-lg text-(--mainCl) border-2 border-(--mainCl) hover:bg-(--mainCl) hover:text-zinc-200">
                <User />
                <input
                    name="email"
                    type="email"
                    placeholder="E-mail"
                    className="flex-1 bg-transparent outline-none"
                />
            </div>

            <div className={`w-full ${loginState === 1 ? "flex" : "hidden"} item-center gap-4 p-4 py-2 rounded-lg text-(--mainCl) border-2 border-(--mainCl) hover:bg-(--mainCl) hover:text-zinc-200`}>
                <IdCard />
                <input
                    name="ra"
                    type="text"
                    placeholder="RA"
                    className="flex-1 bg-transparent outline-none"
                />
            </div>

            <div className="w-full flex item-center gap-4 p-4 py-2 rounded-lg text-(--mainCl) border-2 border-(--mainCl) hover:bg-(--mainCl) hover:text-zinc-200">
                <KeyRound />
                <input
                    name="password"
                    type="password"
                    placeholder="Senha"
                    className="flex-1 bg-transparent outline-none"
                />
            </div>

            <Link href="/main" className="w-full"><button id="logar" className="w-full mt-6 bg-(--mainCl) text-zinc-200 py-4 rounded-lg text-2xl font-bold" type="submit"> LOGAR </button></Link>
        </form>
    );
}