import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'swags', pathMatch: 'full' },
  { path: 'swags',
    children: [
      {
      path: '',
      loadChildren: './swags/swags.module#SwagsPageModule'
    },
    {
      path: ':swagId',
      loadChildren: './swags/swag-detail/swag-detail.module#SwagDetailPageModule'
    }
  ]
}
 ];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
