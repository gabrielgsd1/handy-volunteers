import Image from "next/image";
import Quadro1 from "@/assets/quadro1.svg";
import Quadro2 from "@/assets/quadro2.svg";
import Quadro3 from "@/assets/quadro3.svg";
import Quadro4 from "@/assets/quadro4.svg";

function Frames() {
  return (
    <div className="flex flex-wrap items-center">
      <div className="mb-8 lg:mb-0 w-1/2 lg:w-1/4">
        <Image className="h-32 mx-auto mb-3" alt="quadro1" src={Quadro1} />
        <p className="font-bold text-center text-custom-white uppercase tracking-wider lg:px-4">
          nossa Plataforma Digital gratuita
        </p>
      </div>

      <div className="mb-8 lg:mb-0 w-1/2 lg:w-1/4">
        <Image className="h-32 mx-auto mb-3" alt="quadro2" src={Quadro2} />
        <p className="font-bold text-center text-custom-white uppercase tracking-wider lg:px-4">
          Projetos que fazemos com empresas
        </p>
      </div>

      <div className="mb-8 lg:mb-0 w-1/2 lg:w-1/4">
        <Image className="h-32 mx-auto mb-3" alt="quadro3" src={Quadro3} />
        <p className="font-bold text-center text-custom-white uppercase tracking-wider lg:px-4">
          Buscando aprendizados e melhorias
        </p>
      </div>

      <div className="mb-8 lg:mb-0 w-1/2 lg:w-1/4">
        <Image className="h-32 mx-auto mb-3" alt="quadro4" src={Quadro4} />
        <p className="font-bold text-center text-custom-white uppercase tracking-wider lg:px-4">
          fortalecimento de rede
        </p>
      </div>
    </div>
  );
}
export default Frames;
