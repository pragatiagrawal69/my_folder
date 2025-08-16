const input= document.querySelector('input')

let previousValue=''
let firstThreeNumber=''

input.addEventListener('input',(e)=>{
    const inputValue = e.target.value


    if(/\d+$/g.test(inputValue)){
    input.value= inputValue
} else {
    input.value = inputValue.substring(0, inputValue.length -1)
}

    if(inputValue.length===4 && previousValue.length < inputValue.length){
        firstThreeNumber = inputValue.substring(0,3)
        input.value = `+(${inputValue.substring(0,3)})-${inputValue[inputValue.length-1]}`
    } else if (inputValue.length === 7 && previousValue.length > inputValue.length){
        input.value= firstThreeNumber
    }

    previousValue=inputValue
})