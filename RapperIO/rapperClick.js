function preload() {
    j = loadSound("Juice.mp3")
    h = loadSound("Humble.mp3")
    g = loadSound("Goosebumps.mp3")
}

function setup() {
}
function onSignIn(googleUser) {
    console.log('User signed in!');
    var profile = googleUser.getBasicProfile();
    //change userName text, img source, & email text based on profile
    $("h3").text("Welcome back " + profile.getName());
    // $("img").attr("src", profile.getImageUrl());
    $(".email").text(profile.getEmail());
    // $("h3").text("Welcome")
}

//called when "sign out" button clicked
function onSignOut() {
    //should sign user out and toggleHidden
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
        console.log('User signed out.')
        //setting back to default
        $("h3").text("Log in to save your favorite Artists and songs");
        // $("img").attr("src", "assets/placeholder.png");
        $(".email").text("example@example.com");
    });
}
function mouseClicked() {

}