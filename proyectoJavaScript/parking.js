import readline from'readline-sync'
import moment from 'moment'  

class Parking{
    
    const TOTAL_PLAZAS_VEHICULO = 45;
    plazasTurismo = 15;
    plazasMotocicleta = 15;
    plazasCaravanas = 15;

    guardarVehiculos(tipoVehiculo) {
            
        if (tipoVehiculo == "Turismo"){
            plazasTurismo--;
        }
        if (tipoVehiculo == "Motocicleta"){
            plazasMotocicleta--;
        }
        if (tipoVehiculo == "Caravana"){
            plazasCaravanas--;
        }
    }
}