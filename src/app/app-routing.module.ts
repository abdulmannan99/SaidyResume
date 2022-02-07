import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './home/home.component'
import{AboutComponent} from './about/about.component'
import {ContactComponent} from './contact/contact.component'
import {PortfolioComponent} from './portfolio/portfolio.component'
import {ServicesComponent} from './services/services.component'
import {SkillsComponent} from './skills/skills.component'
const routes: Routes = [
  {
  component: AboutComponent,
  path:'about'
  },

  {
  component: ContactComponent,
  path:'contact'
  },
  {
  component: PortfolioComponent,
  path:'portfolio'
  },
  {
  component:ServicesComponent,
  path:'service'
  },
  {
  component: SkillsComponent,
  path:'skill'
  },
  {
  component: HomeComponent,
  path:''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
