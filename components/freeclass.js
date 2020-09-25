import Link from "next/link"

const Freeclass = () => {
  return (
    <div className="freeclass">
      <p className="freeclass-slogan">Agende Uma Aula Experimental!</p>
      <Link href="https://api.whatsapp.com/send?phone=+351912212239">
        <a className="icon">
          <img src="img/icons/whats_icon.png" width="40px"></img>
        </a>
      </Link>
      <Link href="https://www.instagram.com/gbcampolide">
        <a className="icon">
          <img src="img/icons/insta_icon.png" width="40px"></img>
        </a>
      </Link>
      <Link href="https://www.facebook.com/gbcampolide">
        <a className="icon">
          <img src="img/icons/facebook_icon.png" width="40px"></img>
        </a>
      </Link>
    </div>
  )
}

export default Freeclass
