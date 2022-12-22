/**
 * Types of appointments. This way we can notify Saludtools where is this user comming from.
 * Maybe in the future gold premium?
 */
export enum NefrologiaYDialisisAppointmentTypes  {
    //! It might dissapear, leave it for the moment here.
    FirstTime = 'Cita de primera vez',
    FirstTimeOnline = 'Primera vez',
    Control = 'Cita de control',
    ControlOnline = 'Cita de control - Online',
    Generic = 'Cita general',
    GenericOnline = 'Cita general - Online',
    //!------------------------------------
    SubscriptionUser = 'Usuario de suscripción'
}

/**
 * Type of specialities
 */
export enum  TypesOfSpeciality {
    Nephrologist = 'Nephrologist',
    General = 'General',
    Nutritionist = 'Nutritionist' 
}

/**
 * Type of subscriptions
 */
export enum TypeOfSubscriptions {
    OneYear = 'OneYear',
    SixMonths = 'SixMonths' 
}

/**
 * Ids for My information form. Useful also to render correct translations.
 */
export enum MyInformationForm {
    DocumentType = 'DocumentType',
    DocumentNumber = 'DocumentNumber',
    FirstName = 'FirstName',
    SecondName = 'SecondName',
    LastName = 'LastName',
    SecondLastName = 'SecondLastName',
    Gender = 'Gender',
    BirthDate = 'BirthDate',
    Email = 'Email',
    CountryCode = 'CountryCode',
    MobilePhone = 'MobilePhone',
    FullAddress = 'FullAddress'

}