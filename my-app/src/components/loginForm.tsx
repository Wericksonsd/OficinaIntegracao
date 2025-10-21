"use client";

import { signIn } from "next-auth/react";

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
    <form onSubmit={login} className="flex flex-col items-center justify-center gap-2 w-full mt-12 p-12 flex-1 bg-zinc-700 rounded-lg" >       
        <input
            name="email"
            type="email"
            placeholder="E-mail"
            className="input input-primary"
        />
        <input
            name="password"
            type="password"
            placeholder="Senha"
            className="input input-primary"
        />
        <button id="logar" className="btn btn-primary w-full mt-6" type="submit"> logar </button>
    </form>
);
}