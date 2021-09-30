import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CodrecuPage } from './codrecu.page';

const routes: Routes = [
  {
    path: '',
    component: CodrecuPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CodrecuPageRoutingModule {}
