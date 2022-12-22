import { TypeOfSubscriptions } from "../../enums/NefrologiaYDialisisSas";
import { SaludToolsDocumentType, SaludToolsGender } from "../../enums/SaludTools";
import { NydUser } from "../../types/NefrologiaYDialisis";

const dummyNydUser: NydUser = {
    id: 'qwertz-qwertz-qwertz-qwertz',
    documentType: SaludToolsDocumentType.CedulaCiudadania,
    documentNumber: '1143354135',
    firstName: 'Jorge',
    secondName: 'Alejandro',
    lastName: 'Coronado',
    secondLastName: 'Cuesta',
    countryCode: 49,
    mobile: 15127156872,
    gender: SaludToolsGender.Male,
    email: 'tk.jalejandro@gmail.com',
    userEssentialInformation: true,
    birthDate: '1900-10-01',
    userVerified: true,
    habeasData: true,
    lastLogin: new Date(),
    createdBy: 'tk.jalejandro@gmail.com',
    lastmodifiedBy: 'tk.jalejandro@gmail.com',
    createdDateTime: new Date(),
    lastModifiedDateTime: new Date(),
    subscription: {
        id: 'asdfg-asdfg-asdfg-asdfg',
        createdBy: 'tk.jalejandro@gmail.com',
        lastmodifiedBy: 'tk.jalejandro@gmail.com',
        createdDateTime: new Date(),
        lastModifiedDateTime: new Date(),
        type: TypeOfSubscriptions.OneYear,
        appointments: 12
    },
    fullAddress: undefined
}

export default dummyNydUser