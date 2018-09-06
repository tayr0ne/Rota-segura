import { Injectable } from '@angular/core';
//import { Http } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
 
@Injectable()
export class UsersProvider {
  private API_URL = 'https://laravel-web-service.herokuapp.com/api/user'
 
  constructor(public http: HttpClient) { }
 
  createAccount(name: string, dt_entrega: string, p_partida: string, destino: string) {
    return new Promise((resolve, reject) => {
      var data = {
        name: name,
        dt_entrega: dt_entrega,
        p_partida: p_partida,
        destino: destino
      };
 
      this.http.post(this.API_URL , data)
        .subscribe((result: any) => {
          resolve(result = "Cadastrado com sucesso!");
        },
        (error) => {
          reject(error = "Falha ao cadastrar");
        });
    });
  }
} 