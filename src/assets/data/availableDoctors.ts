import { TypesOfSpeciality } from "../../enums/NefrologiaYDialisisSas";
import { DoctorInfo } from "../../types/BookingPage";
import DoctorCoronado from '../staff/drCoronado.png'
import DoctorHernandez from '../staff/drHernandez.jpeg'

export const availableDoctors: DoctorInfo[] = [
    {
      id: "73079536",
      firstName: "Jorge",
      secondName: "Antonio",
      firstLastName: "Coronado",
      secondLastName: "Daza",
      specialist: TypesOfSpeciality.Nephrologist,
      localImage: DoctorCoronado
    },
    {
      id: "987654321",
      firstName: "Andres",
      firstLastName: "Hernandez",
      secondLastName: "Coronado",
      specialist: TypesOfSpeciality.Nephrologist,
      localImage: DoctorHernandez
    },
  ]