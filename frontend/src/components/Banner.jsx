import pianoBanner from "../assets/piano-banner.jpg";

export default function Banner() {
  return (
    <section className="relative h-screen w-full">
      <img
        src={pianoBanner}
        alt="Banner do Piano"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="relative z-10 flex h-full items-center justify-center bg-black bg-opacity-50">
        <div className="text-center text-white">
          <h1 className="mb-4 text-5xl font-bold">
            Escola de Música Musicalizar
          </h1>
          <p className="mb-6 text-lg">
            Explore nossos cursos para todos os níveis e desenvolva seu talento
            musical com a gente!
          </p>
        </div>
      </div>
    </section>
  );
}
