const Nightmare = require('nightmare')
const nightmare = Nightmare({ show: true })
const config = require('./src/config')

nightmare
  .goto('https://virtualif.iftm.edu.br/VRTL/')
   .type('#usuario', config.login.user)
   .type('#senha-desktop', config.login.password)
   .click('#frm-login-btn-entrar')
   .wait(5000)
   .goto('https://virtualif.iftm.edu.br/ERP/MAC/CRA/visao/?modulo=ALUNO')
   .wait('#treeMenu')
   .inject('js', 'assets/jquery.js')
    .evaluate(() => {
      $("a:contains('Frequência')").click()
    })
   .wait(5000)
   .screenshot('frequencia.png')
   .evaluate(() => {
      $("a:contains('Horário do aluno')").click()
    })
   .wait(5000)
   .screenshot('Horario-do-aluno.png')
   .evaluate(() => {
     return $("tbody").get(17)
  })
  .goto('https://virtualif.iftm.edu.br/ERP/MAC/CRA/visao/?modulo=ALUNO')
   .end()
   .then(function(){
     console.log('ok')
  })
  .catch(error => {
    console.error('error->', error)
  })