import { isEqual } from 'date-fns';
import Appointment from '../models/Appointment';

/**
 * Persistência <-> Repository <-> Rota
 * Repositório: Aonde buscamos informações,find, create, etc.
 * Um repositório por Model.
 */

class AppointmentsRepository {
  private appointments: Appointment[];

  constructor() {
    this.appointments = [];
  }

  public create(provider: string, date: Date): Appointment {
    const appointment = new Appointment(provider, date);
    this.appointments.push(appointment);
    return appointment;
  }

  public findByDate(date: Date): Appointment | null {
    const findAppointment = this.appointments.find(appointment =>
      isEqual(date, appointment.date),
    );
    return findAppointment || null;
  }
}

export default AppointmentsRepository;
