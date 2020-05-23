import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home';
import { MathsComponent } from './maths';
import { AppliedMathsComponent} from './applied-maths';
import { PhysicsComponent} from './physics'

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'maths', component: MathsComponent },
    { path: 'applied-maths', component: AppliedMathsComponent },
    { path: 'physics', component: PhysicsComponent },

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const appRoutingModule = RouterModule.forRoot(routes);