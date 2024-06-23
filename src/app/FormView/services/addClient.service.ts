import axios from 'axios';

interface Client{
    email: string
    dni: string
    telf: string
    nombres: string
    primerApl: string
    segundoApl: string
    state: string
    city: string
}

export const addClient = async ({email, dni, telf, nombres, primerApl, segundoApl, state, city}:Client) => {
    console.log({email, dni, telf, nombres, primerApl, segundoApl, state, city})
    // todo: pasar la url a .env

    axios({
        method: 'post',
        url: 'https://cpw9eaw6zg.execute-api.us-west-2.amazonaws.com/dev/client',
        headers: {
            'Content-Type': 'application/json',
        },
        data:{    
            "email":email,
            "dni":dni,
            "telf":telf,
            "nombres":nombres,
            "primerApl":primerApl,
            "segundoApl":segundoApl,
            "state":state,
            "city":city
        }
    })
}