import { callbackify } from "util";

function FuncA()
{
  return new Promise((resolve, reject) => {
    // Llamamos a resolve(...) cuando lo que estabamos haciendo finaliza con éxito, y reject(...) cuando falla.
    // En este ejemplo, usamos setTimeout(...) para simular código asíncrono.
    // En la vida real, probablemente uses algo como XHR o una API HTML5.
    setTimeout(function(){
      resolve("¡Éxito!"); // ¡Todo salió bien!
    }, 2500);
  });
}

function FuncB()
{
  return new Promise<string>(async function (resolve) {
 /*    for (var i = 0; i < 90000; i++) {
        
     } */
     resolve("FuncB")
})
}

//Immediately invoked function expression
//https://en.wikipedia.org/wiki/Immediately_invoked_function_expression
(async () => {
    console.log("sync test")
    console.log("FuncA", await FuncA())
    console.log("FuncB", await FuncB())
})()




