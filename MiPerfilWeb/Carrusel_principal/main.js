document.addEventListener("DOMContentLoaded", () => {
    const elementosCarousel = document.querySelectorAll('.carousel');
    M.Carousel.init(elementosCarousel,{
        duration:500,
        dist: -80,
        shift: 5,
        padding: 5,
        numVisible: 5,
        indicators: true,
        noWrap:false
    });
});

// function mostrar_1(){
//     document.getElementById('container_1').style.display='none';
//     document.getElementById('container_2').style.display='flexbox';
//     document.getElementById('container_3').style.display='none';
// }

$(document).ready(function(){
    $("#name").on('change', function(){
        $(".data").hide();
        $("#"+$(this).val()).fadeIn(700);
    }).change();
});