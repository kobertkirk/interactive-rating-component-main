const button = document.querySelector("button");
const ratings = document.querySelector(".rating");
const card1 = document.querySelector(".card1");
const card2 = document.querySelector(".card2");
const choice = document.querySelector(".choice")
let rating = 0;

const handleClick = (event) => {
    event.preventDefault();
    var rated = event.target;
    rating = rated.textContent;
    rated.style.backgroundColor = "hsl(25, 97%, 53%)";
    rated.style.color = "hsl(0, 0%, 100%)";
    setDefault(event);
};

const setDefault = (event) => {
    const parent = event.target.parentElement;
    Array.from(parent.children).forEach((child) =>{
        if(child.textContent !== rating){
            child.style.backgroundColor = "hsl(213, 19%, 23%, 0.88)";
            child.style.color = "hsl(216, 12%, 54%)";
        }
    });
};

const handleSubmit = (event)=> {
    console.log(rating)
    //if(rating === 0) return;
    card1.classList.add("hidden");
    card2.classList.remove("hidden");
    choice.innerHTML = `You selected ${rating} out of 5`;
};



 Array.from(document.querySelectorAll(".rating")).forEach((rate)=>{
     rate.addEventListener("click", handleClick);
 });



button.addEventListener("click", handleSubmit);

console.log(Array.from(document.querySelectorAll(".rating")))

