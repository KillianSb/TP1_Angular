import {Component, OnInit} from '@angular/core';
import {CarbonFootprintComputeService} from "../../services/carbon-footprint-compute.service";


@Component({
  selector: 'app-carbon-footprint',
  templateUrl: './carbon-footprint.component.html',
  styleUrls: ['./carbon-footprint.component.scss']
})
export class CarbonFootprintComponent implements OnInit {
  constructor(private carbonFootprintComputeService: CarbonFootprintComputeService) {
  }

  voyages = this.carbonFootprintComputeService.getVoyages();

  public distanceKmParcouru: number = this.carbonFootprintComputeService.getResumeVoyages().distanceTotal;
  public distanceMoyenneKm: number = this.carbonFootprintComputeService.getResumeVoyages().distanceMoyenne;
  public consommationMoyennePour100Km: number = this.carbonFootprintComputeService.getResumeVoyages().consommationMoyenne;
  public consommationTotal: number = this.carbonFootprintComputeService.getResumeVoyages().consommationTotal;
  public quantiteCO2Total: number = this.carbonFootprintComputeService.getResumeVoyages().quantiteCO2Totale;

  ngOnInit() {
    console.log('Le composant a été initialisé.');
  }

  plus100($event: MouseEvent) {
    this.distanceMoyenneKm += 100;
    this.consommationMoyennePour100Km += 1;
  }

  ajoutVoyage($event: MouseEvent) {
    this.carbonFootprintComputeService.addVoyage(this.voyages);

    this.distanceMoyenneKm = this.carbonFootprintComputeService.getResumeVoyages().distanceMoyenne;
    this.consommationTotal = this.carbonFootprintComputeService.getResumeVoyages().consommationTotal;
    this.consommationMoyennePour100Km = this.carbonFootprintComputeService.getResumeVoyages().consommationMoyenne;
    this.distanceKmParcouru = this.carbonFootprintComputeService.getResumeVoyages().distanceTotal;
    this.quantiteCO2Total = this.carbonFootprintComputeService.getResumeVoyages().quantiteCO2Totale;
  }
}
