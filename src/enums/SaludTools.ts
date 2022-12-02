/**
 * Gender code according SaludTools
 */
export enum SaludToolsGender {
    Male = 1,
    Female = 2,
    Other = 3
}

/**
 * Type of Ids according SaludTools. National ID, National ForeignId
 */
export enum SaludToolsDocumentType {
    Cedula = 1,
    CedulaExtranjeria = 2,
    Passport = 3,
}

/**
 * Type of Insurance
 */
export enum SaludToolsEPS {
    Prepagada = 1,
    Privada = 2
}

/**
 * EventType a.k.a what controller to communicate with. 
 */
export enum SaludToolsEventType {
    Patient = 'PATIENT',
    Appointment = 'APPOINTMENT',
    Medicine = 'Medicine'
}

/**
 * ActionType a.k.a CRUD method.
 */
export enum SaludToolsActionType {
    Create = 'CREATE',
    Read = 'READ',
    Update = 'UPDATE',
    Search = 'SEARCH',
    Delete = 'DELETE'
}