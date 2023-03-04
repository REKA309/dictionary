function myFunction()
{
// this function retrieve meaning of word given by user from dictionary API 
   getValue(form1.inputvalue.value);
}
function getValue(ival)
{
    const word=form1.inputvalue.value;
    const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
    // make the API call using Fetch API
    fetch(url)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        //retrieving data from API        
        const word1=data[0].word;
        const part=data[0].meanings[0].partOfSpeech;
        const ndefinition=data[0].meanings[0].definitions[0].definition;
        console.log(ndefinition)
        //get HTML element by using its ID
        const result = document.getElementById("result");
        //write retrieved data from API in HTML element
        result.innerHTML=`Explanation for your search<br><br>Word&nbsp:&nbsp${word}<br>Part&nbspof&nbspSpeech:&nbsp${part}<br>
        Definition&nbsp:&nbsp${ndefinition}`;


    })
    .catch(error => {
        // if error occurs print not found msg in HTML element
        const result = document.getElementById("result");
        result.innerHTML=`Sorry!!!<br>No definition found for "${word}"<br>
        Give valid word to get definition`
    });
   
}



  
