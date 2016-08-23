import { Routes } from '@angular/router';

import { HomeRoutes } from './home/index';
import { MapRoutes } from './map/index';

export const routes: Routes = [
  ...HomeRoutes,
  ...MapRoutes
];
