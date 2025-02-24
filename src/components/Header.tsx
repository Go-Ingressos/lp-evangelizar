import Image from "next/image";

const HeaderEvangelizar = () => {
  return (
    <header className="w-full z-[999] bg-brand py-0 fixed">
      <div className="flex justify-center items-center py-8 px-10">
        <div className="flex-row flex gap-2 items-center">
          <Image
            src="/assets/logo-light-evangelizar.svg"
            alt="Logo Evangelizar"
            width={50}
            height={50}
          />
          <h2 className="text-white text-base uppercase">
            Evangelizar <br />{" "}
            <b className="font-extralight tracking-wider">Sempre</b>
          </h2>
        </div>
      </div>
    </header>
  );
};

export default HeaderEvangelizar;
