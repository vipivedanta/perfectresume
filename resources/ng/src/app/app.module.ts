import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgRedux,NgReduxModule } from '@angular-redux/store';
import { IAppState,rootReducer } from './store';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ResumeComponent } from './components/resume/resume.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HeaderComponent } from './components/templates/header/header.component';
import { FooterComponent } from './components/templates/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    ResumeComponent,
    DashboardComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    NgReduxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

  constructor(ngRedux: NgRedux<IAppState>){
      ngRedux.configureStore(rootReducer,{});
  }
}
