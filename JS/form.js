var form = document.getElementById('newsForm')
var num = localStorage.length;

form.addEventListener('submit', function (event) {
    
    event.preventDefault()
    event.stopImmediatePropagation()

    var userinput = document.getElementById('newsarea').value; //textarea


    console.log(userinput);
    localStorage.setItem(num, userinput);
    num++;

    const node = document.createElement("li");

    const textnode = document.createTextNode(userinput);
    node.appendChild(textnode);
    document.getElementById("newsList").appendChild(node); //list
    form.reset();

})
//*localStorage.clear();


for (var check = 0; check < localStorage.length; check++) {
    console.log(check);
    let storedvalue = localStorage.getItem(check);
    const node = document.createElement("li");

    const textnode = document.createTextNode(storedvalue);
    node.appendChild(textnode);
    document.getElementById("newsList").appendChild(node);
}