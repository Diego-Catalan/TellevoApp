import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CodrecuPageRoutingModule } from './codrecu-routing.module';

import { CodrecuPage } from './codrecu.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CodrecuPageRoutingModule
  ],
  declarations: [CodrecuPage]
})
export class CodrecuPageModule {}
