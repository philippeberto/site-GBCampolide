import { useState } from 'react'

const Form = () => {
  const [form, setForm] = useState({
    Nome: '',
    Telemovel: '',
    Email: '',
    Mensagem: ''
  })
  const onChange = evt => {
    const value = evt.target.value
    const key = evt.target.name
    setForm(old => ({
      ...old,
      [key]: value
    }))
  }
  const [success, setSuccess] = useState(false)
  const [retorno, setRetorno] = useState({})
  const save = async () => {
    try {
      const response = await fetch('api/add-contact', {
        method: 'POST',
        body: JSON.stringify(form)
      })
      const data = await response.json()
      setSuccess(true)
      setRetorno(data)
    } catch (err) { }
  }
  return (
    <div className='form-backgound'>
      <h1 className='form-title'>Contacto</h1>
      {!success && <div className='form'>
        <div className='left-form'>
          <label className='form-label'>Nome:</label>
          <input type='text' className='form-input form-block' onChange={onChange} name='Nome' value={form.Nome} />
          <label className='form-label'>Telem.:</label>
          <input type='text' className='form-input form-block' onChange={onChange} name='Telemovel' value={form.Telemovel} />
          <label className='form-label'>E-mail:</label>
          <input type='text' className='form-input form-block' onChange={onChange} name='Email' value={form.Email} />
        </div>
        <div className='right-form'>
          <label className='form-label'>Mensagem:</label>
          <textarea className='input-message form-block' onChange={onChange} name='Mensagem' value={form.Mensagem} />
        </div>
      </div>}
      {success && <div>
        <p className='form-result'>Agradecemos vosso interesse e retornaremos em bereve.</p>
      </div>}
      <div className='button-div'>
        <button onClick={save} className='button'>Enviar</button>
      </div>


    </div>
  )
}

export default Form