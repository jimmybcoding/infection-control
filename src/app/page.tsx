import Image from "next/image";

export default function Home() {
  return (
    <main>
        <Image
          src='/banner.jpg'
          layout="responsive"
          quality={100}
          width={100}
          height={100}
          sizes="100vw"
          className="object-cover min-w-96"
          alt='picture of a hand with bacteria and viruses'
        />
    </main>
  )
}

