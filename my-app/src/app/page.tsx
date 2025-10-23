"use client"

import LoginForm from "@/components/loginForm";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function Home() {
  
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    setWindowWidth(window.innerWidth);

    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const imgLogo =
    windowWidth < 768 ? "/horBranca.png" : "/redBranca.png";

  return (
    <div className="bg-(--mainCl) flex h-dvh w-full flex-col items-center justify-center px-12 py-4 md:flex-row">
      <div className="flex items-center justify-center w-full h-50 md:w-1/2">
        <Image
          src={imgLogo}
          alt="Logo AP"
          height={50}
          width={500}
        />
      </div>

      <div className="mt-8 flex-1 w-full md:px-48 md:h-3/5">
        <LoginForm/>
      </div>

    </div>
  );
}
