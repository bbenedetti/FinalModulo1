$ ( document ).ready( function(){
 console.log('DOM3 listo');

 let tileSize = 30;

 let ancho = window.innerWidth/2;
 let alto = window.innerHeight/2;

 let tilesX = ancho / tileSize;
 let tilesY = alto / tileSize;

 $('.elipses3').css('width', tileSize + 'px');
 $('.elipses3').css('height', tileSize + 'px');

 let anchoModulo = $('.elipses3').width();
 let altoModulo = $('.elipses3').height();

 // let countX = Math.round(ancho / anchoModulo);
 // let countY = Math.round(alto / altoModulo);


    $(document).on('mouseenter', '.elipses3', function(){
      $(this).addClass('mouseIn3');
      let mod = $(this);
      setTimeout( function(){
        $(mod).removeClass('mouseIn3');
      }, 900);
    });

    for(let i = 0; i < tilesX; i+=1.5){
      for (let j = 0; j < tilesY; j+=2){
   $('.containerGenera4').prepend('<div class="elipses3" style="left:' + (i * anchoModulo) + 'px; top:' + (j * altoModulo ) + 'px; width:' + anchoModulo + 'px; height:' + altoModulo/2+ 'px" ></div>')
   }
 }

 $(window).resize(function(){
   $('.containerGenera4').html('');
    let tileSize = 30;

    let ancho = window.innerWidth/2;
    let alto = window.innerHeight/2;

    let tilesX = ancho / tileSize;
    let tilesY = alto / tileSize;

   $('.elipses3').css('width', tileSize + 'px');
   $('.elipses3').css('height', tileSize + 'px');

   let anchoModulo = $('.elipses3').width();
   let altoModulo = $('.elipses3').height();

   // let countX = Math.round(ancho / anchoModulo);
   // let countY = Math.round(alto / altoModulo);




      $(document).on('mouseenter', '.elipses3', function(){
        $(this).addClass('mouseIn3');
        console.log("2222");
        let mod = $(this);
        setTimeout( function(){
          $(mod).removeClass('mouseIn3');
        }, 900);
      });

   for(let i = 0; i < tilesX; i+=1.5){
     for (let j = 0; j < tilesY; j+=2){
     $('.containerGenera4').prepend('<div class="elipses3" style="left:' + (i * anchoModulo) + 'px; top:' + (j * altoModulo ) + 'px; width:' + anchoModulo + 'px; height:' + altoModulo/2+ 'px" ></div>')
     }
   }
 });
});
