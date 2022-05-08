import Cova from './cova.jpg'
import Stas from './staaaaaas.jpg'
import Chicken from './chicken.jpg'
import Svin from './svin.jpg'




function createMenuPage() {
    const container = document.createElement('div')
    container.classList.add('container')
    let dash1 = createMenuItem('Жабка Эпоу', 'Кока-кова: без сахара 0.5л\n Шоковадка: RitterSport белый шоколад с орехами', Cova, 200) 
    let dash2 = createMenuItem('Бэээргер Стээээс', 'Булочка: 2шт.\n Котлета говяжья: 3шт.\n Салат, помидор\n Соус барбекю', Stas, 300)
    let dash3 = createMenuItem('Шаверма классическая', 'Курица гриль\n Огурцы, помидоры\n Картошка-фрик\n Лук маринованный\n Соус от шефа\n Лаваш', Chicken, 220)
    let dash4 = createMenuItem('Шаверма классическая', 'Свинина гриль\n Огурцы, помидоры\n Картошка-фрик\n Лук маринованный\n Соус от шефа\n Лаваш', Svin, 300)
    container.append(dash1, dash2, dash3, dash4)
    return container
}

function createMenuItem(name, description, imgSrc, cost) {

    const dashCard = document.createElement('div')
    const dashHeader = document.createElement('div')
    const dashContent = document.createElement('div')
    const dashDescription =  document.createElement('div')
    const dashImg = document.createElement('img')
    const dashCost =  document.createElement('div')
    const dashDiv = document.createElement('div')
    const dashCostValue = document.createElement('div')

    dashCard.classList.add('container-item')

    dashHeader.classList.add('container-item-header')
    dashHeader.textContent = name
    
    
    dashContent.classList.add('menu-item-description')
    dashDescription.innerText = description
    
    dashImg.src = imgSrc
    dashImg.classList.add('menu-img')

    dashContent.append(dashDescription,dashImg)

    dashCost.classList.add('menu-item-footer')
    dashDiv.textContent = 'Cost:'
    dashCostValue.classList.add('cost-value')
    dashCostValue.textContent = `${cost}р`
    dashCost.append(dashDiv, dashCostValue)
    
    dashCard.append(dashHeader, dashContent, dashCost)
    return dashCard
}


export default createMenuPage