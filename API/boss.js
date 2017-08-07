var wowUrl = "https://us.api.battle.net/wow/boss/?locale=en_US&apikey=wpewnmeeft7h3dp9ynkqmkdcwygmcxx8";

$.ajax({
    url: wowUrl,
    success: function (wowUrl) {
        console.log(wowUrl)
        var boss = wowUrl.bosses[0]
        $("body").append("<h2>This " + name + "has " +cals+"calories!</h2>")
    }

})