import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InspectionData } from 'src/app/data/Insection-data';
import { Inspection } from 'src/app/data/Inspection';

@Component({
    selector: 'app-inspections',
    templateUrl: './inspections.component.html',
    styleUrls: ['./inspections.component.css']
})

export class InspectionsComponent implements OnInit{
    displayedColumns: string[] = ['Id', 'companyId', 'brokerCode', 'productCode', 'productName', 'inspectionNumber'];
    dataSource: Array<Inspection> = [];
    larguraJanela: number ;

    constructor(private router:Router){
        this.larguraJanela = 720;
    }

    ngOnInit(): void {
        this.dataSource =  [...InspectionData.getAll()]
        this.larguraJanela = window.innerWidth;
        window.addEventListener('resize', this.verificarLarguraJanela.bind(this));
    }

    ngOnDestroy(): void {
        window.removeEventListener('resize', this.verificarLarguraJanela.bind(this));
      }
    
    verificarLarguraJanela(): void {
        this.larguraJanela = window.innerWidth;
    }

    newItem() {
        this.router.navigate(['add-inspection', 0]);
    }

    editItem(item : Inspection) {
        this.router.navigate(['add-inspection', item.id]);
    }
}