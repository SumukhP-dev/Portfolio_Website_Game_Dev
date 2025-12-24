import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AherosjourneyComponent } from './game-dev/a-heros-journey/a-heros-journey.component';
import { AverysadventureComponent } from './game-dev/averys-adventure/averys-adventure.component';
import { BallrollingComponent } from './game-dev/ball-rolling/ball-rolling.component';
import { Donut3dBlenderArtComponent } from './game-dev/donut-3d-blender-art/donut-3d-blender-art.component';
import { AdaptiveheistComponent } from './game-dev/adaptive-heist/adaptive-heist.component';
import { ProjectsResolver } from './resolvers/projects.resolver';
import { StartComponent } from './start/start.component';

export const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    resolve: { projects: ProjectsResolver },
  },
  { path: 'aherosjourney', component: AherosjourneyComponent },
  { path: 'ballrolling', component: BallrollingComponent },
  { path: 'averysadventure', component: AverysadventureComponent },
  { path: 'donut3dblenderart', component: Donut3dBlenderArtComponent },
  { path: 'adaptiveheist', component: AdaptiveheistComponent },
  { path: '', component: StartComponent },
  { path: '**', component: HomeComponent },
];
