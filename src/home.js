function createHomePage() {
    const container = document.createElement('div')
    container.classList.add('container')

    const zhizhacard = document.createElement('div')

    const zhizhaheader = document.createElement('div')
    const zhizhadescription =  document.createElement('div')
    zhizhacard.classList.add('container-item')
    zhizhaheader.classList.add('container-item-header')
    zhizhaheader.textContent = 'About us'
    zhizhadescription.classList.add('container-item-description')
    zhizhadescription.textContent = ' Zhizhabar offers you gourmet dishes. Different types of Shaverma, bээээээrgers, chocovate bars with Coca-cova. Once you try, you will come back again'
    zhizhacard.append(zhizhaheader, zhizhadescription)


    const schedulecard = document.createElement('div')
    const scheduleheader = document.createElement('div')
    const scheduledescription =  document.createElement('div')
    const days = document.createElement('div')
    const hours = document.createElement('div')
    schedulecard.classList.add('container-item')
    scheduleheader.classList.add('container-item-header')
    scheduleheader.textContent = 'Schedule'
    days.textContent = 'Monday:\ Tuesday:\ Wednesday:\ Thurday:\ Friday:\ Saturday:\ Sunday:\ '
    hours.textContent = '10:00 - 23:00\ 10:00 - 23:00\ 10:00 - 23:00\ 10:00 - 23:00\ 10:00 - 00:00\ 09:00 - 00:00\ 09:00 - 00:00\ '
    scheduledescription.classList.add('table', 'container-item-description')
    scheduledescription.append(days, hours)
    schedulecard.append(scheduleheader, scheduledescription)






    const adresscard = document.createElement('div')
    const adressheader = document.createElement('div')
    const adressdescription =  document.createElement('div')
    adresscard.classList.add('container-item', 'about')
    adressheader.classList.add('container-item-header')
    adressheader.textContent = 'Adress'
    adressdescription.classList.add('container-item-description')
    adressdescription.textContent = 'St. Petersburg, Pushkin street, Kolotushkin house, apartment 15'
    adresscard.append(adressheader, adressdescription)


    container.append(zhizhacard, schedulecard, adresscard)
    return container
}

export default createHomePage