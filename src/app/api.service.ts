import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  headers: HttpHeaders;
  public apiURL:any = 'http://127.0.0.1:8000/api/usuario/';

  constructor(public http:HttpClient) {
    this.headers=new HttpHeaders();
    this.headers.append("Accept", 'application/json');
    this.headers.append('content-type','application/json');
    this.headers.append('Access-Control-Allow-Origin','*');


  }

  getUsuario(nombre){
    return this.http.get(this.apiURL+nombre);

  }
  updateUsuario(id,post){

    return this.http.put(this.apiURL+id,post);
  }

  postUsuario(data){

    return this.http.post(this.apiURL,data);
  }
  deleteUsuario(del){
    return this.http.delete(this.apiURL+del);

  }
}
