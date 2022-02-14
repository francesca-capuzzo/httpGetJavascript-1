    // const xhttp = new XMLHttpRequest();

    // httpRequest.onreadystatechange = gestisciRisposteDelServer;

    // httpRequest.open('GET', 'test.html');

    // httpRequest.send();


    // function gestisciRisposteDelServer() {
    //     console.log("ready state", httpRequest.readyState);
    //     console.log("status", httpRequest.status );
    //     console.log("response", httpRequest.responseText);
    //     if (httpRequest.readyState === 4 && httpRequest.status === 200) {
    //        const arrayOfUsers = JSON.parse(httpRequest.responseText);
    //        console.log(arrayOfUsers);;
    //    }
    // }
 

    // fetch("./assets/data.json")
    // .then(manageResponse)
    // .then(onDataReady)
    // .catch(onError);

    // function manageResponse(response) {
    //     return response.json();
    // }

    // function onDataReady(data) {
    //     for (const user of data) {
    //         console.log("nome: ", user.username);
    //     }
    // }

    // function onError(error) {
    //    console.log(error);
    // }


    // fetch("./assets/books.json")
    // .then(manageResponse)
    // .then(onDataReady)
    // .catch(onError);

    // function manageResponse(response) {
    //     return response.json();
    // }

    
                       
   
    // function onDataReady(books) {
    //     let par = document.getElementById("book-list");
    //     for (const book of books) {
    //         var li = document.createElement('li');
    //         li.appendChild(document.createTextNode("TITOLO\n"+ book.titolo +"\nGENERE "+ book.genere + "\nANNO " + book.anno));
    //         par.appendChild(li);
    //     }
    // }

    // function onError(error) {
    //    console.log(error);
    // }




    fetch("./assets/books.json")
    .then(manageResponse)
    .then(onDataReady)
    .catch(onError);

    function manageResponse(response) {
        return response.json();
    }

    
                       
   
    function onDataReady(books) {
        let par = document.getElementById("book-list");
        for (const book of books) {
            var li = document.createElement('li');
            li.className = "liStyle";
            let ul2 = document.createElement("ul")
            let li2 = document.createElement("li");
            let li3 = document.createElement("li");
            li.appendChild(document.createTextNode(book.titolo));
            li2.appendChild(document.createTextNode("GENERE: " + book.genere));
            li3.appendChild(document.createTextNode("ANNO: " + book.anno));
        
            par.appendChild(li);
            li.appendChild(ul2);
            ul2.appendChild(li2);
            ul2.appendChild(li3);
        }
    }

    function onError(error) {
       console.log(error);
    }


