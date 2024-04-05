
$(document).ready(function(){
    var owl = $(".owl-carousel").owlCarousel({
        loop:true,
        margin:25,
        nav:false,
        autoplay:true,
        autoplayTimeout:3000,
        autoplayHoverPause:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:4
            }
        },
        onInitialized: function(event) {
            setTimeout(function() {
                owl.trigger('stop.owl.autoplay'); // Detener la reproducción automática después de 15 segundos
                owl.trigger('to.owl.carousel', [0, 0]); // Volver al primer elemento del carrusel
                owl.trigger('play.owl.autoplay'); // Reanudar la reproducción automática
                owl.trigger('destroy.owl.carousel'); // Destruir el carrusel actual
                owl.owlCarousel({
                    loop:true,
                    margin:25,
                    nav:false,
                    autoplay:true,
                    autoplayTimeout:3000,
                    autoplayHoverPause:true,
                    responsive:{
                        0:{
                            items:1
                        },
                        600:{
                            items:3
                        },
                        1000:{
                            items:4
                        }
                    },
                    rtl: true // Cambiar la dirección de derecha a izquierda
                });
            }, 15000); // Cambiar después de 15 segundos (15000 milisegundos)
        }
    });
});
