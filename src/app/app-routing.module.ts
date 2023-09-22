import { NgModule } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivateFn, RouterModule, RouterStateSnapshot, Routes} from '@angular/router';
import {AuthComponent} from "./components/auth/auth.component";
import {CarbonFootprintComponent} from "./components/carbon-footprint/carbon-footprint.component";
import {EditTravelComponent} from "./components/edit-travel/edit-travel.component";
import {RegisterComponent} from "./components/register/register.component";

const isAdminCanActivateFn: CanActivateFn =
  (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
    return sessionStorage.getItem('Utilisateur connecté') == 'True';
  };


const routes: Routes = [
  { path: 'home', component: CarbonFootprintComponent},
  { path: 'login', component: AuthComponent},
  { path: 'registrer', component: RegisterComponent},
  { path: 'edit', component: EditTravelComponent, canActivate: [isAdminCanActivateFn]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
