import { useState } from 'react';
import AccordionItem from './AccordionItem';

function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqItems = [
    {
      question: "Os cursos são gratuitos?",
      answer: "Sim, são gratuitos."
    },
    {
      question: "Como funcionam as aulas?",
      answer: "As aulas são ministradas duas vezes por semana com duração de 1h30 cada. O material didático é fornecido pela escola e os alunos podem praticar nos instrumentos disponíveis durante as aulas."
    },
    {
      question: "Preciso ter instrumento próprio?",
      answer: "Não é obrigatório ter instrumento próprio para iniciar as aulas, pois disponibilizamos instrumentos para uso durante as aulas. No entanto, recomendamos que os alunos adquiram seu próprio instrumento para praticar em casa."
    },
    {
      question: "Existe limite de idade para os cursos?",
      answer: "Os cursos de instrumento (guitarra e contrabaixo) são recomendados para pessoas a partir de 10 anos. Para crianças menores, oferecemos o curso de Musicalização Infantil, destinado a crianças entre 4 e 9 anos."
    }
  ];

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-[#6BE4FF] py-16 px-4">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-xl font-bold uppercase text-center mb-6 md:text-3xl">Dúvidas Frequentes</h2>

        <p className="text-center mb-8">
          Confira as respostas para dúvidas mais comuns.
        </p>

        <div className="space-y-4">
          {faqItems.map((item, index) => (
            <AccordionItem
              key={index}
              question={item.question}
              answer={item.answer}
              isOpen={openIndex === index}
              onClick={() => toggleAccordion(index)}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default FAQSection