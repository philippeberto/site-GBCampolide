import Link from "next/link"

const Freeclass = () => {
  return (
    <div className="freeclass">
      <p className="freeclass-slogan">Agende Uma Aula Experimental!</p>
      
        <Link href="https://api.whatsapp.com/send?phone=+351912212239">
        <a className="icon whatsapp">
          
        </a>
      </Link>
      <Link href="https://www.instagram.com/gbcampolide">
        <a className="icon instagram">
          
        </a>
      </Link>
      <Link href="https://www.facebook.com/gbcampolide">
        <a className="icon facebook">
          
        </a>
      </Link>
    </div>
  )
}

export default Freeclass
