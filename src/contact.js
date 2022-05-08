function createContactPage() {
    const container = document.createElement('div')
    container.classList.add('container')
    const contactcard = document.createElement('div')
    const contactheader = document.createElement('div')
    const contactdescription =  document.createElement('div')
    const contactTitle = document.createElement('div')
    const contactValue = document.createElement('div')

    contactcard.classList.add('container-item', 'contact-card')
    contactheader.classList.add('container-item-header')
    contactheader.textContent = 'Contacts'
    contactTitle.innerText = 'E-mail:\n Phone:\n Chief Editor:\n'
    contactValue.innerText = 'jijarare@gmail.com\n +123456\n ek3waka\n'
    contactdescription.classList.add('table', 'container-item-description')
    contactdescription.append(contactTitle, contactValue)
    contactcard.append(contactheader, contactdescription)

    container.append(contactcard)
    return container
}


export default createContactPage