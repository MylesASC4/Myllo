$.ajax({
    url: 'https://randomuser.me/api/',
    dataType: 'json',
    success: function (data) {
        console.log(data);
        var person = data.results[0];
        var firstName = person.name.first;
        var mail = person.email;
        var profilePic = person.picture.large;
        console.log("Contact me at, " + mail)

        $(".container-fluid").append("<img src=" + profilePic + ">")
        $(".container-fluid").append("<h2>Hi, my name is " + firstName + "</h2>")

    }
});