import { Client } from "../services/addClient.service";

export const isDataComplete = ({email, dni, telf, nombres, primerApl, segundoApl, countryState, city}:Client) => {
    return email !== '' 
        && dni !== '' 
        && telf !== '' 
        && nombres !== '' 
        && primerApl !== '' 
        && segundoApl !== '' 
        && countryState !== '' 
        && city !== ''
}