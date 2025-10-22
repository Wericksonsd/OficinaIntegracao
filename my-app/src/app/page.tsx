import LoginForm from "@/components/loginForm";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex h-dvh w-full flex-col items-center justify-center px-12 py-4">
      <div className="flex items-center justify-center w-full h-50">
        <Image
          src="/horBranca.png"
          alt="Logo AP"
          height={50}
          width={300}
        />
      </div>

      <LoginForm/>

    </div>
  );
}
