import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BreweryDetailPageRoutingModule } from './brewery-detail-routing.module';

import { BreweryDetailPage } from './brewery-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BreweryDetailPageRoutingModule
  ],
  declarations: [BreweryDetailPage]
})
export class BreweryDetailPageModule {}
