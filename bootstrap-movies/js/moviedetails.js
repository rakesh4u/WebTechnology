//Rakesh Neginhal 10506981 Msc information


$(document).ready(function () {
    //By deafult Monady movies table is displayed
    showMovieTiming('mon');

});

//Onclick of each tab(day) the below method is called 
function showMovieTiming(day) {

    //remove table recodrs before calling the API 
    $('#tablecinema').find('tbody').remove();


    //Gets the response JSON from http://myjson.com/
    $.getJSON('https://api.myjson.com/bins/h03gq', function (data) {


        var htmlString = [];

        /**
         * 
         * Reading the json response and populating records dynamically in to table
         * Images are retreived from local path
         * 
         */
        for (var i = 0; i < data.length; i++) {
            console.log(day)
            var moviesData = data[i];
            var srcImg = "../bootstrap-movies/" + moviesData.image;

            htmlString.push("<tr>");
            htmlString.push("<td style='text-align:center'>" + moviesData.title + "<br>" +
                "<img src='" + srcImg + "' class='img-responsive' style='width:60%' alt='Image'>" +
                "</td>");

            //Adding cast ,director and genre 
            htmlString.push("<td style='margin-top:580px'>" + "<h6>Cast-</h6>" + moviesData.cast + "<br><br>" + "<h6>Directed by- </h6>" + moviesData.director + "<br><br>"
                + "<h6>Genre-</h6>" + moviesData.genre + "</td>");

            if (day == 'mon') {
                htmlString.push("<td>" + getMovieTimings('thuTimes', moviesData.runningTimes.mon) + "</td>");
            }
            else if (day == 'tue') {
                htmlString.push("<td>" + getMovieTimings('thuTimes', moviesData.runningTimes.tue) + "</td>");
            }
            else if (day == 'wed') {
                htmlString.push("<td>" + getMovieTimings('thuTimes', moviesData.runningTimes.wed) + "</td>");
            }
            else if (day == 'thu') {
                htmlString.push("<td>" + getMovieTimings('thuTimes', moviesData.runningTimes.thu) + "</td>");

            }
            else if (day == 'fri') {
                htmlString.push("<td>" + getMovieTimings('thuTimes', moviesData.runningTimes.fri) + "</td>");
            }
            else if (day == 'sat') {
                htmlString.push("<td>" + getMovieTimings('thuTimes', moviesData.runningTimes.sat) + "</td>");
            }
            htmlString.push("</tr>");

        }

        $("<tbody/>", { html: htmlString.join("") }).appendTo("table");


    });


}


//For avery movie day coressponding movie time will be displayed as a dropdown. 
function getMovieTimings(id, obj) {

    htmlString = [];

    htmlString.push(`<select id='${id}' class='movieTimes formcontrol'>`);
    htmlString.push("<option value=''>Select movie time</option");
    var options = '';
    console.log(obj)
    var options = obj.map(x => {
        return `<option value='${x}'>${x}</option>`;
    })
    console.log(options);
    htmlString.push(options.join(" "));
    htmlString.push("</select>");
    return htmlString.join(" ");
}

