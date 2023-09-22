import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CarbonFootprintComputeService {

  constructor() { }

  private _voyages = [
    { distanceKm: 50, consommationPour100Km: 5, quantiteCO2: 0 },
    { distanceKm: 100, consommationPour100Km: 10, quantiteCO2: 5 },
    { distanceKm: 150, consommationPour100Km: 15, quantiteCO2: 10 },
    { distanceKm: 200, consommationPour100Km: 20, quantiteCO2: 15 },
  ]


  getVoyages() {
    return this._voyages;
  }

  addVoyage(voyage: { distanceKm: number; consommationPour100Km: number; quantiteCO2: number }[]) {
    let maxDistanceKm = 1000;
    let distanceKm = Math.floor(Math.random() * maxDistanceKm);

    // Supposons que la consommation moyenne en litres pour 100 km est de 4 litres.
    // Vous pouvez ajuster cette valeur en fonction de votre cas d'utilisation.
    let consommationMoyenne = 10;

    // Calculez la consommation en litres pour la distance donnée.
    let consommationLitres = Math.floor(Math.random() * consommationMoyenne) + 1;

    let quantiteCO2 = (distanceKm * consommationLitres) / 100 * 2.3;

    this._voyages.push({ distanceKm, consommationPour100Km: consommationLitres, quantiteCO2 });
    this._voyages = voyage;
  }

  getResumeVoyages() {
    let distanceTotal = this._voyages.reduce((total, voyage) => {
      return total + voyage.distanceKm;
    }, 0);
    let consommationTotal = this._voyages.reduce((total, voyage) => {
      return total + voyage.consommationPour100Km;
    }, 0);
    let consommationMoyenne = this._voyages.reduce((total, voyage) => {
      return total + (voyage.consommationPour100Km * voyage.distanceKm) / 100;
    }, 0) / this._voyages.length;
    let distanceMoyenne = this._voyages.reduce((total, voyage) => {
      return total + voyage.distanceKm;
    }, 0) / this._voyages.length;
    let quantiteCO2Totale = this._voyages.reduce((total, voyage) => {
      return total + (voyage.distanceKm * voyage.consommationPour100Km) / 100 * 2.3;
    }, 0) / this._voyages.length;
    return { distanceTotal, consommationMoyenne, distanceMoyenne, quantiteCO2Totale, consommationTotal };
  }
}
