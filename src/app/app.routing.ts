import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home';
import { HigherLevelComponent } from './higher-level';
import { OrdinaryLevelComponent } from './ordinary-level';

import { HLHomeComponent } from './higher-level/home';
import { HLMathsComponent } from './higher-level/maths';
import { HLAppliedMathsComponent} from './higher-level/applied-maths';
import { HLPhysicsComponent} from './higher-level/physics';
import { HLDcgComponent} from './higher-level/dcg';
import { HLIrishComponent} from './higher-level/irish';
import { HLEnglishComponent } from './higher-level/english';

import { OLHomeComponent } from './ordinary-level/home';
import { OLEnglishComponent } from './ordinary-level/english';
import { OLIrishComponent } from './ordinary-level/irish';
import { OLMathsComponent } from './ordinary-level/maths';

import { CpNotesComponent } from './cp-notes';
import { CpHomeComponent } from './cp-notes/home';
import { CpGraphsComponent } from './cp-notes/graphs';
import { CpMathematicsComponent } from './cp-notes/mathematics';
import { CpBinarySearchComponent } from './cp-notes/binary-search';
import { CpBlogComponent } from './cp-notes/blog';

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
          path: 'home',
          component: HLHomeComponent,
        },
        {
          path: 'applied-maths',
          component: HLAppliedMathsComponent,
        },
        {
          path: 'maths',
          component: HLMathsComponent,
        },
        {
          path: 'physics',
          component: HLPhysicsComponent,
        },
        {
          path: 'dcg',
          component: HLDcgComponent,
        },
        {
          path: 'irish',
          component: HLIrishComponent,
        },
        {
          path: 'english',
          component: HLEnglishComponent,
        },
        {
          path: '**',
          redirectTo: 'home',
          pathMatch: 'full'
        },
      ],
    },
    {
      path: 'ordinary-level', 
      component: OrdinaryLevelComponent,
      children: [
        {
          path: 'home',
          component: OLHomeComponent,
        },
        {
          path: 'english',
          component: OLEnglishComponent,
        },
        {
          path: 'irish',
          component: OLIrishComponent,
        },
        {
          path: 'maths',
          component: OLMathsComponent,
        },
        {
          path: '**',
          redirectTo: 'home',
          pathMatch: 'full'
        },
      ],
    },
    {
      path: 'cp-notes',
      component: CpNotesComponent,
      children: [
        {
          path: 'home',
          component: CpHomeComponent,
        },
        {
          path: 'graphs',
          component: CpGraphsComponent,
        },
        {
          path: 'mathematics',
          component:CpMathematicsComponent,
        },
        {
          path: 'binary-search',
          component: CpBinarySearchComponent,
        },
        {
          path: 'blog',
          component: CpBlogComponent,
        },
        {
          path: '**',
          redirectTo: 'home',
          pathMatch: 'full'
        },
      ]
    },

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const appRoutingModule = RouterModule.forRoot(routes);