
peliculaGet();
onePelicula();

function peliculaGet(){
    var url = "https://movie.azurewebsites.net/api/cartelera?title=&ubication=";

    fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            var pelicula = document.getElementById("Pelicula");
            pelicula.innerHTML = "";
            if (data.length > 0) {
                for(var i = 0; i < data.length; i++){
                    
                    var div = document.createElement("div");
                    div.className = "col-md-6";

                    var div2 = document.createElement("div");
                    div2.className = "row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative";

                    var div3 = document.createElement("div");
                    div3.className = "col p-4 d-flex flex-column position-static";

                    var div4 = document.createElement("div");
                    div4.className = "mb-1 text-muted";
                    div4.innerHTML = data[i].Ubication;

                    var div5 = document.createElement("div");
                    div5.className = "col-auto d-none d-lg-block";
                    div5.innerHTML = "<img src=" + data[i].Poster + " width='200' height='250'>"

                    var type = document.createElement("strong");
                    type.className = "d-inline-block mb-2 text-primary";
                    type.innerHTML = data[i].Type;

                    var title = document.createElement("h3");
                    title.className = "mb-0";
                    title.innerHTML = data[i].Title;

                    var anio = document.createElement("div");
                    anio.className = "mb-1 text-muted";
                    anio.innerHTML = data[i].Year;

                    function truncateTextByWords(text, numWords) {
                        // Dividir el texto en palabras
                        var words = text.split(" ");
                        
                        // Verificar si el texto ya es más corto que el límite de palabras
                        if (words.length <= numWords) {
                          return text;
                        }
                      
                        // Unir las primeras numWords palabras y agregar tres puntos (...) al final
                        var truncatedText = words.slice(0, numWords).join(" ") + "...";
                      
                        return truncatedText;
                      }

                    var sipnosis = document.createElement("p");
                    sipnosis.className = "card-text mb-auto";
                    sipnosis.innerHTML = data[i].description;

                    var maxLengthWords = 6;
                    sipnosis.innerHTML = truncateTextByWords(data[i].description, maxLengthWords);
                    

                    var link = document.createElement("a");
                    link.className = "stretched-link";
                    link.innerHTML = "Ver más";

                    pelicula.appendChild(div);
                    div.appendChild(div2);
                    div2.appendChild(div3);
                    div2.appendChild(div5);
                    div3.appendChild(div4);
                    
                    div3.appendChild(type);
                    div3.appendChild(title);
                    div3.appendChild(anio);
                    div3.appendChild(sipnosis);
                    div3.appendChild(link);


                }
            }
        })
}


function onePelicula(){
    
    var txtpeli = document.getElementById("txtpeli").value;
    var cmbUbibication = document.getElementById("cmbUbibication").value;

    var url = "";

    if (txtpeli != null && cmbUbibication != null) {

        var validaUbicacion = cmbUbibication == "Mostrar Todos" ? "" : cmbUbibication;

        url = "https://movie.azurewebsites.net/api/cartelera?title=" + txtpeli + "&ubication=" + validaUbicacion;

    } else {
        url = "https://movie.azurewebsites.net/api/cartelera?title=&ubication=";
    }

    fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            var pelicula = document.getElementById("Pelicula");
            pelicula.innerHTML = "";
            if (data.length > 0) {
                for(var i = 0; i < data.length; i++){
                    
                    var div = document.createElement("div");
                    div.className = "col-md-6";

                    var div2 = document.createElement("div");
                    div2.className = "row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative";

                    var div3 = document.createElement("div");
                    div3.className = "col p-4 d-flex flex-column position-static";

                    var div4 = document.createElement("div");
                    div4.className = "mb-1 text-muted";
                    div4.innerHTML = data[i].Ubication;

                    var div5 = document.createElement("div");
                    div5.className = "col-auto d-none d-lg-block";
                    div5.innerHTML = "<img src=" + data[i].Poster + " width='200' height='250'>"

                    var type = document.createElement("strong");
                    type.className = "d-inline-block mb-2 text-primary";
                    type.innerHTML = data[i].Type;

                    var title = document.createElement("h3");
                    title.className = "mb-0";
                    title.innerHTML = data[i].Title;

                    var anio = document.createElement("div");
                    anio.className = "mb-1 text-muted";
                    anio.innerHTML = data[i].Year;

                    function truncateTextByWords(text, numWords) {
                        // Dividir el texto en palabras
                        var words = text.split(" ");
                        
                        // Verificar si el texto ya es más corto que el límite de palabras
                        if (words.length <= numWords) {
                          return text;
                        }
                      
                        // Unir las primeras numWords palabras y agregar tres puntos (...) al final
                        var truncatedText = words.slice(0, numWords).join(" ") + "...";
                      
                        return truncatedText;
                      }

                    var sipnosis = document.createElement("p");
                    sipnosis.className = "card-text mb-auto";
                    sipnosis.innerHTML = data[i].description;

                    var maxLengthWords = 6;
                    sipnosis.innerHTML = truncateTextByWords(data[i].description, maxLengthWords);

                    var link = document.createElement("a");
                    link.href = "./views/prueba.html?title=" + data[i].Title + "&ubication=" + data[i].Ubication;
                    link.className = "stretched-link";
                    link.innerHTML = "Ver más";

                    pelicula.appendChild(div);
                    div.appendChild(div2);
                    div2.appendChild(div3);
                    div2.appendChild(div5);
                    div3.appendChild(div4);
                    
                    div3.appendChild(type);
                    div3.appendChild(title);
                    div3.appendChild(anio);
                    div3.appendChild(sipnosis);
                    div3.appendChild(link);


                }
            }
        })
        realizarBusqueda();
}

function realizarBusqueda() {

    document.getElementById('txtpeli').value = '';
    document.getElementById('cmbUbibication').value = 'Mostrar Todos';
    
}



