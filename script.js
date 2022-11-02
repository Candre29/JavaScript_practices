class links{
    constructor(title, url, author){
        this.title = title;
        this.url = url;
        this.author = author;
    }
    describe(){
        return `${this.title} (${this.url} ). Author:${this.author} `;
    }
}

// functions
function show(arrayLinks){
    let message = "";
    for(let i=0; i<arrayLinks.length;i++){
        message += `\n${i+1} : ${arrayLinks[i].title} (${arrayLinks[i].url}). Author: ${arrayLinks[i].author}`;
    }
    return message;

}

// variables
let arrayLinks = [];
let userdecision = 5;
let indexErase;



while( userdecision != "0"){
    userdecision = prompt("Show the list of links\n\nChoose an option:\n 1 : Shows links\n 2 : Add a link\n 3 : Remove a link\n 0 : Quit ");
    
    switch(userdecision){
        case "1":
            alert(show(arrayLinks));
            break;

        case "2":
            titleAdd = prompt("Enter the title");
            urlAdd = prompt("Enter the URL");
            authorAdd = prompt("Enter the author");
            let newLink = new links(titleAdd,urlAdd,authorAdd);
            arrayLinks.push(newLink);
            break;

        case "3":
            if(arrayLinks.length === 0){
                alert("There is no link to remove");
            }
            else{
                indexErase = Number(prompt("Ingrese el indice para eliminar (n-1)"));
                if(indexErase < 0 || indexErase >= arrayLinks.length){
                    while(indexErase < 0 || indexErase >= arrayLinks.length){
                    indexErase= Number(prompt("That index does not extist, try again or quit (-1)"));
                    if (indexErase === -1) break;
                    }
            }
                if(indexErase != -1) arrayLinks.splice(indexErase,1);
            }
            break;

        case "0":
            break;
        default:
            alert("Incorrect output, try again");
            let userdecision = prompt("Show the list of links\n\nChoose an option:\n 1 : Shows links\n 2 : Add a link\n 3 : Remove a link\n 0 : Quit ");
    }
}