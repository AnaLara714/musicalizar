import pianoBanner from "../assets/piano-banner.jpg";

const Banner = () => {
  return (
    <section className="relative h-[60vh] w-full">
      <img src={pianoBanner} alt="Banner do Piano" className="absolute inset-0 h-full w-full object-cover" />
      <div className="relative z-10 flex h-full items-center justify-center bg-black bg-opacity-50">
        <div className="text-center text-white">
          <h1 className="mb-4 text-5xl font-bold">Portal de curso de escola de música de sobral</h1>
          <p className="mb-6 text-lg">Cursos online para todos os níveis. Comece hoje mesmo!</p>
        </div>
      </div>
    </section>
  );
};

export default Banner;


