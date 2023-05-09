import { Routes } from "@angular/router";
import { AuthComponent } from "./auth/auth.component";
import { InspectionsComponent } from "./Inspections/pages/list-view/inspections.component";
import { AuthGuard } from "./auth.guard";

const routes: Routes = [
    {path: '', component: AuthComponent},
    {path: 'app-inspections', component: InspectionsComponent, canActivate: [AuthGuard]}
]

export default routes