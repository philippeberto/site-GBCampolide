import React from "react"
import Head from "next/head"
import Link from "next/link"
import Image from "next/image"

const PageHead = () => {
  return (
    <Head>
      <title>Gracie Barra Campolide, Lisboa</title>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0"
      ></meta>
      <meta
        name="keywords"
        content="Jiu-Jitsu, jiu jitsu, jiu jitsu portugal, jiu jitsu lisboa, jiu jitsu brasileiro, gracie barra, gracie barra portugal, gracie barra lisboa"
      ></meta>
      <meta
        name="description"
        content="Escola oficial Gracie Barra. Venha aprender Jiu-Jitsu na Gracie Barra em Campolide, Lisboa. Aulas de segunda-feira à sábado."
      ></meta>
      <meta name="author" content="Philippe Berto"></meta>
      <a name="home"></a>
      <div className="header">
        <div className="header-left">
          <Link href="/">
          {/* <a><Image src='/GB_CAMPOLIDE_black.png' width={260} height={40} /></a> */}
          <a className='logo'></a>
        </Link>
        </div>
        <div className='header-middle'>
          <Link href="#sistemaGB">
            <a className="header-link">Sistema GB</a>
          </Link>
          <Link href="/galeria">
            <a className="header-link">Galeria</a>
          </Link>
          <Link href="/horarios">
            <a className="header-link">Horários</a>
          </Link>
        </div>
        <div className="header-right">
          <div className='phone-icon-lg'></div>
          <Link href="https://api.whatsapp.com/send?phone=+351937443787">
            <a className="whats-icon-lg"></a>
          </Link>
          <p className="phone-number">+351 937 443 787</p>
          <Link href="tel:+351925021667">
            <a className="phone-icon"></a>
          </Link>
          <Link href="https://api.whatsapp.com/send?phone=+351937443787">
            <a className="whats-icon"></a>
          </Link>
        </div>
      </div>
    </Head>
  )
}

export default PageHead
