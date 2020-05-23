import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home';
import { MathsComponent } from './maths';
import { AppliedMathsComponent} from './applied-maths';

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'maths', component: MathsComponent },
    { path: 'applied-maths', component: AppliedMathsComponent },

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const appRoutingModule = RouterModule.forRoot(routes);