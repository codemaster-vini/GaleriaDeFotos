$(document).ready(function() {
    $('form button').click(function(e) {
        e.preventDefault();

        if($('#tarefa-nome').val() == '') {
            $('#erro').slideDown();
            $("#tarefa-nome").css('border', '2px solid red')
            $("#tarefa-nome").css('border-radius', '4px')
            $('#tarefa-nome').click(function() {
                $('#erro').slideUp();
                $("#tarefa-nome").css('border', '2px solid black')
            })
        } else{ 
            const tarefa = $('#tarefa-nome').val();
            const addTarefa = $('<li></li>');
            $(`<p>${tarefa}</p>`).appendTo(addTarefa)
            $(addTarefa).appendTo('ul');
        }

        $('#tarefa-nome').val('');
    })

    $('ul').on('click', 'li',function() {
        $(this).toggleClass('line-through')
    });

    
})