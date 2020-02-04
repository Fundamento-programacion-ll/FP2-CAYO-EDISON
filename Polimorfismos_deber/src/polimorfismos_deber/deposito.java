/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package polimorfismos_deber;

/**
 *
 * @author cayo
 */
public class deposito extends transaccion{
    private double montoDep;

    public double getMontoDep() {
        return montoDep;
    }

    public void setMontoDep(double montoDep) {
        this.montoDep = montoDep;
    }

    public deposito(double montoDep, int cuenta) {
        super(cuenta);
        this.montoDep = montoDep;
    }

    public deposito(double montoDep) {
        this.montoDep = montoDep;
    }

    public deposito() {
    }
    
    @Override
    public String ejecutar() {
        return "SU # DE CUENTA ES: "+getCuenta()+" SU DEPOSITO ES DE: "+montoDep;
    }

    @Override
    public String toString() {
        return "SU # DE CUENTA ES: "+getCuenta()+" SU DEPOSITO ES DE: "+getMontoDep();
    }
    
    
}
