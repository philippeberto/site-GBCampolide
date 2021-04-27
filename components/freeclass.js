import Link from "next/link"

const Freeclass = () => {
  return (
    <div className="freeclass">
      <div className='freeclass-content'>
        <p className="freeclass-slogan">Agende Uma Aula Experimental!</p>
        <Link href="https://api.whatsapp.com/send?phone=+351925021667">
          <a className="whatsapp">

          </a>
        </Link>
        <Link href="https://www.instagram.com/gbcampolide">
          <a className="instagram">

          </a>
        </Link>
        <Link href="https://www.facebook.com/gbcampolide">
          <a className="facebook">

          </a>
        </Link>
      </div>
    </div>
  )
}

export default Freeclass
