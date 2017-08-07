var appID = "b8e11cb5";
var appKey = "a66413defcbdff50c92334a1e2d4564a";
var mcDUrl = "https://api.nutritionix.com/v1_1/search/cheddar%20cheese?fields=item_name%2Citem_id%2Cbrand_name%2Cnf_calories%2Cnf_total_fat&appId=" + appID + "&appKey=" + appKey;
$.ajax({
    url: mcDUrl,
    success: function (data) {
        console.log(data)
        var foodItem = data.hits[0];
        var name= foodItem.fields.item_name;
        var cals = foodItem.fields.nf_calories;
        $("body").append("<h2>This " + name + "has " +cals+"calories!</h2>")
    }

})