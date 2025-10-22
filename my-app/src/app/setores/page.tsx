import Image from 'next/image';

export default function Page() {
    return (
        <Image
            src={"/car.jpg"}
            alt="Car"
            width={1920}
            height={1080}
            className="w-full max-h-dvh object-cover"
        />
    )
}