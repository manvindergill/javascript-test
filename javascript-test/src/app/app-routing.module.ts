import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ResolveGuard } from './resolve.guard';
import { TestComponent } from './test/test.component'

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'questions/:id',
  component:TestComponent,
  resolve: {
    data: ResolveGuard
  }}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
