import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent }  from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { AgentComponent } from './agent/agent.component';
import { BaseComponent } from './base/base.component';
import { AdminComponent } from './admin/admin.component';
import { GalleryComponent } from './gallery/gallery.component';
import { AboutUsComponent } from './aboutUs/aboutUs.component';

import { AgentService } from './agent/agent.service';

//import { AGENTS } from './agent/mock-agents';

// Imports for loading & configuring the in-memory web api
//import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
//import { InMemoryAgentDataService }  from './agent/in-memory-agent-data.service';

@NgModule({
  imports:      [ BrowserModule, FormsModule, 
                  RouterModule.forRoot([
                    { path: 'welcome', component: WelcomeComponent },
                    { path: 'agent', component: AgentComponent },
                    { path: 'base', component: BaseComponent},
                    { path: 'admin', component: AdminComponent},
                    { path: 'gallery', component: GalleryComponent},
                    { path: 'aboutUs', component: AboutUsComponent},
                    {path: '', redirectTo: 'welcome', pathMatch: 'full' }
                    //{path: '**', redirectTo: 'welcome', pathMatch: 'full'}
                                      ]) ],
                  //InMemoryWebApiModule.forRoot(InMemoryAgentDataService), ],
  declarations: [ AppComponent, WelcomeComponent, AgentComponent, BaseComponent, AdminComponent, GalleryComponent, AboutUsComponent ],
  providers:[ AgentService ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
