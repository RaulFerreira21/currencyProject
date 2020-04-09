import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { CommonModule } from '@angular/common';
import { MoedaEuroComponent } from './moeda-euro/moeda-euro.component';
import { MoedaLibraComponent } from './moeda-libra/moeda-libra.component';
import { CalculateComponent } from './calculate/calculate.component';

//alteração!
const routes: Routes = [
  { path: "dolar", component: CalculateComponent },
  { path: "euro", component: MoedaEuroComponent },
  { path: "libra", component: MoedaLibraComponent },
]
@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],//*todo objeto de router necessita de um import e um export
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const RoutingComponent = [CalculateComponent, CalculateComponent, MoedaLibraComponent]