import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent {
  constructor(private router: Router) {
  }

  login(data: { user: string; pass: string}) {

    var user = localStorage.getItem(data.user);

    console.log(user)
    if (user != null) {
      let userAuth = JSON.parse(user);
      if (data.user === userAuth[0].user && data.pass === userAuth[0].pass) {
        sessionStorage.setItem("Utilisateur connecté", "True");
        alert("Connecté !")
        this.router.navigate(['/home']).then(r => true);
      }else {
        alert("User ou mdp invalide !")

      }
    }else {
      alert("Erreur !")
    }
  }
}
