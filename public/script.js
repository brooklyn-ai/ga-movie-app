	$(document).ready(function() {

    function highlight(word, query) {
        let check = new RegExp(query, "ig")
        return word.toString().replace(check, function(matchedText) {
            return "<u>" + matchedText + "</u>"
        })
    }

    $("#result-list").hide()
    $("#list").hide()

    $(".search-input").keyup(function() {
        let search = $(this).val()
        let results = ""
        if (search == "") {
            $("#result-list").hide()
            $(".search-input").removeClass("arrow").addClass("search")
        } else {
            $(".search-input").removeClass("search").addClass("arrow")
        }

        $.getJSON("https://www.omdbapi.com/?", { apikey: "33b87803", s: search }, function(data) {
            if (data.Search !== undefined) {
                $.each(data.Search, function(index, value) {
                    if (index < 2) {
                        $.getJSON("https://www.omdbapi.com/?", { apikey: "33b87803", i: value.imdbID }, function(movieData) {
                            if (movieData) {
                                value.imdbID
                                results += '<div class="result row p-1">'
                                results += '<div class="col-sm-5"><img src=' + movieData.Poster + ' style="width: 170px; height: 250px;" /></div>'
                                results += '<div class="col-sm-7 text-left"> <br>'

                               

                                results += '<div class="movie-title">'+ highlight(movieData.Title, $(".search-input").val()) +' ('+ movieData.Year +')</div> <br>'

                                // create identifier for favorites via imdbID
                                results += '<button onclick="addToFav(this.value)" class="favorite-div" id="myFav" value="' + movieData.Title + '" > Add to Favorites </button> <br>'


                                results += '<div class="rating-div"><span class="h4 rating">'+ movieData.imdbRating +'</span>/10</div>'
                                results += '<div class="my-3">'
                                results += '<div>Language: '+ movieData.Language + '</div> <br>'
                                results += '<div>Stars: '+ movieData.Actors.split(",").slice(0, 3) + '</div> <br>'
                                results += '</div>'
                                results += '<div class="my-3">'
                                results += '<div>Plot: '+ movieData.Plot.slice(0, 200) + '</div>'
                                results += '</div>'
                                results += '</div>'
                                results += "</div>"
                                $("#results").html(results)
                                
                                if (/Mobi|Android/i.test(navigator.userAgent)) {
                                    $("#results").children(".result").eq(1).hide();
                                } else {
                                    $(".result").first().after("<hr>")
                                }
                            }
                        })
                    }
                });
                $("#result-list").show()
            }
        });
    });
});


function addToFav(val){
  console.log(val);
  
}

