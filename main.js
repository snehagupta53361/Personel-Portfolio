
document.addEventListener("DOMContentLoaded",function(){

    //main content
    const skillsArray = [{"java.png": "Java"}, {"js.png": "Javascript"}, {"html.png": "Html"}, {"css.png": "Css"}, {"react.png" : "React"}, {"mysql.png" : "My Sql"}, {"bootstrap.png" : "Bootstrap"}];
let skillSection = document.querySelector(".skill-section");
skillsArray.forEach(skillObject => {
    let key = Object.keys(skillObject);
    let value = skillObject[key];
    skillSection.innerHTML += `
        <div class="skills" data-aos="flip-right">
        <img src="/images/${key}" alt="" class="skills-image">
        <p class="skill-name">${value}</p>
        </div>
       
    `
});
    const dynamicContent = document.getElementById("dynamic-text");
    console.log(dynamicContent);
    const phrases = ["Full Stack Developer...","Graphic Designer...","Front End Developer...","Web Developer...", "Java Developer..."];
    console.log(phrases.length);
    let phraseIndex=0;
    let letterIndex=0;
    let typingSpeed=150;
    let erasingSpeed=75;
//typing-function
    const printLetters = (phrase) => {
        if(letterIndex === phrase.length){
            clearLetters();
        }
        else{
            dynamicContent.innerHTML += phrase[letterIndex];
            letterIndex += 1;
            setTimeout(()=>{
                printLetters(phrase);
            }, typingSpeed);
        }

    }
//erasing-function
    const clearLetters = ()=>{
        if(letterIndex === -1){
            phraseIndex = (phraseIndex+1) % phrases.length;
            letterIndex = 0;
            printLetters(phrases[phraseIndex]);
        }
        else{
            let updatedPhrase = phrases[phraseIndex].slice(0, letterIndex);
            dynamicContent.innerHTML = updatedPhrase;
            letterIndex -= 1;
            setTimeout(clearLetters, erasingSpeed);
        }
    }
    printLetters(phrases[phraseIndex]);
    

    //sticky position of navbar
    const home = document.querySelector("#home");
    window.addEventListener("scroll", ()=>{
        let head = document.querySelector("#nav");
        let height = window.scrollY;
        if(height > (home.offsetHeight + home.offsetTop)){
            head.style.position = "sticky";

        }
        else{
            head.style.position = "revert";
            
        }
    });

})

