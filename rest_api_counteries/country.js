const countryName = new URLSearchParams(location.search).get('name')
// const countriesContainer = document.querySelector('.countries-container')
const 
fetch(`https://restcountries.com/v3.1/name/${countryName}?fullText=true`)
.then((res)=>res.json())
.then((data)=>{
    data.forEach((country)=>{
console.log(country);
const countryCard = document.createElement('a')
            countryCard.classList.add('country')
            countryCard.href = `/country.html?name=${country.name.common}`
countryCard.innerHTML=

`<img src="${country.flags.svg}" alt="flag">
            <div class="details-txt-container">
                <h1 class="card-title">${country.name.common}</h1>
                <div class="details-txt">
                    <p><b>Native</b>: </b>${country.native}</p>
                    <p><b>Population: </b>${country.population}</p>
                    <p><b>Region: </b>${country.region}</p>
                    <p><b>Capital: </b>${country.capital}</p>
                    <p><b>Top Level Domain: </b>Delhi</p>
                    <p><b>Currencies: </b>${country.currencies}</p>
                    <p><b>Languages: </b>${country.languages}</p>
                </div>

                <div class="border-countries">
                    <p><b>Border Countries</b>
                        &nbsp;&nbsp;<a href="">France</a>
                        <a href="">Germany</a>
                        
                    
                    </p>
                    
                </div>`
countriesContainer.append(countryCard)

    })

})
