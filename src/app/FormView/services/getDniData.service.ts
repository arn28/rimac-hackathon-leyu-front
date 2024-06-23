import axios from "axios"

export const getDniData = async (dni:string, callback:( nombres:string, primerApl:string, segundoApl:string)=>void) => {
    const { data } = await axios({
        method: 'GET',
        url: `https://apiperu.dev/api/dni/${dni}?api_token=95437a47b67b837eb2cebb03d4ab2edd37cc27ff88815c11d258ed360a355d11`,
    }) as unknown as {data:{data:{nombres:string, apellido_paterno:string, apellido_materno:string}}}


    callback(data.data.nombres, data.data.apellido_paterno, data.data.apellido_materno)
}