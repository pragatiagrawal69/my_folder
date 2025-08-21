const button= document.querySelector('button')
const img= document.querySelector('img')
const h1= document.querySelector('h1')
const span= document.querySelector('.author')

function getMeme() {
    fetch('https://meme-api.com/gimme/wholesomememes')
.then((res)=> res.json())
.then((data)=>{
   const {author, title,url} =data
   span.innerText = `Meme by: ${author}`
   h1.innerText = title
   img.src = url
})
}
getMeme()
button.addEventListener('click',()=>{
    getMeme()
})