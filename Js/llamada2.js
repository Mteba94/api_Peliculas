
  onePelicula();

  var dataJson = {
    "imdbID": "",
    "Title": "",
    "Year": "",
    "Type": "",
    "Poster": "",
    "Estado": "",
    "description": "",
    "Ubication": ""
};

  function onePelicula(){

    document.addEventListener("DOMContentLoaded", function() {
        const url = new URL(window.location.href);
        const title = url.searchParams.get("title");
        const ubication = url.searchParams.get("ubication");
      
        //alert(title);
        //alert(ubication);
        if (title != null && ubication != null) {

            var url2 = "https://movie.azurewebsites.net/api/cartelera?title=" + title + "&ubication=" + ubication;
        //
        }else {
            var url2 = "https://movie.azurewebsites.net/api/cartelera?title=&ubication=";
        }
        
    
        fetch(url2)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            var pelicula = document.getElementById("Pelicula2");
            pelicula.innerHTML = "";
            if (data.length > 0) {
                for(var i = 0; i < data.length; i++){

                    var img = document.createElement("img");
                    img.className = "card-img-top img-fluid mx-auto d-block";
                    img.style.maxWidth  = "300px";
                    img.src = data[i].Poster;

                    var div = document.createElement("div");
                    div.className = "card-body";
                    div.innerHTML = data[i].Year

                    var h5 = document.createElement("h5");
                    h5.className = "card-title";
                    h5.innerHTML = data[i].Title;

                    var p = document.createElement("p");
                    p.className = "card-text mb-auto";
                    p.innerHTML = data[i].description;

                    var div2 = document.createElement("div");
                    div2.className = "mb-1 text-muted";
                    div2.innerHTML = data[i].Ubication

                    var strong = document.createElement("strong");
                    strong.className = "d-inline-block mb-2 text-primary";
                    strong.innerHTML = data[i].Type

                    pelicula.appendChild(img);
                    div.appendChild(h5);
                    pelicula.appendChild(div);
                    div.appendChild(p);
                    div.appendChild(div2);
                    div.appendChild(strong);
                    
                    var id = document.getElementById("id").value = data[i].imdbID;
                    var title = document.getElementById("title").value = data[i].Title;
                    var type = document.getElementById("tipo").value = data[i].Type;
                    var year = document.getElementById("year").value = data[i].Year;
                    var poster = document.getElementById("poster").value = data[i].Poster;
                    var ubication = document.getElementById("Ubibication").value = data[i].Ubication;
                    var description = document.getElementById("descripcion").value = data[i].description;

                    
                    dataJson.imdbID = id,
                    dataJson.Title = title,
                    dataJson.Year = year,
                    dataJson.Type = type,
                    dataJson.Poster = poster,
                    dataJson.Estado = 'True',
                    dataJson.description = description,
                    dataJson.Ubication = ubication                    

                    //putPelicula(dataJson)

                }
            }
        })
    
      });
    
}

/*
  function putPelicula() {
    
    var url = "https://movie.azurewebsites.net/api/cartelera?imdbID=" + dataJson.imdbID;

    console.log(JSON.stringify(dataJson));
    console.log(url);

    fetch(url, {
        method: 'PUT',
        body: JSON.stringify(dataJson),
        headers: {
            'Content-Type': 'application/json'
        }

    }).then(response => response.json())
        .then(data => {
            console.log(data);
        })
        .catch(error => console.log('ERROR', error));

  }
  */

  function putPelicula() {
    var url = "https://movie.azurewebsites.net/api/cartelera?imdbID=" + dataJson.imdbID;

    fetch(url, {
        method: 'PUT',
        body: JSON.stringify(dataJson),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Error en la solicitud PUT');
        }
        // Cerrar el modal
        var modal = new bootstrap.Modal(document.getElementById('modal_actualiza'));
        modal.hide();
        // Mostrar mensaje
        alert('Película actualizada exitosamente');
        // Recargar la página
        location.reload();
    })
    .catch(error => {
        console.log('ERROR', error);
    });

}

function deletePelicula() {
    var url = "https://movie.azurewebsites.net/api/cartelera?imdbID=" + dataJson.imdbID;

    fetch(url, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Error en la solicitud DELETE');
        }
        // Cerrar el modal
        var modalEliminar = new bootstrap.Modal(document.getElementById('modal_eliminar'));
        modalEliminar.hide();
        // Mostrar mensaje
        alert('Película eliminada exitosamente');
        // Recargar la página
        location.reload();
    })
    .catch(error => {
        console.log('ERROR', error);
    });
}


  