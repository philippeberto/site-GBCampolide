import React from "react"
import Head from "next/head"
import Link from "next/link"

const PageHead = () => {
  return (
    <Head>
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
        <div className="first-link"></div>
        <Link href="#sistemaGB">
          <a className="header-link">Sistema GB</a>
        </Link>
        <Link href="/gallery">
          <a className="header-link">Galeria</a>
        </Link>
        <Link href="/schedule">
          <a className="header-link">Horários</a>
        </Link>
        <div className="last-link"></div>

        <Link href="https://api.whatsapp.com/send?phone=+351912212239">
          <a className="phone">+351 912 212 239</a>
        </Link>
      </div>
    </Head>
  )
}

export default PageHead
