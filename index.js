const Nightmare = require('nightmare')
const nightmare = Nightmare({ show: true })
const config = require('./src/config')

var tag = 'frontinudi'
nightmare
    .goto('https://www.instagram.com/accounts/login/')
    .wait(800)
    .type('#react-root > section > main > div > article > div > div:nth-child(1) > div > form > div:nth-child(1) > div > div > input', config.insta.user)
    .type('#react-root > section > main > div > article > div > div:nth-child(1) > div > form > div:nth-child(2) > div > div > input', config.insta.password)
    .click('#react-root > section > main > div > article > div > div:nth-child(1) > div > form > span > button')
    .wait(5000)

    .goto('https://www.instagram.com/explore/tags/'+tag+'/?hl=en')
    .wait('#react-root')
    .click('#react-root > section > main > article > div:nth-child(2) > div > div > div > a')
    .wait(700)
    .inject('js', 'assets/jquery.js')
    .evaluate(() => {
      $(".coreSpriteHeartOpen").click()
      $("body > div:eq(2) > div > div > div:nth-child(1) > div:nth-child(1) > a")[0].click()
      $(".coreSpriteHeartOpen").click()
      $("body > div:eq(2) > div > div > div:nth-child(1) > div:nth-child(1) > a")[0].click()
    })
    .catch (function (){
      console.log('erro')
    })

