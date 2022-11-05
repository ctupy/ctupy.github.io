
function biggerText()
{
    alert("Hello, world!"); 
    document.getElementById("text").style.fontSize = "24pt";
}

function fancyShmancyText()
{
    let fancy = document.getElementById("fancy");
    let text = document.getElementById("text");

    if(fancy.checked)
    {
        alert("Oh! Fancy!"); 
        text.style.fontWeight = "bold";
        text.style.color = "blue";
        text.style.textDecoration = "underline";
    }
    else
    {
        alert("Boring!");
        text.style.fontWeight = "normal";
        text.style.color = "black";
        text.style.textDecoration = "none";
    }
}

function moo()
{
   document.getElementById("text").value = document.getElementById("text").value.toUpperCase();
   let text = document.getElementById("text").value;
   let splitting = text.split(".");
   text = splitting.join("-Moo.");

   document.getElementById("text").value = text;

}