import readline from'readline-sync'
import moment from 'moment'
import ticket from './ticket'

class Cliente{
    constructor(dni, nombre, apellido, numTarjeta, tipoAbono){
        this.dni = dni;
        this.nombre = nombre;
        this.apellido = apellido;
        this.numTarjeta = numTarjeta;
        this.tipoAbono = tipoAbono;
    }

    depositarVehiculo(matricula, tipoVehiculo, plazaAsignada, pin){
        matricula = readline.question("Dime cual es la matricula");
        tipoVehiculo = readline.question("Dime que tipo de vehiculo vas a depositar");
        this.plazaAsignada = plazaAsignada;
        pin = readline.question("Indica el pin");
        ticket = new Ticket();
        ticket.generaTicket(matricula, moment.localeData(), plazaAsignada, pin);
    }
}