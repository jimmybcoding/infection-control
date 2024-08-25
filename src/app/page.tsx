import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen">
        <Image
          src='/banner.jpg'
          sizes="100vw"
          width={100}
          height={100}
          className="w-full h-auto"
          alt='picture of a hand with bacteria and viruses'
        />
    </main>
  )
}

