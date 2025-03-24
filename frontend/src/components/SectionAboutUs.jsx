function SectionAboutUs() {
  return (
    <div className="bg-[#6BE4FF] min-h-screen flex justify-center items-center p-4">
      <div className="relative max-w-6xl w-full p-8 bg-[#6BE4FF]">
        <h1 className="text-center text-xl font-nerko uppercase mb-4 md:text-3xl">Escola de Música Musicalizar</h1>

        <p className="text-center max-w-3xl mx-auto mb-8">
          A Escola de Música Maestro José Wilson Brasil – Escola de Música de Sobral é um equipamento mantido pela Prefeitura de Sobral e se presta a oferecer aulas de prática instrumental e vocal a pessoas a partir dos seis anos de idade. Seus cursos tem duração de dois anos.

          As matrículas são abertas semestralmente para os 20 cursos oferecidos. <a href="#" className="underline">Não existe nenhum tipo de seleção ou reserva</a> de vagas que são preenchidas por ordem de chegada. Existe apenas uma prioridade no atendimento de alunos(as) das escolas públicas municipais de Sobral e estaduais de toda a região.
        </p>

        <div className="max-w-lg mx-auto bg-white border-r-8 border-b-8 border-black mb-8 overflow-hidden">
          <iframe
            className="w-full aspect-video"
            src="https://www.youtube.com/embed/PivRprIffe4"
            title="Vídeo da Escola de Música"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; compute-pressure"
            allowFullScreen>
          </iframe>
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
  )
}

export default SectionAboutUs