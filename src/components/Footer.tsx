import { Facebook, Instagram } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const FooterEvangelizar = () => {
  return (
    <footer
      className="col-12 py-2 px-5 text-brand bg-slate-200"
    >
      <div className="flex justify-between items-center py-8 px-10 ">
        <div className="flex-row flex gap-2 items-center">
          <Image
            src="/assets/logo-dark-evangelizar.svg"
            alt="Logo Evangelizar"
            width={50}
            height={50}
          />
          <h2
            className="uppercase text-brand text-lg tracking-wider" 
          >
            Evangelizar <br />{" "}
            <b
              className="font-extralight"
              style={{
                letterSpacing: "0.5em",
              }}
            >
              Sempre
            </b>
          </h2>
        </div>
        <div className="text-brand">
          <p>Redes sociais</p>
          <div className="flex gap-2">
            <Link href="https://www.instagram.com/projetoevangelizarsempre/">
              <Instagram size={30} />
            </Link>
            <Link href="https://www.facebook.com/projetoevangelizarsempre/">
              <Facebook size={30} />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterEvangelizar;
