let textbox = document.getElementById("textbox");
textbox.addEventListener("input", function() {
  var text = this.value;
  console.log(text)
 let char = text.length;
  document.getElementById("char").innerHTML = char;
   
  text=text.trim();
  let words = text.split("");
  let cleanList=words.filter(function(elment){
    return elment !="";
  })

   document.getElementById("word").innerHTML=cleanList.length;
});
