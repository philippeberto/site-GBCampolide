import Header from "../components/header"
import Contact from "../components/contact"
import Footer from "../components/footer"

const Schedule = () => {
  return (
    <div>
      <Header />
      <div>
        <img
          className="img-schedule"
          src="img/Horarios_2020-21.jpeg"
          alt="Imagem dos Horários"
        ></img>
        <p className='p-schedule'>As aulas podem ser suspensas por algum motivo excepcional,
        devidamente comunicado a todos os alunos antecipadamente. Para aulas experimentais é
        necessário marcação prévia.</p>
      </div>
      <Contact />

      <Footer />
    </div>
  )
}

export default Schedule
