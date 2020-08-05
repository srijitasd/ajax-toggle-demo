$(document).ready(function(){
    $('#btn1').on('click', function(){
        $(this).addClass('active');
        $.ajax({url: "pageOne.html", success: function(result){
            $('.page-container').html(result);
        }})
    })
})

$(document).ready(function(){
    $('#btn2').on('click', function(){
        $(this).addClass('active');
        $.ajax({url: "pageTwo.html", success: function(result){
            $('.page-container').html(result);
        }})
    })
})