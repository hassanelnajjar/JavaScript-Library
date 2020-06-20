imagesrc = "./side.png"
let books = [
    {
       title: "The Association of Small Bombs",
       author: "Karan Mahajan",
       image: "./images/The Association of Small Bombs.jpg"
    },
    {
        title: "The North Water",
        author: "Ian McGuire",
        image: "./images/The North Water.jpg"
    
    },
    {
        title: "The Underground Railroad",
        author: "Colson Whitehead",
        image: "./images/3.jpg"
    
    },   {
        title: "The Vegetarian",
        author: "Han Kang",
        image: "./images/4.jpg"
    
    },   {
        title: "War and Turpentine",
        author: "Stefan Hertmans",
        image: "./images/5.jpg"
    
    },   {
        title: "1984",
        author: "George Orwell",
        image: "./images/6.jpg"
    
    },   {
        title: "In the Darkroom",
        author: "Susan Faludi",
        image: "./images/7.jpg"
    
    },   
    {
        title: "Homegoing",
        author: "Yaa Gyasi",
        image: "./images/8.jpg"
    
    },   {
        title: "Guapa: A Novel",
        author: "Saleem Haddad",
        image: "./images/9.jpg"
    
    },   {
        title: "Sweetbitter ",
        author: "Stephanie Danler",
        image: "./images/10.jpg"
    
    },   
 ]

shelf = {
    maxBook : 5
}

BooksTemp = books;
addShelves()
diplayBooks(BooksTemp)


function addShelves(){
    for (a in [0,1,2]){
        var div = document.createElement('div');
        div.classList.add('shelf')
        document.getElementById("container").appendChild(div)
    }
}





function diplayBooks(BooksTemp){

    for (div of document.querySelectorAll("div.shelf")){
    
        if (BooksTemp.length >= shelf.maxBook){
            div.setAttribute("Full","true")
        }else{
            div.setAttribute("Full","false")
        }
        addBooks(BooksTemp.splice(0,shelf.maxBook),div)
        
    }
       
    }




function addBooks(books,parentdiv){
    books.forEach(book =>{
        var div = document.createElement('div');
        div.setAttribute('class', "book");
        div.style.width = 100/shelf.maxBook + "%"
        createdivsinsideBook(book,div)
        parentdiv.appendChild(div)
    
     })
}



 function createdivsinsideBook(book,parentdiv){
    Object.keys(book).map((key,index) =>{
        insidediv = document.createElement('div');
        insidediv.textContent = key != "image"? Object.values(book)[index]:""; 
        insidediv.setAttribute('class', key);
        createimgtag(key,Object.values(book)[index],insidediv);
        parentdiv.appendChild(insidediv)
    })

}

function createimgtag(key,att,parentdiv){
if(key=="image"){
    img = document.createElement('img');
    img.setAttribute("src",att);
    parentdiv.appendChild(img);
}
}


function addBook(){

    newbook = 
[{
    title: document.getElementById("Title").value,
    author: document.getElementById("Author").value,
    image: document.getElementById("Image").value,
 }]

 Object.values(newbook[0]).every(comp => comp!="" && comp!= undefined)?
    (function(){
        addBooks(newbook,document.querySelectorAll("div[Full=false]")[0]);

        for (input of document.querySelectorAll("input")){
            input.value = ""
        }

    })():alert("please Complete all Entires")
}

