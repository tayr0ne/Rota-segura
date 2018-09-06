import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { UsersProvider } from './../../providers/users/users';

/**
 * Generated class for the CadastroPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cadastro',
  templateUrl: 'cadastro.html',
})
export class CadastroPage {
  model: User;

 constructor(public navCtrl: NavController, public navParams: NavParams, private toast: ToastController, private userProvider: UsersProvider) {
    this.model = new User();
    this.model.name = 'nome';
    this.model.dt_entrega = 'data entrega';
    this.model.p_partida = 'partida';
    this.model.destino = 'destino';
  }

  createAccount() {
    
    this.userProvider.createAccount(this.model.name, this.model.dt_entrega, this.model.p_partida, this.model.destino)
      .then((result: any) => {
        this.toast.create({ message: 'Usuário criado com sucesso. Token: ' + result.token, position: 'botton', duration: 3000 }).present();

        //Salvar o token no Ionic Storage para usar em futuras requisições.
        //Redirecionar o usuario para outra tela usando o navCtrl
        //this.navCtrl.pop();
        //this.navCtrl.setRoot()
      })
        .catch((error: any) => {
          this.toast.create({ message: 'Erro ao criar o usuário. Erro: ' + error.error, position: 'botton', duration: 3000 }).present();
        });
    }
 }

  export class User {
    name: string;
    dt_entrega: string;
    p_partida: string;
    destino: string;
  }
