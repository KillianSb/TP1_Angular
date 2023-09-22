import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  constructor(private router: Router) {
  }

  register(data: { user: string; pass: string}) {

    let user = [
      {
        user: data.user,
        pass: data.pass
      }
    ]

    localStorage.setItem(data.user, JSON.stringify(user));
    alert("Bien enregistrer !")
    this.router.navigate(['/login']).then(r => true);
  }
}
