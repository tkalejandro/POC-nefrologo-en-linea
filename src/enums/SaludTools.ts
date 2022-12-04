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
    CedulaCiudadania = 1,
    CedulaDeExtranjeria = 2,
    CarneDiplomatico = 3,
    Passaporte = 4,
    RegistroCivil = 5,
    TarjetDeIdentidad = 6,
    AdultoSinIdentificar = 7,
    MenorSinIdentificar = 8,
    CertificadoDeNacidoVivo = 9,
    Salvoconducto = 10,
    PasaporteDeLaOnu = 11,
    NIT = 12,
    DocumentoNacionalDeIndentidad = 13,
    PermisoEspecialDePermanencia = 14,
    CedulaDeIdentidad = 15,
    RegistroGeral = 16,
    CedulaDeIdentidadCivil = 17,
    DocumentoExtranjero = 18,
    SinIdentificaion = 19,
    ClaveUnicaDelRegistroDePoblacion = 20,
    InsitutoNacionalElectoral = 21,
    PermisoDeProteccionTemporal = 22,
    RegistroNacionalDeContribuyentes = 23
}

/**
 * Type of Insurance
 */
export enum SaludToolsEPS {
    UnidadServicioMedicoYOdontologicoDeEmpresasPublicasDeMedellin = 1,
    FondoPasivoSocialFerrocarrilesNacionalesDeColombia = 2,
    Aliansalud_EPS = 3,
    SaludTotalEntidadPromotoraDeSaludDelRegimenContributivo = 4,
    MedimasEpsContributivo = 5,
    EPS_Sanitas = 6,
    Compensar = 7,
    ComfenalcoAntioquiaCajaDeCompensacionFamiliarComfenalcoAntioquia = 8,
    SuraCompaniaSuramericanaDeServiciosDeSalud = 9,
    ComfenalcoValle_EPS = 10,
    SaludCoop_EPS = 11,
    HumanaVivirArs = 12,
    ColpatriaSaludColpatriaSA = 13,
    CoomevaEPS_SA = 14,
    EPSFamisanar_LTDA = 15,
    ServicioOccidentalDeSaludSA_SOS = 16,
    CruzBlanca_EPS_Contributivo = 17,
    SolsaludEntidadPromotoraDeSaludDelRegimenContributivoYSubsidiadoSolSalud_EPS_SA = 18,
    SaludVida_EPS = 19,
    Nueva_EPS_Contributivo = 20

    /**
     * List continues until 121. Maybe to fetch this info.
     */
}

/**
 * EventType a.k.a what controller to communicate with. 
 */
export enum SaludToolsEventType {
    Patient = 'PATIENT',
    Appointment = 'APPOINTMENT',
    Medicine = 'MEDICINE'
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

/**
 * Modality of the service
 */
export enum SaludToolsModality {
    Conventional = "CONVENTIONAL",
    Telemedicine = "TELEMEDICINE",
    Domiciliary = "DOMICILIARY"
}

/**
 * State of the appointment
 */
export enum SaludToolsStateAppointment {
    Completed = "EXECUTE",
    Pending = "PENDING",
    InRoom = "IN_ROOM",
    OnGoing ="MEDICAL_CARE",
    NoShow = "NOT_PRESENTEE",
    Cancelado = "CANCELLED",
    WaitPayment = "WAIT_PAYMENT",
    InVirtualRoom = "IN_VIRTUAL_ROOM",
    CancelledByDoctor = "CANCELLED_BY_DOCTOR",
    Rescheduled = "RESCHEDULED",
    Incomplete = "INCOMPLETE"
}

/**
 * State of confirmation by the patient.
 */
export enum SaludToolsNotificationState {
    Attend = "ATTEND"
}

/**
 * Clinic where the appointment will take
 */
export enum SaludToolsClinic {
    NefrologiaYDialisisSas = 6038
}