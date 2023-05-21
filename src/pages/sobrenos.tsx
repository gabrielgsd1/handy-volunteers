import React from "react";
import Layout from "./_layout";
import GreenHighlight from "@/components/GreenHighlight";

function SobreNos() {
  return (
    <Layout>
      <main className="px-8 md:px-12 lg:px-20 py-8 text-lg responsive-font">
        <div className="flex justify-center">
          <div className="flex flex-col gap-8">
            <p className="font-bold text-xl md:text-4xl from-custom-green to-custom-dark-green bg-gradient-to-r bg-clip-text text-transparent">
              Quem somos ?
            </p>
            <p className="">
              A Handy Volunteers é um projeto idealizado e criado por Gabriel
              Gomes e Marcos Baliotti no ano de 2023.
            </p>
            <p>
              Movidos pelo desejo de criar um impacto significativo e mensurável
              nas comunidades, nos concentramos em criar esse projeto e nos
              esforçamos para conectar voluntários com projetos e organizações
              que tenham um impacto tangível e positivo na sociedade. Assim
              promovendo mais ações sociais e{" "}
              <GreenHighlight> ajudando quem mais precisa</GreenHighlight>.
            </p>
            <p>Venha fazer parte dessas história você também. </p>
          </div>
        </div>

        <div className="flex my-12 rounded-md gap-12 flex-col md:flex-row">
          <div className="flex-1 rounded-2xl bg-custom-black ">
            <span className="flex font-bold text-lg rounded-t-2xl text-custom-white bg-custom-dark-green justify-center p-4">
              Para ONG's
            </span>
            <p className="flex flex-col space-y-2 p-6 text-white">
              <p>
                - Ongs podem se cadastrar para publicar vagas para voluntários.
              </p>
              <p>- Identifique suas necesidades. </p>
              <p>
                - Selecione e comunique os voluntários que forem aptos à vaga.{" "}
              </p>
              <p>
                - Inicie o trabalho com os voluntários e faça o acompanhamento
                para que ele se sinta acolhido e engajado.{" "}
              </p>
            </p>
          </div>

          <div className="flex-1 rounded-2xl bg-custom-black ">
            <span className="flex font-bold text-lg rounded-t-2xl text-custom-white bg-custom-dark-green justify-center p-4">
              Para Voluntários
            </span>
            <p className="flex flex-col space-y-2 pext-white m-6">
              <p>
                - Assistentes podem se cadastrar para candidatar-se as vagas
                publicados pelas ONGs.
              </p>
              <p>
                - Busque uma vaga que te envolva, pode ser por causa,
                habilidade, região.
              </p>
              <p>- Responda à organização confirmando sua presença.</p>
              <p>
                - Ao final de cada trabalho, os assistentes recebem um
                certificado de horas.
              </p>
            </p>
          </div>
        </div>
        <div className="md:grid flex flex-col md:grid-cols-2 gap-12">
          <div className="">
            <p className="text-3xl font-bold text-custom-green">Missão</p>
            <span className="text-justify">
              Conectar voluntários com oportunidades significativas para causar
              um impacto positivo em suas comunidades. Nosso objetivo é fornecer
              uma plataforma amigável que facilite o registro e o engajamento de
              voluntários, ajudando-os a encontrar e contribuir para as causas
              pelas quais são apaixonados.
            </span>
          </div>
          <div className="">
            <p className="text-3xl font-bold text-custom-green">Visão</p>
            <span className="text-justify">
              Tornar-se o site de referência para voluntários que buscam fazer a
              diferença. Ser a principal plataforma que conecta voluntários com
              diversas organizações e projetos, proporcionando uma experiência
              perfeita e confiável para voluntários e organizações. Para que
              assim tenham o poder de criar mudanças positivas em suas
              comunidades.
            </span>
          </div>
          <div className="col-span-2">
            <p className="text-3xl font-bold text-custom-green">Valores</p>
            <ul className="">
              <li>- Capacitação</li>
              <li>- Inclusão</li>
              <li>- Integridade</li>
              <li>- Colaboração</li>
              <li>- Inovação</li>
              <li>- Impacto</li>
            </ul>
          </div>
        </div>
      </main>
    </Layout>
  );
}

export default SobreNos;
