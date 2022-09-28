const availableTimes = [{

    shop:"Eskilstuna",
    freeSlots:[
        new Date(2022,10, 3, 09, 00),
        new Date(2022,10, 3, 09, 30),
        new Date(2022,10, 5, 10, 00),
        new Date(2022,10, 6, 10, 30),
        new Date(2022,10, 7, 11, 00),
    ]

},

{

    shop:"Göteborg",
    freeSlots:[
        new Date(2022,10, 6, 9, 40),
        new Date(2022,2, 2, 11, 20),
    ]

}
function renderMunicipality() {

    let html= `<option value="">Välj kommun...</option>` 

    const selectedCounty = countyData.find(c=>c.countyCode == county.value)

    for(let m of selectedCounty.municipalities){
        const municipalityFullCode = selectedCounty.countyCode + m.code
        html += `<option value="${m.code}">${municipalityFullCode} ${m.name}</option>`
    }
         
    municipality.innerHTML = html
    municipality.classList.remove("hide")
}

]