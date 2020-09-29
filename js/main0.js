$ ( document ).ready( function(){
 console.log('DOM listo');

 let tileSize = 50;

 let ancho = window.innerWidth/2;
 let alto = window.innerHeight/2;

 let tilesX = ancho / tileSize;
 let tilesY = alto / tileSize;

 $('.elipses2').css('width', tileSize + 'px');
 $('.elipses2').css('height', tileSize + 'px');

 let anchoModulo = $('.elipses2').width();
 let altoModulo = $('.elipses2').height();

 // let countX = Math.round(ancho / anchoModulo);
 // let countY = Math.round(alto / altoModulo);


    $(document).on('mouseenter', '.elipses2', function(){
      $(this).addClass('mouseIn2');
      let mod = $(this);
      setTimeout( function(){
        $(mod).removeClass('mouseIn2');
      }, 900);
    });

    for(let i = 0; i < tilesX; i+=1.5){
      for (let j = 0; j < tilesY; j+=1.5){
   $('.containerGenera2').prepend('<div class="elipses2" style="left:' + (i * anchoModulo) + 'px; top:' + (j * altoModulo ) + 'px; width:' + anchoModulo + 'px; height:' + altoModulo+ 'px" ></div>')
   }
 }

 $(window).resize(function(){
   $('.containerGenera2').html('');

    let tileSize = 50;

    let ancho = window.innerWidth/2;
    let alto = window.innerHeight/2;

    let tilesX = ancho / tileSize;
    let tilesY = alto / tileSize;

   $('.elipses2').css('width', tileSize + 'px');
   $('.elipses2').css('height', tileSize + 'px');

   let anchoModulo = $('.elipses2').width();
   let altoModulo = $('.elipses2').height();

   // let countX = Math.round(ancho / anchoModulo);
   // let countY = Math.round(alto / altoModulo);




      $(document).on('mouseenter', '.elipses2', function(){
        $(this).addClass('mouseIn2');
        console.log("2222");
        let mod = $(this);
        setTimeout( function(){
          $(mod).removeClass('mouseIn2');
        }, 900);
      });

   for(let i = 0; i < tilesX; i+=1.5){
     for (let j = 0; j < tilesY; j+=1.5){
     $('.containerGenera2').prepend('<div class="elipses2" style="left:' + (i * anchoModulo) + 'px; top:' + (j * altoModulo ) + 'px; width:' + anchoModulo + 'px; height:' + altoModulo+ 'px"  ></div>')
     
     }
   }
 });
});
