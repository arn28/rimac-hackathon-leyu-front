import axios from 'axios';

interface Client{
    firstName: string;
    lastName: number;
    email: string;
}

export const addClient = async () => {
    console.log('addClient')
    // todo: pasar la url a .env

    //axios({
    //    method:'get',
    //    url:'https://5txl3p0ghf.execute-api.us-west-2.amazonaws.com/',
    //})

    axios({
        method: 'post',
        url: 'https://cpw9eaw6zg.execute-api.us-west-2.amazonaws.com/dev/addClient',
        headers: {
            'Content-Type': 'application/json',
        },
        data:{    
            "email":"prueba123@abcmail.com",
            "firstName":"Cliente",
            "lastName":"DePrueba"
        }
    })
}