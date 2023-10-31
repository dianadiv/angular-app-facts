import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { NotFoundComponent } from './components/pages/not-found/not-found.component';
import { ContactUsComponent } from './components/pages/contact-us/contact-us.component';
import { ContentListComponent } from './components/pages/facts-page/facts-page.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'facts', component: ContentListComponent},
  { path: 'contacts', component: ContactUsComponent },
  { path: '**', component: NotFoundComponent },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
