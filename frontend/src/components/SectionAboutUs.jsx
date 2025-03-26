function SectionAboutUs() {
  return (
    <div
      id="conheça-nos"
      className="bg-[#6BE4FF] min-h-screen flex justify-center items-center p-4"
    >
      <div className="relative max-w-6xl w-full p-8 bg-[#6BE4FF]">
        <h1 className="text-center text-2xl font-nerko uppercase mb-4 md:text-3xl">
          Conheça-nos
        </h1>

        <p className="text-justify max-w-3xl mx-auto mb-8">
          Somos uma escola dedicada a despertar talentos e tornar o aprendizado
          musical acessível, envolvente e inspirador. Com professores
          experientes e um ambiente acolhedor, oferecemos cursos para todas as
          idades e níveis, ajudando cada aluno a se expressar, desenvolver sua
          criatividade e viver a magia da música. Seja para aprender um novo
          instrumento, aprimorar sua técnica ou simplesmente se conectar com a
          arte sonora, o Musicalizar é o lugar ideal para sua jornada musical.
          🎶✨
        </p>

        <div className="max-w-lg mx-auto bg-white border-r-8 border-b-8 border-black mb-8 overflow-hidden">
          <iframe
            className="w-full aspect-video"
            src="https://www.youtube.com/embed/PivRprIffe4"
            title="Vídeo da Escola de Música"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; compute-pressure"
            allowFullScreen
          ></iframe>
        </div>

        <img
          src="./som.svg"
          alt="Símbolo da Escola de Música"
          className="absolute top-0 left-0 h-16 hidden lg:h-24 md:block"
        />
        <img
          src="./ondas.svg"
          alt="Símbolo da Escola de Música"
          className="absolute bottom-0 left-0 h-12 hidden lg:h-16 md:block"
        />
        <img
          src="./palheta.svg"
          alt="Símbolo da Escola de Música"
          className="absolute bottom-0 right-0 h-16 hidden lg:h-24 md:block"
        />
      </div>
    </div>
  );
}

export default SectionAboutUs;
