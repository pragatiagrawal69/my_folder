const input= document.querySelector('input')
const lowerCaseOutput = document.getElementById('lowercase')
const upperCaseOutput = document.getElementById('uppercase')
const camelCaseOutput = document.getElementById('camelcase')
const pascalCaseOutput = document.getElementById('pascalcase')
const snakeCaseOutput = document.getElementById('snakecase')
const kebabCaseOutput = document.getElementById('kebabcase')
const trimOutput = document.getElementById('trim')


function toCamelCase(str) {
    return str
        .toLowerCase()                     // pehle sab lowercase
        .split(' ')                         // space ke hisaab se tod do
        .map((word, index) => {
            if (index === 0) return word;   // pehla word jaisa ka waisa
            return word.charAt(0).toUpperCase() + word.slice(1); // baaki words ka first letter uppercase
        })
        .join('');
}


function toPascalCase(str) {
    return str
        .toLowerCase() // sab lowercase me
        .split(' ')    // space ke hisaab se tod do
        .map(word => word.charAt(0).toUpperCase() + word.slice(1)) // sabka first letter capital
        .join('');
}

function toSnakeCase(str) {
    return str
        .trim()                   // starting/ending spaces hatao
        .toLowerCase()            // sab lowercase me
        .split(/\s+/)             // multiple spaces ko handle karke tod do
        .join('_');               // underscore se jodo
}

function toKebabCase(str) {
    return str
        .trim()                   // extra spaces hatao
        .toLowerCase()            // sab lowercase
        .split(/\s+/)             // multiple spaces ko handle karke tod do
        .join('-');               // hyphen se jodo
}

function toTrimmed(str) {
    return str.trim();
}


input.addEventListener('input',()=>{
lowerCaseOutput.innerText= input.value.toLowerCase()
upperCaseOutput.innerText= input.value.toUpperCase()
camelCaseOutput.innerText = toCamelCase(input.value)
pascalCaseOutput.innerText = toPascalCase(input.value)
snakeCaseOutput.innerText = toSnakeCase(input.value)
kebabCaseOutput.innerText = toKebabCase(input.value)
trimOutput.innerText = toTrimmed(input.value)
})
