import Header from "../components/header"
import Contact from "../components/contact"
import Footer from "../components/footer"

const Gallery = () => {
  return (
    <div>
      <Header />
      <div className="gallery">
        <h1 className="gallery-title">Galeria</h1>
        <img
          src="img/gallery/01.jpeg"
          alt="Imagem dos Horários"
          className="img-gallery"
        ></img>
        <img
          src="img/gallery/02.jpeg"
          alt="Imagem dos Horários"
          className="img-gallery"
        ></img>
        <img
          src="img/gallery/03.jpeg"
          alt="Imagem dos Horários"
          className="img-gallery"
        ></img>
        <img
          src="img/gallery/04.jpeg"
          alt="Imagem dos Horários"
          className="img-gallery"
        ></img>
        <img
          src="img/gallery/05.jpeg"
          alt="Imagem dos Horários"
          className="img-gallery"
        ></img>
        <img
          src="img/gallery/06.jpeg"
          alt="Imagem dos Horários"
          className="img-gallery"
        ></img>
        <img
          src="img/gallery/07.jpeg"
          alt="Imagem dos Horários"
          className="img-gallery"
        ></img>
        <img
          src="img/gallery/08.jpeg"
          alt="Imagem dos Horários"
          className="img-gallery"
        ></img>
      </div>
      <Contact />
      <Footer />
    </div>
  )
}

export default Gallery
