import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RecupassPageRoutingModule } from './recupass-routing.module';

import { RecupassPage } from './recupass.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RecupassPageRoutingModule
  ],
  declarations: [RecupassPage]
})
export class RecupassPageModule {}
