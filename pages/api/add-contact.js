import { GoogleSpreadsheet } from 'google-spreadsheet'
import moment from 'moment'
import credentials from '../../planilha/credentials.json'

const doc = new GoogleSpreadsheet(process.env.SHEET_DOC_ID)

export default async (req, res) => {
  try {
    await doc.useServiceAccountAuth(credentials)
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