import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen">
        <Image
          src='/banner.jpg'
          fill
          quality={100}
          sizes="100vw"
          className="-z-10 object-cover min-w-96"
          alt='picture of a hand with bacteria and viruses'
        />
    </main>
  )
}

