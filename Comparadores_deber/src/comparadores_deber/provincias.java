
package comparadores_deber;

import java.util.StringTokenizer;
import javax.swing.JOptionPane;

public class provincias {
    private String nombrepro;
    private int numerohabi;

    public provincias() {
        String datos= JOptionPane.showInputDialog(null, "DIGITE LOS DATOS SEPAADOS POR UNA COMA");
        StringTokenizer tokens= new StringTokenizer(datos,",");
        
        this.nombrepro = tokens.nextToken();
        this.numerohabi = Integer.parseInt(tokens.nextToken());
    }

    public provincias(String nombreprovincia, int numerohabitantes) {
        this.nombrepro = nombreprovincia;
        this.numerohabi = numerohabitantes;
    }

    public String getNombreprovincia() {
        return nombrepro;
    }

    public void setNombreprovincia(String nombreprovincia) {
        this.nombrepro= nombreprovincia;
    }

    public int getNumerohabitantes() {
        return numerohabi;
    }

    public void setNumerohabitantes(int numerohabitantes) {
        this.numerohabi = numerohabitantes;
    }
    
}
