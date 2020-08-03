import style from './css'

let player = {
   i : 0,
   speed : 50,
   style : undefined,
   timeId : undefined,
   ui : {
      $style : $('<style></style>'),
      $codePre : $('.codeBox > pre')
   },
   events: {
      '.btnPause' : 'pause',
       '.btnContinue' : 'continue',
      '.btnSlow' : 'slow',
      '.btnNormal' : 'normal',
      '.btnFast' : 'fast'
   },
   init(style) {
      player.style = style
      player.ui.$style.appendTo($('head'))
      player.bindEvents()
      player.run()
   },
   bindEvents() {
      for( let k in player.events) {
          $(k).click(player[player.events[k]])
      }
   },
   run() {
      const style = player.style
      const length = style.length
      if( player.i < length) {
         player.timeId = setInterval( () => {
            if( player.i === length) {
                player.clearTime()
            }
            player.ui.$codePre.html(style.substring(0,player.i))
            player.ui.$codePre.parent()[0].scrollTo(0,9999)
            player.ui.$style.html(style.substring(0,player.i) )
            player.i += 1
         },player.speed)
      }
   },
   pause() {
       player.clearTime()
   },
   continue() {
      player.clearTime()
      player.run()
   },
   slow() {
      player.clearTime()
      player.speed = 100
      player.run()
   },
   normal() {
      player.clearTime()
      player.speed = 50
      player.run()
   },
   fast() {
      player.clearTime()
      player.speed = 0
      player.run()
   },
   clearTime() {
      player.timeId && clearInterval(player.timeId)
   }
}

player.init(style)
