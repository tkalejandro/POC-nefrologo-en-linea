import { SaludToolsDocumentType, SaludToolsGender } from "../../enums/SaludTools";
import { Patient } from "../../types/SaludTools";

export const currentPatient : Patient = {
    firstName: 'Jorge',
    secondName: 'Alejandro',
    firstLastName: 'Coronado',
    secondLastName: 'Cuesta',
    birthDate: '1991-10-02',
    gender: SaludToolsGender.Male,
    documentType: SaludToolsDocumentType.CedulaCiudadania,
    documentNumber: '1728394682',
    phone:'5756550930',
    email: 'alejandro@gmail.com',
    eps: undefined,
    habeasData: true
}