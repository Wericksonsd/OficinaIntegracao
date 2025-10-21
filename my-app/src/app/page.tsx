import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-[100dvh] w-full flex-col items-center justify-center p-12 bg-mainBlue">
      <div className="flex items-center justify-center w-full h-60">
        <Image
          src="/horBranca.png"
          alt="Logo AP"
          width={300}
          height={100}
        />
      </div>
      <div className="flex flex-col items-center justify-center w-full mt-12 flex-1 bg-zinc-700 rounded-lg">
        <form action="submit">
          
        </form>
      </div>
    </div>
  );
}
