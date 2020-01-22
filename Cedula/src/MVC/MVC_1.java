/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package MVC;

import Modelo.persona;
import java.util.Scanner;


/**
 *
 * @author crist
 */
public class MVC_1 {
    
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String res;
        String cedula;
        do{
        System.out.println("************INGRESE SU NUMERO DE CEDULA************");
        cedula=sc.next();
        if(cedula.length()>10 ||cedula.length()<10){
            System.err.println("NUMERO DE CEDULA INCORRECTOS O FALTAN DIJITOS");
            }else{
            int cedulap=Integer.parseInt(cedula);
            persona edison = new persona ("EDISON","CAYO",1234567890, 0,cedulap, "BARRIO EL PARAISO", 'M', true);
            System.out.println(edison);
            }
            System.out.println("Desea Volver a Intentarlo? (No= n Si=s)");
        res=sc.next();
        }while(!res.equalsIgnoreCase("n"));    
    }
}
