//Rakesh Neginhal ,10506981 ,Msc Information Systems

$(document).ready(function () {
    createseating();
    
});


//Create seating arrangements with divs 
function createseating() {

    var seatingValue = [];
    for (var i = 0; i < 12; i++) {

        for (var j = 0; j < 10; j++) {
            var seatingStyle = `<div class='seat available' data-row='${i}'  data-col='${j}'></div>`;
            seatingValue.push(seatingStyle);

            if (j === 9) {
                var seatingStyle = `<div class='clearfix' data-row='${i}' data-col='${j}'></div>`;
                seatingValue.push(seatingStyle);

            }
        }
       
    }
    var screen="<br><div class='card'><div class='card-body' style='background-color:#54c4d8'><p class='card-text-rounded' style='margin-left:100px; 'background-color:red'>SCREEN</p></div></div>"
    seatingValue.push(screen);

    $('#messagePanel').html(seatingValue);

    //Events on each seat selection
    $(function () {
        $('.seat').on('click', function () {


            if ($(this).hasClass("selected")) {
                $(this).removeClass("selected");
            } else {
                $(this).addClass("selected");
            }

        });

        $('.seat').mouseenter(function () {
            $(this).addClass("hovering");

            $('.seat').mouseleave(function () {
                $(this).removeClass("hovering");

            });
        });


    });

//Onclick event to display the seleted seats
    $('#messagePanel').on('click', ".seat", function () {
        seatSelected=[];
        console.log("Seat clicked!");

        var row = $(this).data("row");
        var col = $(this).data("col");

        seatSelected.push({ row: row, col: col })
        console.log(seatSelected)
      //  renderBookingDetails();
      for (var i = 0; i < seatSelected.length; i++) {
        var currentSeat = seatSelected[i];
        $('#seatNumber').append(`<p>You booked seat number ${currentSeat.col} in row ${currentSeat.row}`)
        localStorage.setItem("data", "Column Number:"+currentSeat.col+"|Row Number"+currentSeat.row);


    }

    })
    $('#seatNumber').append(`<a href="#confirm" id="confirm" class="card-link">Confirm Now</a>`)      
    $('a[href="#confirm"]').click(function(){
        alert('Congradulations!! you successfully booked your tickets');
     }); 
};