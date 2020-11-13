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

    depositarVehiculo(matricula, tipoVehiculo){
        this.matricula = matricula;
        this.tipoVehiculo = tipoVehiculo;
        ticket = new Ticket();
        ticket.generaTicket;
    }
}