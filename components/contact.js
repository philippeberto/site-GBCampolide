const Contact = () => {
  return (
    <div className="contact">
      <div className="contact-col">
        <img
          className="contact-logo"
          src="/img/GB_logo.png"
          alt="GB Logo"
        ></img>
      </div>
      <div className="contact-col">
        <h3 className="contact-tittle">Localização</h3>
        <p>
          Rua de Campolide, 137A, Lisboa
          <br />
          Portugal, CP 1070-029
        </p>
      </div>
      <div className="contact-col">
        <h3 className="contact-tittle">Contacto</h3>
        <p>+351 925 021 667</p>
        <p>+351 937 443 787</p>
      </div>
    </div>
  )
}

export default Contact
