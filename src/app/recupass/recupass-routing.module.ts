import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecupassPage } from './recupass.page';

const routes: Routes = [
  {
    path: '',
    component: RecupassPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecupassPageRoutingModule {}
