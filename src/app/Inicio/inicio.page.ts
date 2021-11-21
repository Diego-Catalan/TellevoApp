import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {
  public usuario:any ;
  public nombreUsuario:any;
  public emailUsuario:any;
  public contraUsuario:any;
  public idUsuario:any;

  constructor(public api:ApiService) {}

  ngOnInit() {
  }

  actuaUsuario(){
    idUsuario:this.idUsuario;
    var post={
      nombre: this.nombreUsuario,
      email: this.emailUsuario,
      contra: this.contraUsuario ,
      }
      this.api.updateUsuario(this.idUsuario,post).subscribe((success)=>{
      console.log(success);
      },error=>{
      console.log(error);
      })
  }

  deleteUsuario(){
    idUsuario:this.idUsuario;
    this.api.deleteUsuario(this.idUsuario).subscribe(
      (data)=>{

        console.log(data);
      },error=>{
        console.log(error);
      })
  }
}



