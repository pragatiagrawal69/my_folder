const countriesContainer = document.querySelector('.countries-container')

fetch('https://restcountries.com/v3.1/all?fields=name,population,capital,region,flags,native,currencies,languages')
    .then((res) => res.json())
    .then((data) => {
        data.forEach((country) => {
            console.log(country);
            const countryCard = document.createElement('a')
            countryCard.classList.add('country')
            countryCard.href = `/country.html?name=${country.name.common}`

            countryCard.innerHTML = `
                    <img src="${country.flags.svg}" alt="">
                    <div class="card-content">
                    <h3 class="card-title">${country.name.common}</h3>
                    <p><b>Population: </b>${country.population}</p>
                    <p><b>Region: </b>${country.region}</p>
                    <p><b>Capital: </b>${country.capital}</p>
                    </div>`
            countriesContainer.append(countryCard)
        })
    })

