
package comparadores_deber;

import java.util.ArrayList;
import javax.swing.JOptionPane;

public class pais {
    private ArrayList <provincias> listaPro= new ArrayList<provincias>();

    public pais() {
        this.listaPro= new ArrayList<>();
    }

    public ArrayList<provincias> getListProvincias() {
        return listaPro;
    }

    public void setListProvincias() {
        int op ;

        provincias provincia;

        do {            

            provincia = new provincias();

            agregarProvincia(provincia);

            op = JOptionPane.showConfirmDialog(null, "MAS PROVINCIAS", "CONTINUAR",JOptionPane.YES_NO_CANCEL_OPTION);

        } while (op==JOptionPane.YES_NO_CANCEL_OPTION);     
    }
    
    public void agregarProvincia(provincias pro){
        this.listaPro.add(pro);
        
        
    }
    
}
