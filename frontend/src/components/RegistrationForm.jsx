import { useState } from "react";

function RegistrationForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    cpf: '',
    birthDate: '',
    street: '',
    number: '',
    neighborhood: '',
    complement: '',
    education: '',
    grade: '',
    course: '',
    level: '',
    classGroup: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setFormData({
      fullName: '',
      cpf: '',
      birthDate: '',
      street: '',
      number: '',
      neighborhood: '',
      complement: '',
      education: '',
      grade: '',
      course: '',
      level: '',
      classGroup: ''
    });
    alert('Inscrição realizada com sucesso!');
  };

  return (
    <div className="bg-[#6BE4FF] py-16 px-4">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-3xl font-bold uppercase text-center mb-6">Inscrições Abertas</h2>

        <p className="text-center mb-8">
          Preecha o formulário abaixo para se inscrever em um curso e musicalizar sua vida.
        </p>

        <div className="bg-white rounded-xl p-8 shadow-lg">
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="fullName" className="block mb-2 font-medium">Nome completo</label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                className="w-full p-2 bg-gray-200 rounded"
                required
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label htmlFor="cpf" className="block mb-2 font-medium">CPF</label>
                <input
                  type="text"
                  id="cpf"
                  name="cpf"
                  value={formData.cpf}
                  onChange={handleChange}
                  className="w-full p-2 bg-gray-200 rounded"
                  required
                />
              </div>
              <div>
                <label htmlFor="birthDate" className="block mb-2 font-medium">Data de Nascimento</label>
                <input
                  type="date"
                  id="birthDate"
                  name="birthDate"
                  value={formData.birthDate}
                  onChange={handleChange}
                  className="w-full p-2 bg-gray-200 rounded"
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label htmlFor="street" className="block mb-2 font-medium">Rua</label>
                <input
                  type="text"
                  id="street"
                  name="street"
                  value={formData.street}
                  onChange={handleChange}
                  className="w-full p-2 bg-gray-200 rounded"
                  required
                />
              </div>
              <div>
                <label htmlFor="number" className="block mb-2 font-medium">Número</label>
                <input
                  type="text"
                  id="number"
                  name="number"
                  value={formData.number}
                  onChange={handleChange}
                  className="w-full p-2 bg-gray-200 rounded"
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label htmlFor="neighborhood" className="block mb-2 font-medium">Bairro</label>
                <input
                  type="text"
                  id="neighborhood"
                  name="neighborhood"
                  value={formData.neighborhood}
                  onChange={handleChange}
                  className="w-full p-2 bg-gray-200 rounded"
                  required
                />
              </div>
              <div>
                <label htmlFor="complement" className="block mb-2 font-medium">Complemento</label>
                <input
                  type="text"
                  id="complement"
                  name="complement"
                  value={formData.complement}
                  onChange={handleChange}
                  className="w-full p-2 bg-gray-200 rounded"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label htmlFor="education" className="block mb-2 font-medium">Escolaridade</label>
                <input
                  type="text"
                  id="education"
                  name="education"
                  value={formData.education}
                  onChange={handleChange}
                  className="w-full p-2 bg-gray-200 rounded"
                  required
                />
              </div>
              <div>
                <label htmlFor="grade" className="block mb-2 font-medium">Série</label>
                <input
                  type="text"
                  id="grade"
                  name="grade"
                  value={formData.grade}
                  onChange={handleChange}
                  className="w-full p-2 bg-gray-200 rounded"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div>
                <label htmlFor="course" className="block mb-2 font-medium">Curso</label>
                <select
                  id="course"
                  name="course"
                  value={formData.course}
                  onChange={handleChange}
                  className="w-full p-3 bg-gray-200 rounded"
                  required
                >
                  <option value="">Selecione</option>
                  <option value="guitarra">Guitarra Elétrica</option>
                  <option value="baixo">Contrabaixo Elétrico</option>
                  <option value="musica-infantil">Musicalização Infantil</option>
                </select>
              </div>
              <div>
                <label htmlFor="level" className="block mb-2 font-medium">Nível</label>
                <select
                  id="level"
                  name="level"
                  value={formData.level}
                  onChange={handleChange}
                  className="w-full p-3 bg-gray-200 rounded"
                  required
                >
                  <option value="">Selecione</option>
                  <option value="iniciante">Iniciante</option>
                  <option value="intermediario">Intermediário</option>
                  <option value="avancado">Avançado</option>
                </select>
              </div>
            </div>

            <div className="mb-8">
              <label htmlFor="classGroup" className="block mb-2 font-medium">Turma</label>
              <select
                id="classGroup"
                name="classGroup"
                value={formData.classGroup}
                onChange={handleChange}
                className="w-full p-3 bg-gray-200 rounded"
                required
              >
                <option value="">Selecione</option>
                <option value="turma1">Turma 1: Seg. e Qua. 18h - 19h30</option>
                <option value="turma2">Turma 2: Ter. e Qui. 18h - 19h30</option>
              </select>
            </div>

            <button
              type="submit"
              className="w-full bg-orange-500 text-white font-medium py-3 rounded-md hover:bg-orange-600 transition-colors"
            >
              Realizar inscrição
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default RegistrationForm