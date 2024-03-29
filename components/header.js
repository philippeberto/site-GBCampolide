import React from "react"
import Head from "next/head"
import Link from "next/link"

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
        content="Escola de Jiu-Jitsu Brasileiro em Campolide. Aulas de segunda à sexta à noite e sábado pela manhã."
      ></meta>
      <meta name="author" content="Philippe Berto"></meta>
      <a name="home"></a>
      <div className="header">
        <Link href="/#home">
          <a className="logo"></a>
        </Link>
        <Link href="#sistemaGB">
          <a className="first-link header-link">Sistema GB</a>
        </Link>
        <Link href="/galeria">
          <a className="header-link">Galeria</a>
        </Link>
        <Link href="/horarios">
          <a className="header-link">Horários</a>
        </Link>
        <div className='phone-icon-lg'></div>
        <Link href="https://api.whatsapp.com/send?phone=+351937443787">
          <a className="whats-icon-lg"></a>
        </Link>
        <p className="last-link">+351 937 443 787</p>
        <Link href="tel:+351937443787">
          <a className="phone-icon"></a>
        </Link>
        <Link href="https://api.whatsapp.com/send?phone=+351937443787">
          <a className="whats-icon"></a>
        </Link>
      </div>
    </Head>
  )
}

export default PageHead
