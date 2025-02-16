import pfp from "@/images/pfp.png";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen w-full items-center justify-center">
      <section className="flex min-h-screen w-full max-w-[1600px] items-center justify-center p-4">
        <Image className="select-none" src={pfp} alt="pfp" />
      </section>
    </main>
  );
}
