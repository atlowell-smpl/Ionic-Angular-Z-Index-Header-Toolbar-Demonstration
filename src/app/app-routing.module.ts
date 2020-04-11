import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'scan',
    loadChildren: () => import('./scan/scan.module').then(m => m.ScanPageModule)
  },
  {
    path: '',
    redirectTo: '/scan',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: '/scan'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes) //, { preloadingStrategy: PreloadAllModules }
  ],
  exports: [RouterModule],
  entryComponents: []
})
export class AppRoutingModule { }
