import React from "react";
const About = () => {
  const info = [
    { text: "Years experience", count: "04" },
    { text: "Completed Projects", count: "24" },
    { text: "Companies Work", count: "06" },
  ];
  return (
    <section id="about" className="py-10 text-gray-900">
      <div className="text-center m-12">
        <h3 className="text-4xl font-semibold">
          Sobre <span className="text-gray-200">Mim</span>
        </h3>
        <br />
        <br />
        <p  className="text-gray-200">
        </p>
        <div className="flex md:flex-row flex-col-reverse items-center md:gap-6 gap-12 px-10 max-w-6xl mx-auto">
          <div className="p-2">
            <div className="text-gray-900 font-semibold mt-12 my-3">
              <p className="text-justify text-xl leading-7 w-11/12 mx-auto">
              Minha paixão pela programação começou no mundo dos jogos, onde tive a oportunidade de contribuir para projetos open source. Essa experiência foi fundamental para consolidar minha dedicação à área e me motivou a me aprofundar no desenvolvimento web. Desde então, venho me encantando cada vez mais com a constante evolução da indústria e a possibilidade de aprender coisas novas todos os dias.
              <br />
              <br /> Acredito que a programação é uma jornada de aprendizado contínuo, e estou ansioso(a) para enfrentar novos desafios, crescer profissionalmente e colaborar com colegas talentosos de equipe. Se você estiver interessado(a) em discutir uma possível colaboração ou apenas quiser trocar experiências, sinta-se à vontade para entrar em contato. Juntos, podemos construir um futuro empolgante no mundo da tecnologia!
              </p>
              <br />
              <br />
              <a href="./src/assets/Code_a_program.pdf" download>
              </a>
            </div>
          </div>
          <div className="flex-1 md:mt-0 mt-6 flex justify-center items-center">
            <div className="lg:w-96 h-full relative sm:w-10/12 w-12/12 max-w-sm aboutImg ">
              <img
                src="https://media4.giphy.com/media/UE8IERTQe4YDjGZKx6/giphy.gif"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;