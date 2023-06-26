$(document).ready(function () {
    const url = "https://api.dictionaryapi.dev/api/v2/entries/en/";
    const result = document.getElementById("resultId");
    const sound = document.getElementById("sound");
    const btn = document.getElementById("searchBtn");

    btn.addEventListener("click",()=>{
        let inpword = document.getElementById("inputWord").value;
        console.log(inpword);

        fetch(`${url}${inpword}`)
        .then((response)=> response.json())
        .then((data)=> {
            console.log(data[0]);
            result.innerHTML =`
            <div class="word">
            <h3>${inpword}</h3>
            <button >
                <i class="fas fa-volume-up"></i>
            </button>
        </div>

        <div class="details">
            <p>${data[0].meanings[0].partOfSpeech}</p>
            <p>/${data[0].phonetics[2].text}/</p>
        </div>

        <p class="word-meaning">
            ${data[0].meanings[0].definitions[0].definition}
        </p>

        <p class="word-example">
            test The example ....
        </p>

            `;
        });
    })
});