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
public class retiros extends transaccion{
    
    private double monto;

    public double getMonto() {
        return monto;
    }

    public void setMonto(double monto) {
        this.monto = monto;
    }

    public retiros(double monto, int cuenta) {
        super(cuenta);
        this.monto = monto;
    }

    public retiros(double monto) {
        this.monto = monto;
    }

    @Override
    public String ejecutar() {
        return " SU # DE CUENTA ES: "+getCuenta()+" SU SALDO ES DE: "+monto;
    }

    @Override
    public String toString() {
        return "SU # DE CUENTA ES: "+getCuenta()+" SU RETIRO ES DE: "+getMonto();   
    }
    
    
    
    
}
