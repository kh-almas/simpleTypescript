{
    const userInfo = {
        id: '',
        name: {
            firstName: '',
            lastName: ''
        },
        phone: '01600000000',
        address: {
            present: '',
            permanent: '',
        }
    }

    const {
        id,
        name: {firstName, lastName},
        phone:contact, //phone is rename by 'contact'. this is alias
        address: {present, permanent}
    } = userInfo;

    console.log(firstName);
    console.log(contact);
}