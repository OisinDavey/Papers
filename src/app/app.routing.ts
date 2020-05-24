import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home';
import { HigherLevelComponent } from './higher-level'
import { MathsComponent } from './higher-level/maths';
import { AppliedMathsComponent} from './higher-level/applied-maths';
import { PhysicsComponent} from './higher-level/physics'
import { DcgComponent} from './higher-level/dcg'

const routes: Routes = [
    { 
      path: '',
      component: HomeComponent 
    },
    { 
      path: 'higher-level', 
      component: HigherLevelComponent,
      children: [
        {
          path: 'applied-maths',
          component: AppliedMathsComponent,
        },
        {
          path: 'maths',
          component: MathsComponent,
        },
        {
          path: 'physics',
          component: PhysicsComponent,
        },
        {
          path: 'dcg',
          component: DcgComponent,
        },
        {
          path: '**',
          redirectTo: '',
          pathMatch: 'full'
        },
      ]
    },

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const appRoutingModule = RouterModule.forRoot(routes);