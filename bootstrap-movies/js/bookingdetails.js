//Rakesh Neginhal, 10506981, Msc information

$(function(){

    startup();
   
})

//storing user details to local 
function startup(){

    //Onclick of proceed user details will be saved 
    $('#submit').on("click",function(){
        //alert("clicked");
        var userName=$('#textName').val();
        var userEmail=$('#textEmail').val();
        var noOfTickets=$('#inputnumber').val();
        var radioValue = $("input[name='optradio']:checked").val();
        console.log(`User Name entered is ::${userName}`);
        console.log(`User Email entered is ::${userEmail}`);
        console.log(`Number of Tickets  is ::${noOfTickets}`);
        console.log(`Gender selected   is ::${radioValue}`);

        //forming JSON from above entered details and storing it to local
        var res={Name:userName,Email:userEmail,Tickets:noOfTickets,Gender:radioValue};
        console.log("JSON req is:"+res);
        savedetails(JSON.stringify(res));

    })

    //Focus event to add background colour input fields 
    $('input').focus(function(){
        $(this).css('background','#f7cc22');
    });

    //Blur backround colour to white,when clicked outside the input fields 
    $('input').blur(function(){
        $(this).css('background','white');
    });

    $('#level').focus(function(){
        $(this).css('background','#f7cc22');

    });

    $('#level').blur(function(){
        $(this).css('background','white');

    });

}

function savedetails(res){
    localStorage.setItem("data",res)
    console.log(res);
}
