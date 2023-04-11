import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InitialPageComponent } from './initial-page/initial-page.component';
import { MainComponent } from './main/main.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ChatComponent } from './chat/chat.component';

const routes: Routes = [
  { path: '', component: InitialPageComponent },
  {
    path: 'main/:id', component: MainComponent,
    title: 'Profil',
    children: [
      { path: 'profil', component: UserProfileComponent, outlet: 'body' },
    ]
  },
  {
    path: 'main/chat', component: ChatComponent
  },
  { path: '**', component: PageNotFoundComponent } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
