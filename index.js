function shout(string){
    return string.toUpperCase();

}

function whisper(string){
    return string.toLowerCase();
}

function logShout(){
    console.log('HELLO');
}

function logWhisper(){
    console.log('hello')
}

 function sayHiToGrandma(string){ 
    
    if (string ===string.toUpperCase()){
        return "YES INDEED!"
    } else if (string === string.toLowerCase()){
        return "I can't hear you!"
    }  else if (string === "I love you, Grandma.")
        return "I love you, too." 
  
        
            
 
}

console.log(shout('hello'),whisper('HOW ARE YOU ?'),sayHiToGrandma("I love you, Grandma."));
 

