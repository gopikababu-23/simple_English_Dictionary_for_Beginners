const inputEl=document.getElementById("input")
const infotextEl= document.getElementById("info-text")
const meaningContainerEl=document.getElementById("meaning-container")
const titleEl= document.getElementById("title")
const meaningEl = document.getElementById("meaning")
const partsEl=document.getElementById("parts")
const exEl=document.getElementById("ex")

async function fetchAPI(word){
    try{
        infotextEl.style.display="block";
        meaningContainerEl.style.display = "none";
        infotextEl.innerText=`Searching the meaning of the word "${word}"`;
        const url=`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
        const result= await fetch(url).then((res)=>res.json());
        if(result.title){
            meaningContainerEl.style.display="block";
            infotextEl.style.display="none";
            titleEl.innerText= word;
            meaningEl.innerText="Not Available";
            partsEl.innerText="Not Availabe";
            exEl.innerText="Not Available";
        }
        else{
            infotextEl.style.display="none";
            meaningContainerEl.style.display = "block";
            titleEl.innerText= result[0].word;
            meaningEl.innerText=result[0].meanings[0].definitions[0].definition;
            partsEl.innerText=result[0].meanings[0].partOfSpeech;
            exEl.innerText=result[0].meanings[0].definitions[0].example;
        }
        
    }catch (error){
        console.log(error);
        infotextEl.innerText=`An error Happened, Try again later`;
    }
}


inputEl.addEventListener("keyup",(e)=>{
    if (e.target.value && e.key==="Enter"){
        fetchAPI(e.target.value)
    }
});