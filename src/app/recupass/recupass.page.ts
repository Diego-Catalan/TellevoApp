import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-recupass',
  templateUrl: './recupass.page.html',
  styleUrls: ['./recupass.page.scss'],
})
export class RecupassPage implements OnInit {


    public usuario:any ;
    public nombreUsuario:any;
    public emailUsuario:any;
    public contraUsuario:any;
    public idUsuario:any;

    constructor(public api:ApiService) {}

    ngOnInit() {
    }
    createUsuario(){
      var post={
        nombre: this.nombreUsuario,
        email: this.emailUsuario,
        contra: this.contraUsuario ,
        }
        this.api.postUsuario(post).subscribe((success)=>{
        console.log(success);
        },error=>{
        console.log(error);
        })
    }
  }

