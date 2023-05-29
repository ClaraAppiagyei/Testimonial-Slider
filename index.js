const testimonials = [
    {
        name: "Ronica X",
        photoUrl: "images/user1.jpg",
        text: "It's the perfect solution for our business. I will recommend you to my colleagues. I will let my mum know about this, she could really make use of Coding! It's incredible."
    },
    {
        name: "Evey L",
        photoUrl: "images/user2.jpg",
        text: "It's all good. Coding is exactly what our business has been lacking. Thanks to Coding, we've just launched our 5th website! It's just amazing."
    },
    {
        name: "Mathias R",
        photoUrl: "images/user3.jpg",
        text: "After using Coding my business skyrocketed! Thank you for making it painless, pleasant and most of all hassle free! It really saves me time and effort. Coding is exactly what our business has been lacking."
    },
    {
        name: "Bethina D",
        photoUrl: "images/user4.jpg",
        text: "I'm good to go. Just what I was looking for. Coding is the real deal! I am really satisfied."
    },
    {
        name: "Tremain T",
        photoUrl: "images/user5.jpg",
        text: "I just can't get enough of Coding. I want to get a T-Shirt with Coding on it so I can show it off to everyone."
    },
    {
        name: "Yvonne U",
        photoUrl: "images/user6.jpg",
        text: "Coding is great. You guys rock! I will recommend you to my colleagues. Keep up the excellent work."
    },
];

const imgEl = document.querySelector("img")
const textEl = document.querySelector(".text")
const usernameEl = document.querySelector(".username")

let idx = 0;

updateTestimonials()

function updateTestimonials(){
    const {name, photoUrl, text} = 
    testimonials[idx];
    imgEl.src = photoUrl;
    textEl.innerText = text;
    usernameEl.innerText = name;
    idx++
    if(idx === testimonials.length){
        idx = 0;
    }
    setTimeout(()=>{
        updateTestimonials()
    }, 10000);
}