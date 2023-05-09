import { Routes } from "@angular/router";
import { InspectionsComponent } from "./pages/list-view/inspections.component";
import { AddInspectionsComponent } from "./pages/add-inspections/add-inspections.component";
import { AuthGuard } from "../auth.guard";


const routes: Routes = [
    {path: 'app-inspections', component: InspectionsComponent, canActivate: [AuthGuard]},
    {path: 'add-inspection/:id', component: AddInspectionsComponent, canActivate: [AuthGuard]}
]

export default routes