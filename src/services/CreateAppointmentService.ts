import { startOfHour } from 'date-fns';
import Appointment from '../models/Appointment';
import AppointmentsRepository from '../repositories/AppointmentsRepository';

/**
 * Serviços têm como responsabilidade abstrair as regras do negócio
 * Utilizar apenas UM serviço por método
 */

/**
 * [X] Recebimento das informações
 * [X] Tratativa de Erros e Exceções
 * [X] Acesso ao Repositório
 */

interface Request {
  provider: string;
  date: Date;
}

class CreateAppointmentService {
  /**
   * Dependency Inversion (SOLID)
   */
  private appointmentsRepository: AppointmentsRepository;

  constructor(appointmentsRepository: AppointmentsRepository) {
    this.appointmentsRepository = appointmentsRepository;
  }

  public execute({ provider, date }: Request): Appointment {
    const appointmentDate = startOfHour(date);

    const findAppointmentInSameDate = this.appointmentsRepository.findByDate(
      appointmentDate,
    );

    if (findAppointmentInSameDate) {
      throw Error('This appointment is already booked');
    }

    const appointment = this.appointmentsRepository.create({
      provider,
      date: appointmentDate,
    });

    return appointment;
  }
}

export default CreateAppointmentService;
