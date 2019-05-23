// Select color input
console.log($('#colorPicker').val());
// Select size input
console.log($('#inputHeight').val());
console.log($('#inputWidth').val());

//Submit
$("input[type='submit']").on("click", function(evt) {
    event.preventDefault();
    console.log('It works!');

    let height = $('#inputHeight').val();
    let width = $('#inputWidth').val();

    $('#pixelCanvas').empty();
    makeGrid(height,width);
})
// When size is submitted by the user, call makeGrid()

function makeGrid(height,width) {
    for (let i = 0; i<height; i++) {
        $('#pixelCanvas').append($('<tr></tr>'));
        for (let j = 0; j<width; j++) {
            $('tr').last().append($('<td></td>'));
        }
    }
    $('#pixelCanvas').on('click', 'td', function() {
      $(this).css('background-color', $('#colorPicker').val());


    });
}
