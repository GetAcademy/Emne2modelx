const model = {
    app: {
        currentPage: 'editContact',
    },
    viewState: {
        addContactPage: {
            name: '',
            phone: '',
            email: '',
        },
        editContactPage: {
            contactId: 1,
            name: '',
            phone: '',
            email: '',
        }
    },
    contacts: [
        { id: 1, name: 'Terje', phone: '1233', email: 't@mail.com' },
    ],
};

function startEditContact() {
    const id = 1;
    const currentContact = model.contacts.find(c => c.id == id);
    model.viewState.editContactPage.id = id;
    model.viewState.editContactPage.name = currentContact.name;
    model.viewState.editContactPage.phone = currentContact.phone;
    model.viewState.editContactPage.email = currentContact.email;
    model.app.currentPage = 'editContact';
    updateView();
}

function saveEditedContact(){
    const updatedContact = model.viewState.editContactPage;
    const originalContact = model.contacts.find(c => c.id == updatedContact.id);
    originalContact.name = updatedContact.name;
    originalContact.phone= updatedContact.phone;
    originalContact.email= updatedContact.email;
    model.app.currentPage = 'contacts';
    updateView();
}

function addContact() {
    const vs = model.viewState.addContact;
    const newContact = { id: id, name: vs.name, phone: vs.phone, email: vs.email };
    model.contacts.push(newContact);
    updateView();
}
/*
1. Hvilke data trenger vi i modellen for å tegne opp dette 
   skjermbildet?
2. Bruker inputs, tekstfelt, sortering => viewState/inputs
3. Hva kan ev. brukeren gjøre på denne siden - og hva trenger 
   vi i modellen for det? Eksempel: kjøpe et produkt på 
   komplett.no
*/