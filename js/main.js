$ ( document ).ready( function(){
 console.log('DOM listo');

 let tileSize = 60;

 let ancho = window.innerWidth;
 let alto = window.innerHeight;

 let tilesX = ancho / tileSize;
 let tilesY = alto / tileSize;

 $('.elipses').css('width', tileSize + 'px');
 $('.elipses').css('height', tileSize + 'px');

 let anchoModulo = $('.elipses').width();
 let altoModulo = $('.elipses').height();

 //let countX = Math.round(ancho / anchoModulo);
 //let countY = Math.round(alto / altoModulo);


    $(document).on('mouseenter', '.elipses', function(){
      $(this).addClass('mouseIn');
      let mod = $(this);
      setTimeout( function(){
        $(mod).removeClass('mouseIn');
      }, 900);
    });

 for(let i = 0; i < tilesX; i+=1.5){
   for (let j = 0; j < tilesY; j+=1.5){
   $('.containerGeneral').prepend('<div class="elipses" style="left:' + (i * anchoModulo) + 'px; top:' + (j * altoModulo ) + 'px; width:' + anchoModulo + 'px; height:' + altoModulo+ 'px" ></div>')
   }
 }

 $(window).resize(function(){
   $('.containerGeneral').html('');
   let tileSize = 60;

   let ancho = window.innerWidth;
   let alto = window.innerHeight;

   let tilesX = ancho / tileSize;
   let tilesY = alto / tileSize;

   $('.elipses').css('width', tileSize + 'px');
   $('.elipses').css('height', tileSize + 'px');

   let anchoModulo = $('.elipses').width();
   let altoModulo = $('.elipses').height();

   //let countX = Math.round(ancho / anchoModulo);
   //let countY = Math.round(alto / altoModulo);



      $(document).on('mouseenter', '.elipses', function(){
        $(this).addClass('mouseIn');
        let mod = $(this);
        setTimeout( function(){
          $(mod).removeClass('mouseIn');
        }, 900);
      });

   for(let i = 0; i < tilesX; i+=1.5){
     for (let j = 0; j < tilesY; j+=1.5){
     $('.containerGeneral').prepend('<div class="elipses" style="left:' + (i * anchoModulo) + 'px; top:' + (j * altoModulo ) + 'px; width:' + anchoModulo + 'px; height:' + altoModulo+ 'px" > </div>')
     }
   }
 });
}); /// al resize hay que agregarle el texto
