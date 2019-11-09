import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MinhasPresencasPage } from './minhas-presencas.page';

const routes: Routes = [
  {
    path: '',
    component: MinhasPresencasPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MinhasPresencasPage]
})
export class MinhasPresencasPageModule {}
