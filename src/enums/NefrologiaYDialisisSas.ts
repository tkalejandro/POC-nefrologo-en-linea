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
