import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { InspectionData } from 'src/app/data/Insection-data';
import { ActivatedRoute, Router } from '@angular/router';
import { Inspection, Report } from 'src/app/data/Inspection';

@Component({
    selector: 'app-add-inspections',
    templateUrl: './add-inspections.component.html',
    styleUrls: ['./add-inspections.component.css']
})
export class AddInspectionsComponent implements OnInit{
    liveForm: FormGroup
    isEdit: boolean = false;
    id: number | null;
    larguraJanela: number ;
    reports: Report[]

    constructor(
        private router:Router,
        private route: ActivatedRoute,
        private formBuilder: FormBuilder) {
        this.larguraJanela = 720;
        this.id = null,
        this.reports = [],
        this.liveForm = new FormGroup({
            companyId: new FormControl(),
            brokerCode: new FormControl(),
            productCode: new FormControl(),
            productName: new FormControl(),
            inspectionNumber: new FormControl(),
            status: new FormControl(),
            observation: new FormControl()
        })
     }

    ngOnInit(): void {
        this.liveForm = this.formBuilder.group({
            companyId: ['', [Validators.required]],
            brokerCode: ['', [Validators.required]],
            productCode: ['', [Validators.required]],
            productName: ['', [Validators.required]],
            inspectionNumber: ['', [Validators.required]],
            status: ['', [Validators.required]],
            observation: ['', [Validators.required]],
        })
        
        this.id = Number(this.route.snapshot.paramMap.get('id'));

        if(this.id) {
            this.isEdit = true;
            const isnpection = InspectionData.getInspectionById(this.id);

            if(isnpection && isnpection as Inspection) {
                this.liveForm.setValue({
                    companyId: isnpection.companyId,
                    brokerCode: isnpection.brokerCode,
                    productCode: isnpection.productCode,
                    productName: isnpection.productName,
                    inspectionNumber: isnpection.inspectionNumber,
                    status: '',
                    observation: ''
                })
               this.reports = [...isnpection.reports] 
            }
        }

        this.larguraJanela = window.innerWidth;
        window.addEventListener('resize', this.verificarLarguraJanela.bind(this));

    }

    ngOnDestroy(): void {
        window.removeEventListener('resize', this.verificarLarguraJanela.bind(this));
      }
    
    verificarLarguraJanela(): void {
        this.larguraJanela = window.innerWidth;
    }

    onSubmit() {
        if(this.isEdit) {
            let updateInspection = this.liveForm.value;
            updateInspection.id = this.id;

            InspectionData.updateInspection({...updateInspection, reports: [...this.reports]});
        }else {
            InspectionData.addNewInspection({...this.liveForm.value, reports: [...this.reports]});
        }
        this.router.navigate(['app-inspections']);
    }

    addReport() {
        const status = this.liveForm.value.status;
        const observation = this.liveForm.value.observation;
       
        if(status && observation){
            this.reports.push({id: this.reports.length, status, observation});
        }
    }

    removeReport(report: Report) {
        this.reports = this.reports.filter(data => data.id !== report.id)
    }
}