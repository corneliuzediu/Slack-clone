import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InitialPageComponent } from './initial-page/initial-page.component';
import { MainComponent } from './main/main.component';
import { UserProfileComponent } from './user-profile/user-profile.component';

const routes: Routes = [
  { path: '', component: InitialPageComponent },
  {
    path: 'main/:id', component: MainComponent,
    children: [
      { path: 'me', component: UserProfileComponent, outlet: 'secondary_outlet' }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
