import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContainerComponent } from './core/container/container.component';
import { SenetencesContainerComponent } from './modules/sentences/container/senetences-container/senetences-container.component';

const  routes:Routes = [
  {
    path: '',
    component: ContainerComponent,
    children: [
      { path: '', redirectTo: 'sentences', pathMatch: 'full' },
      {
        path: 'sentences',
        component: SenetencesContainerComponent
      },
    ],
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
