const initialState = {
    contacts: {
        contactList: [],
        newContact: {
                nombre: '',
                apellidos: '',
                bio: '',
                genero: ''
            },
    },
    ui: {
            isContactFormHidden: true
        }
}
 
export default initialState;