
    fetch("./assets/books.json")
    .then(manageResponse)
    .then(onDataReady2)
    .catch(onError);

    function manageResponse(response) {
        return response.json();
    }

    
                       
   
    // function onDataReady(books) {
    //     let par = document.getElementById("book-list");
    //     for (const book of books) {
    //         var li = document.createElement('li');
    //         li.className = "liStyle";
    //         let ul2 = document.createElement("ul")
    //         let li2 = document.createElement("li");
    //         let li3 = document.createElement("li");
    //         li.appendChild(document.createTextNode(book.titolo));
    //         li2.appendChild(document.createTextNode("GENERE: " + book.genere));
    //         li3.appendChild(document.createTextNode("ANNO: " + book.anno));
        
    //         par.appendChild(li);
    //         li.appendChild(ul2);
    //         ul2.appendChild(li2);
    //         ul2.appendChild(li3);
    //     }
    // }

    // function onError(error) {
    //    console.log(error);
    // }

//3 MODI PER METTERE TESTO NELL'HTML
// li.textContent() 
// li.innerHTML()
// li.createTextNode()

function addTextToHtmlElement(htmlElement, text, isNewLine = false, className) {
    const span = document.createElement('span');
    span.className += className + " "; // ---->+= aggiunge alla classe una nuova classe + uno spazio così che posso dare più classi allo stesso oggetto
    const textNode = document.createTextNode(text);
    span.appendChild(textNode)
    htmlElement.appendChild(span);
    if (isNewLine) {
        const newLine = document.createElement('br');
        htmlElement.appendChild(newLine)
    }
}

function onDataReady2(data) {
    const list = document.getElementById("book-list");
    for (const book of data) {
        const listElement = document.createElement("li");
        listElement.className += "book-card" + " ";
        addTextToHtmlElement(listElement, book.titolo, true, "bold large-font");
        addTextToHtmlElement(listElement, book.genere, true, "bold");
        addTextToHtmlElement(listElement, book.anno);
        list.appendChild(listElement);
    }
}

function onError(error) {
    console.log(error);
}