import React from "react";
import Layout from "./_layout";
import Form from "@/components/Form";


function sobrenos() {
  return (
    <Layout>
      <main>

        <div className="flex justify-center text-center mx-60 pt-28">
            <div className="">
              <span className="font-bold text-xl md:text-2xl text-custom-green">Quem somos ?</span><br/><br/>
              <span className="">A Handy Volunteers é um projeto idealizado e criado por Gabriel Gomes e Marcos Baliotti no ano de 2023.<br/> Movidos pelo desejo de criar um impacto significativo e mensurável nas comunidades, nos concentramos em criar esse projeto e nos esforçamos para conectar voluntários com projetos e organizações que tenham um impacto tangível e positivo na sociedade. Assim promovendo mais ações sociais e</span> 
              <span className="font-bold text-custom-green"> ajudando quem mais precisa</span>. <br />
              <span>Venha fazer parte dessas história você também. </span> 
            </div>
        </div>    

        <div className="flex pt-44 p-6 rounded-md space-x-16 mx-28">

            <div className="flex-1 rounded-2xl bg-black ">
              <span className="flex font-bold text-lg rounded-t-2xl text-black bg-custom-dark-green justify-center p-4">Para ONG's</span>
              <span className="flex flex-col space-y-2 m-6 text-white">
                <p>- Ongs podem se cadastrar para publicar vagas para voluntários.</p>
                <p>- Identifique suas necesidades. </p>
                <p>- Selecione e comunique os voluntários que forem aptos à vaga. </p>
                <p>- Inicie o trabalho com os voluntários e faça o acompanhamento para que ele se sinta acolhido e engajado. </p>
              </span>
            </div>

            <div className="flex-1 rounded-2xl bg-black ">
              <span className="flex font-bold text-lg rounded-t-2xl text-black bg-custom-dark-green justify-center p-4">Para Voluntários</span>
              <span className="flex flex-col space-y-2 text-white m-6">
                <p>- Assistentes podem se cadastrar para candidatar-se as vagas publicados pelas ONGs.</p>
                <p>- Busque uma vaga que te envolva, pode ser por causa, habilidade, região.</p>
                <p>- Responda à organização confirmando sua presença.</p>
                <p>- Ao final de cada trabalho, os assistentes recebem um certificado de horas.</p>
              </span>
            </div>
        </div>

        <div className="flex flex-col ml-8 pt-40 p-6 rounded-md">

            <div>
              <span className="flex bg-black rounded-2xl font-bold text-lg text-custom-green w-32 justify-center p-4">Missão</span>
                <span className="flex text-justify text-white ml-6 mr-72 my-6">
                  Conectar voluntários com oportunidades significativas para causar um impacto positivo em suas comunidades. Nosso objetivo é fornecer uma plataforma amigável que facilite o registro e o engajamento de voluntários, ajudando-os a encontrar e contribuir para as causas pelas quais são apaixonados.
                </span>
            </div>

            <div className="pt-8">
              <span className="flex bg-black rounded-2xl font-bold text-lg text-custom-green w-32 justify-center p-4">Visão</span>
                <span className="flex text-justify text-white ml-6 mr-72 my-6">
                  Tornar-se o site de referência para voluntários que buscam fazer a diferença. Ser a principal plataforma que conecta voluntários com diversas organizações e projetos, proporcionando uma experiência perfeita e confiável para voluntários e organizações. Para que assim tenham o poder de criar mudanças positivas em suas comunidades.
                </span>
            </div>

            <div className="pt-8">
              <span className="flex bg-black rounded-2xl font-bold text-lg text-custom-green w-32 justify-center p-4">Valores</span>
                <span className="flex text-justify text-white ml-6 mr-72 my-6">
                  - Capacitação <br />- Inclusão <br />- Integridade <br />- Colaboração <br />- Inovação <br />- Impacto
                </span>
            </div>

          </div>
      </main>
    </Layout>
  );
}

export default sobrenos;
