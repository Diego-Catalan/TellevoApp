import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public usuario:any ;
  public nombreUsuario:any;
  public emailUsuario:any;
  public contraUsuario:any;
  public idUsuario:any;

  constructor(public api:ApiService) {}

  buscarUsuario(){
    this.api.getUsuario(this.usuario).subscribe(
      resultado => {
        var dataString = JSON.stringify(resultado);
        var usuarioJson = JSON.parse(dataString);
        console.log(resultado);
        this.nombreUsuario = usuarioJson.usuario.nombre;
        this.emailUsuario = usuarioJson.usuario.email;

      }
    );

  }



}
