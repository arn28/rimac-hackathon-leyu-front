import { clientData } from "@/utils/clientData"


export const isDataComplete = () => {
    const {email, dni, telf, nombres, primerApl, segundoApl, countryState, city} = clientData
    
    console.log({email, dni, telf, nombres, primerApl, segundoApl, countryState, city})
    return email !== '' 
        && dni !== '' 
        && telf !== '' 
        && nombres !== '' 
        && primerApl !== '' 
        && segundoApl !== '' 
        && countryState !== '' 
        && city !== ''
}