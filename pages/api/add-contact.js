import { GoogleSpreadsheet } from 'google-spreadsheet'
import moment from 'moment'

const doc = new GoogleSpreadsheet(process.env.SHEET_DOC_ID)

export default async (req, res) => {
  try {
    await doc.useServiceAccountAuth({
      type: process.env.SHEET_TYPE,
      project_id: process.env.SHEET_PROJECT_ID,
      private_key_id: process.env.SHEET_PRIVATE_KEY_ID,
      private_key: process.env.SHEET_PRIVATE_KEY,
      client_email: process.env.SHEET_CLIENT_EMAIL,
      client_id: process.env.SHEET_CLIENT_ID,
      auth_uri: process.env.SHEET_AUTH_URI,
      token_uri: process.env.SHEET_TOKEN_URI,
      auth_provider_x509_cert_url: process.env.SHEET_AUTH_PROVIDER_X509_CERT_URL,
      client_x509_cert_url: process.env.SHEET_CLIENT_X509_CERT_URL
    })
    await doc.loadInfo()
    const sheet = doc.sheetsByIndex[1]
    const data = JSON.parse(req.body)
    await sheet.addRow({
      Data: moment().format('DD/MM/YYYY - HH:mm:ss'),
      Nome: data.Nome,
      Telemovel: data.Telemovel,
      Email: data.Email,
      Mensagem: data.Mensagem,
      Matricula: false
    })
    res.end(req.body)
  }
  catch (err) {
    console.log(err)
    res.end('error')
  }
}