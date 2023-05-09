import { NgModule } from '@angular/core';
import { InspectionsComponent } from './pages/list-view/inspections.component';
import {MatButtonModule} from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';
import { CommonModule } from '@angular/common';
import { AddInspectionsComponent } from './pages/add-inspections/add-inspections.component';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import routes from '../Inspections/InspectionsRoutingModule';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatCardModule} from '@angular/material/card'; 
import {MatIconModule} from '@angular/material/icon';
import { AuthGuard } from '../auth.guard';

@NgModule({
    declarations: [
        InspectionsComponent,
        AddInspectionsComponent
    ],
    imports: [
        CommonModule,
        MatButtonModule,
        MatInputModule,
        MatNativeDateModule,
        FormsModule,
        ReactiveFormsModule,
        MatTableModule,
        BrowserModule,
        MatCardModule,
        MatIconModule,
        RouterModule.forRoot(routes)

    ],
    providers: [
        AuthGuard
    ],
    exports: [
        InspectionsComponent,
        AddInspectionsComponent,
        RouterModule
    ]
})

export class InspectionsModule{
}