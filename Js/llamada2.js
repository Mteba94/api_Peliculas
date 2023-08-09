
  onePelicula();

  function onePelicula(){

    document.addEventListener("DOMContentLoaded", function() {
        const url = new URL(window.location.href);
        const title = url.searchParams.get("title");
        const ubication = url.searchParams.get("ubication");
      
        //alert(title);
        //alert(ubication);
        
        var url2 = "https://movie.azurewebsites.net/api/cartelera?title=" + title + "&ubication=" + ubication;
        //var url = "https://movie.azurewebsites.net/api/cartelera?title=&ubication=";
    
        fetch(url2)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            var pelicula = document.getElementById("Pelicula2");
            pelicula.innerHTML = "";
            if (data.length > 0) {
                for(var i = 0; i < data.length; i++){

                    var div = document.createElement("div");
                    div.className = "card";

                    var div2 = document.createElement("div");
                    div2.className = "card-body";
                    div2.innerHTML = "<img src=" + data[i].Poster + " width='300' height='450'>"

                    var div3 = document.createElement("h5");
                    div3.className = "card-title";
                    div3.innerHTML = data[i].Title;

                    var div4 = document.createElement("p");
                    div4.className = "card-text";
                    div4.innerHTML = data[i].description;

                    var div5 = document.createElement("p");
                    div5.className = "card-text";
                    div5.innerHTML = data[i].Ubication;

                    pelicula.appendChild(div);
                    div.appendChild(div2);
                    div2.appendChild(div3);
                    div3.appendChild(div4);
                    div4.appendChild(div5);


                }
            }
        })
    
      });
    

    

}

  