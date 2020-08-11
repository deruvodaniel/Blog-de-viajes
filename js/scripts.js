$(function(){
    'use strict';


    // Copiar elementos

    // $('main article:first').hide();
    // var copia = $('main article:last').clone();
    // $('main').prepend(copia);
    // var copia = $('main article:last').clone();
    // $(copia).prependTo('main');

    // Evento CLick

    // $('div.logo img').on('click',function() {
    //     console.log("has hecho click en el logo");
    // });

    // Hover en jQuery

    // $('div.logo img').on('mouseenter', function(){
    //     console.log("Sobre el logo");
    // });
    // $('div.logo img').on('mouseleave', function(){
    //     console.log("Fuera del logo");
    // });

    // Evento Remover

    // $('div.logo img').on('click', function(){
    //     $(this).remove();
    // });

    // Agregando/Quitando Clases

    // $('div.logo img').addClass('activo');
    // $('main article:first').addClass('activo');
    // $('.navegacion ul li a').on('click', function(e){
    //     $('.navegacion ul li a').removeClass('activo');
    //     e.preventDefault();
    //     $(this).addClass('activo');
    // });

    // $('main').on({
    //     click: function() {
    //         $(this).addClass('fondorojo activo');
    //     }, mouseenter: function() {
    //         $(this).addClass('fondorojo');
    //     }, mouseleave: function(){
    //         $(this).addClass ('activo');
    //     }
    // });

    // Cambiando imagen

    // $('main article:first img').on('click', function(){
    //     $(this).attr('src', 'img/imagen_2.jpg');
    // });

    // Cambiando estilos

    // $('.logo img').css({'width': '600px'});
    // $('main article h2').css({'color': '#db008d'});
    // $('aside').css ({'background-color': '#e1e1e1',
    //                  'text-transform': 'uppercase',
    //                  'padding': '20px'
    // });

    // $('.navegacion ul li a').on('mouseenter', cambiarColor);
    // function cambiarColor(){
    //     $('.navegacion').css('background-color', 'red');
    // }


    // Animaciones

    // $('.logo img').on('click', function(){
    //     $(this).animate({'width':'200px'}, 1000);
    // });

    // $('main article img').on('mouseenter', aumentarImagen);
    // $('main article img').on('mouseleave', disminuirImagen);
    
    // function aumentarImagen() {
    //     $(this).animate({'width': '100%'});
    // }

    // function disminuirImagen() {
    //     $(this).animate({'width': '350px'});
    // }

    // Slide up/down

    // $('.logo img').click(function () {
    //     $('main article:first').slideUp(1000);
    // });

    // $('aside').click(function(){
    //     $('main article:first').slideDown(1000);
    // });


    // Cargando Datos con AJAX

    // $('div.logo img').on('click', cargarAjax);

    // function cargarAjax(){
    //     $.ajax('promociones.txt', {
    //         success: agregarContenido,
    //         type:'GET',
    //         datatype:'text'
    //     });
    // }

    // function agregarContenido(data, status, jqxhr){
    //     $('aside').text(data);
    //     console.log(status);

    // }

    // cargando HTML con AJAX
    // $('aside').load('promociones.html');

    // manipulando Arrays con jquery

    // var proximosViajes = ['Londres', 'Valencia', 'Madrid', 'Paris', 'Milan'];

    // $.each(proximosViajes, function (i, v){
    //     if(i==0) {
    //         $('aside').append('<h2>Próximos Viajes</h2>');
            
    //     }
    //     $('aside').append('<li>' + v + '</li>');
    // });

    // var viajesPorFecha = {
    //     primero:'Londres',
    //     segundo:'Valencia',
    //     tercero:'Madrid',
    //     cuarto:'Paris',
    //     quinto:'Milan'
    // }

    // console.log(viajesPorFecha);

    // $.each(viajesPorFecha, function (i, v) {
    //    $('aside').append('<li>' + i + ' - ' + v + '</li>');
    // });


    $('.nuestros-servicios div:first').show();
    $('.servicios nav a:first').addClass('activo');
    $('.servicios nav a').on('click', mostrarTabs);

    function mostrarTabs() {
        $('.servicios nav a').removeClass('activo');
        $(this).addClass('activo');
        var enlace = $(this).attr('href');
        $('.nuestros-servicios div').fadeOut();
        $(enlace).fadeIn();
        return false;
    }
});