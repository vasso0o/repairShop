import Link from "next/link";

//in the tailwind config file we created a class where it gets the background image

export default function Home() {
  return (
    <div className="bg-slate-800 bg-home-img bg-cover bg-center">
      <main className="flex flex-col justify-center text-center max-w-5xl mx-auto h-dvh">
        <div className="flex flex-col gap-6 p-12 rounded-xl bg-black/80 w-4/5 sm:max-w-96 mx-auto text-white sm:text-2xl">
          <h1 className="text-4xl font-bold">Vasso&apos;s Repair Shop</h1>
          <address>
            Ano Poli Thessaloniki<br />
            Greece, 54634
          </address>
          <p>
            Open Daily: 9am - 5pm
          </p>
          <Link href="tel:5555555555" className="hover:underline">555-555-5555</Link>
        </div>
      </main>
    </div>
  );
}
