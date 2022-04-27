const allBeers = function (inner, id){
    return `
        <section id="${id}">${inner}</section>
    `
}

const beerCardComponent = function (name, company, type){
    return`
        <div class="card">
            <div class="beer-name">${name}</div>
            <div class="beer-company">${company}</div>
            <div class="beer-type">${type}</div>
        </div>
    `
}

const beerTitleComponent = `
    <h1>Beers</h1>
`;

const loadEvent = function (){
    const rootElement = document.getElementById("root");
    console.log(rootElement);
    rootElement.insertAdjacentHTML("beforeend", beerTitleComponent)
    //pozicio a beforeend

    console.log(beers.cards);
    console.log(beers.logo);

    for (const beer of beers.cards) {
        console.log(beer);
        //console.log(beer.cads[0].title);
        rootElement.insertAdjacentHTML("beforeend", beerCardComponent(beer.title, beer.sub, beer.text) )
    }
}
//ezzel a ciklussal vegiglepkedek egy tomb elemen, ennek a tombnek az eleresi utvonala a beers nevu valtozo cards kulcsan levo tomb, es ezt a folyamatot elnevezem, ez az elnevezes interator, kesobb erre hivatkozom

window.addEventListener("load", loadEvent)

console.log(window);