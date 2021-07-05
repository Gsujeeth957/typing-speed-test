const setOfWords=[ "My name is Sujeeth and I am a model.",
"Hope you are having fun this is a simple game.",];
const msg = document.getElementById('msg');
const typeWords = document.getElementById('mywords'); 
const btn = document.getElementById('btn');
let startTime , endTime;

const playGame = () =>{
    let randomNumber = Math.floor(Math.random()*setOfWords.length);
    msg.innerText = setOfWords[randomNumber];
    let date =new Date();
    startTime = date.getTime();
    btn.innerText="Done";
}

const endPlay = () => {
    let date =new Date();
   let endTime = date.getTime();
    let totalTime = ((endTime - startTime)/ 1000);
    console.log('totalTime',totalTime);

    let totatStr = typeWords.value.trim();
    console.log('wiewey',totatStr);
    let wordCount = wordCounter(totatStr);
    console.log('wordcount',wordCount);
    
    let speed = Math.round((wordCount / totalTime) * 60);

    let finalMsg = "You typed total at " +speed+ " words per minutes ";

    console.log('word1',msg.innerText);
    console.log('word2',totatStr);
   
     finalMsg += compareWords(msg.innerText,totatStr);
   
    msg.innerText = finalMsg;
}

const wordCounter = (str) =>{
let response = str.split(" ").length;
console.log(response);
return response;
 }
 const compareWords = (str1, str2) => {
    let words1 = str1.split(" ");
    console.log('words11',words1);

    let cnt = 0;

  words1.map((eachWrd,i)=>{
      console.log(i);
      let words2= str2.split(" ");
      console.log('words2',words2);
      console.log('word2',words2[i]);
      if(eachWrd == words2[i]){
          cnt++;
      }
  }) 
    

    console.log('cnt',cnt)

    let errorWords = ( words1.length - cnt );
    console.log(errorWords);
    return ( cnt + " correct out of " +  words1.length + 
    "words and  and the total number of error are "+ errorWords + "");

}

btn.addEventListener('click', function(){
    if(this.innerText =='Start'){
        typeWords.disabled = false;
        playGame();
    }else if(this.innerText == "Done"){
        typeWords.disabled = true;
        btn.innerText ="Start";
        endPlay();
    }
})