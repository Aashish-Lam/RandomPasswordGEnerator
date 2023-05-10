const characters =["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
 let inp1= document.getElementById('input1');
 let inp2= document.getElementById('input2');

 function generate(){
   if(inp1.textContent.length===0 && inp2.textContent.length===0 )
   {
   for(i=0; i<=15; i++)
   {
      let temp = (Math.floor(Math.random() *characters.length));
      let temp2 = (Math.floor(Math.random() *characters.length));
      inp1.textContent = inp1.textContent+ characters[temp]
      inp2.textContent = inp2.textContent +characters[temp2]
   }
}
   else{
   eraseall();
}
   function eraseall(){
   inp1.textContent=[]
   inp2.textContent=[]
   generate()
}
 }
