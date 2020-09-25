import React from "react"
import Head from "next/head"
import Link from "next/link"

const PageHead = () => {
  return (
    <Head>
      <title>Gracie Barra Campolide, Lisboa</title>
      <link rel="apple-touch-icon" sizes="57x57" href="/apple-icon-57x57.png" />
      <link rel="apple-touch-icon" sizes="60x60" href="/apple-icon-60x60.png" />
      <link rel="apple-touch-icon" sizes="72x72" href="/apple-icon-72x72.png" />
      <link rel="apple-touch-icon" sizes="76x76" href="/apple-icon-76x76.png" />
      <link
        rel="apple-touch-icon"
        sizes="114x114"
        href="/apple-icon-114x114.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="120x120"
        href="/apple-icon-120x120.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="144x144"
        href="/apple-icon-144x144.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="152x152"
        href="/apple-icon-152x152.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-icon-180x180.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="192x192"
        href="/android-icon-192x192.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="96x96"
        href="/favicon-96x96.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <link rel="manifest" href="/manifest.json" />
      <meta name="msapplication-TileColor" content="#ffffff" />
      <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
      <meta name="theme-color" content="#ffffff" />
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
          <a className="header-link">+351 912 212 239</a>
        </Link>
      </div>
    </Head>
  )
}

export default PageHead
