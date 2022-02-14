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
 

    fetch("./assets/data.json")
    .then(manageResponse)
    .then(onDataReady)
    .catch(onError);

    function manageResponse(response) {
        return response.json();
    }

    function onDataReady(data) {
        for (const user of data) {
            console.log("nome: ", user.username);
        }
    }

    function onError(error) {
       console.log(error);
    }