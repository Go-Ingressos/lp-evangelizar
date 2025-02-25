import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Link
        className="w-full"
        href="https://goingressos.com.br/evento/phn-londrina"
      >
        <Image
          src="/assets/phn.png"
          alt="PHN"
          width={1950}
          height={500}
          className="object-cover lg:object-contain max-md:h-[80vh] "
        />
      </Link>
      <section className="flex flex-col lg:flex-row lg:justify-between gap-4 px-4 py-8 bg-white">
        <div className="w-full lg:w-1/2 flex flex-col gap-5 justify-center">
          <div className="flex flex-row justify-between items-center gap-2">
            <Link
              href="https://goingressos.com.br/acesso/login-evangelizar"
              className="border w-full py-5 flex-col border-slate-300 flex items-center justify-center px-4 rounded-md text-brand"
            >
              <p className="text-3xl">Clique aqui e contribua</p>
            </Link>
          </div>
          <div>
            <p className="text-lg text-center">
              Configure o pagamento recorrente e contribua mensalmente com a
              evangelização.
            </p>
          </div>
        </div>
        <div className="w-full lg:w-1/2">
          <h4 className="text-brand text-4xl mb-2">
            Conheça nossos planos e <b className="font-extrabold">APOIE</b>
          </h4>
          <ul className="flex flex-col gap-4">
            <li className="border border-slate-300 rounded-md p-4">
              <h6 className="flex flex-row items-center gap-2 text-brand text-xl font-bold">
                R$ 15,00 - Plano Ofertante
              </h6>
              <p>Fique por dentro de todas as novidades</p>
            </li>
            <li className="border border-slate-300 rounded-md p-4">
              <h6 className="flex flex-row items-center gap-2 text-brand text-xl font-bold">
                R$ 30,00 - Plano Missionário
              </h6>
              <p>
                Receba uma de nossas camisetas em seu aniversário e tenha acesso
                exclusivo a pré-venda de nossos eventos
              </p>
            </li>
            <li className="border border-slate-300 rounded-md p-4">
              <h6 className="flex flex-row items-center gap-2 text-brand text-xl font-bold">
                R$ 60,00 - Plano Evangelizar SEMPRE
              </h6>
              <p>
                Receba um box especial a cada 2 meses e tenha acesso gratuito e
                exclusivo a nossos eventos
              </p>
            </li>
          </ul>
        </div>
      </section>
      <section></section>
    </>
  );
}
