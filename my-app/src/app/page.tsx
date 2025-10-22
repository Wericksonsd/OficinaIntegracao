import LoginForm from "@/components/loginForm";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex max-h-dvh w-full flex-col items-center justify-center p-12">
      <div className="flex items-center justify-center w-full h-60">
        <Image
          src="/horBranca.png"
          alt="Logo AP"
          width={300}
          height={60}
        />
      </div>

      <LoginForm/>

    </div>
  );
}
