import { EntityRepository, Repository } from 'typeorm';
import Appointment from '../models/Appointment';

/**
 * Data Transfer Object
 */

/**
 * Persistência <-> Repository <-> Rota
 * Repositório: Aonde buscamos informações,find, create, etc.
 * Um repositório por Model.
 */
@EntityRepository(Appointment)
class AppointmentsRepository extends Repository<Appointment> {
  public async findByDate(date: Date): Promise<Appointment | null> {
    const findAppointment = await this.findOne({
      where: { date },
    });
    return findAppointment || null;
  }
}

export default AppointmentsRepository;
