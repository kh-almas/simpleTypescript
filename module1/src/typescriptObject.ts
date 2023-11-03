const user :{
    firstName: string;
    middleName?: string; // optional field
    lastName: string;
    phone: number;
    company: 'TiggzyIT'; // can not assign any other value
    readonly position: string;

} = {
    firstName: 'kh',
    middleName: '',
    lastName: 'Almas',
    phone: 123456789,
    company: 'TiggzyIT',
    position: 'ReactJS Developer'
}

user.phone = 987654321;
// user.position = '' // can not set value in readonly