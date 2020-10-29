## Site - Gracie Barra Campolide, Lisboa

Este projeto é o código-fonte do site criado para fins de propaganda e captação de leads para uma escola de Jiu-Jitsu. O formulário de contacto foi integrado à uma planilha do Google que recebe as informações de contacto de pessoas interessadas e permite ao usuário fazer observações acerca dos contactos e da matrícula do possível aluno.

Site disponível em: https://www.graciebarracampolide.pt/

## Pré-requisitos:

Você precisa do NodeJS e do NPM instalado em sua máquina.

npm install <br />
npm run dev

Construído com:

- NextJS -The React Framework<br />
  npm install next react react-dom
- Google Sheets API - Formulário de contacto integrado a uma planilha do Google<br />
  npm install google-spreadsheet

Para rodar a aplicação é necessário criar uma conta de serviço que será utilizada ("client_email" e "private_key") para acessar a planilha, e criar a própria planilha, guardando os dados de acesso e o ID da planilha no arquivo .env.local.

Author:
Philippe Berto
