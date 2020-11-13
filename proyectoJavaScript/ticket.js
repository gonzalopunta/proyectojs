class Ticket{
    generaTicket(matricula, fechaDeposito, plazaAsignada, pin){
        this.matricula = matricula;
        this.fechaDeposito = fechaDeposito;
        this.plazaAsignada = plazaAsignada;
        this.pin = pin;

        console.log("Matricula: "+ this.matricula + "Fecha: "+ this.fechaDeposito + "Numero de plaza: "+ this.plazaAsignada)
    }
}