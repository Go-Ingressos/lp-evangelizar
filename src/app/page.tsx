import { Calendar, Church, Plane } from "lucide-react";
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
        <div className="w-full lg:w-1/2 flex flex-col gap-5">
          <h3 className="text-brand font-extrabold text-4xl">
            Quem contribui com a evangelização tem os mesmos méritos de um
            evangelizador! Escolha sua forma de contribuição!
          </h3>
          <div className="flex flex-row justify-between items-center gap-2">
            <Link
              href="https://goingressos.com.br/acesso/login-evangelizar"
              className="border w-4/12 py-5 flex-col border-slate-300 flex items-center justify-center px-4 rounded-md text-brand"
            >
              <p className="text-3xl">R$ 15</p>
              <small className="text-sm">por mês</small>
            </Link>
            <Link
              href="https://goingressos.com.br/acesso/login-evangelizar"
              className="border w-4/12 py-5 flex-col border-slate-300 flex items-center justify-center px-4 rounded-md text-brand"
            >
              <p className="text-3xl">R$ 30</p>
              <small className="text-sm">por mês</small>
            </Link>
            <Link
              href="https://goingressos.com.br/acesso/login-evangelizar"
              className="border w-4/12 py-5 flex-col border-slate-300 flex items-center justify-center px-4 rounded-md text-brand"
            >
              <p className="text-3xl">R$ 50</p>
              <small className="text-sm">por mês</small>
            </Link>
          </div>
          <div>
            <p className="text-lg">
              Configure o pagamento recorrente e contribua mensalmente com a
              evangelização.
            </p>
          </div>
        </div>
        <div className="w-full lg:w-1/2">
          <h4 className="text-brand font-extrabold text-4xl">
            Beneficios para o Contribuente
          </h4>
          <p className="text-lg">
            Oferecemos beneficios exclusivos para os membros
          </p>
          <ul className="flex flex-col gap-4">
            <li className="border border-slate-300 rounded-md p-4">
              <h6 className="flex flex-row items-center gap-2 text-brand">
                <Calendar size={24} />
                <span className="text-xl font-bold">Aniversariante do Mês</span>
              </h6>
              <p>Sorteios de um bolo para o aniversariante do mês.</p>
            </li>
            <li className="border border-slate-300 rounded-md p-4">
              <h6 className="flex flex-row items-center gap-2 text-brand">
                <Church size={24} />
                <span className="text-xl font-bold">Missas Mensais</span>
              </h6>
              <p>Missas mensais presididas pelo Pe. Luiz Senigalia</p>
            </li>
            <li className="border border-slate-300 rounded-md p-4">
              <h6 className="flex flex-row items-center gap-2 text-brand">
                <Plane size={24} />
                <span className="text-xl font-bold">Sorteios de viagens</span>
              </h6>
              <p>
                Sorteios de viagens exclusivas para o Santuário Nacional e
                outros prémios incríveis.
              </p>
            </li>
          </ul>
        </div>
      </section>
      <section></section>
    </>
  );
}
