import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

//Componentes
import { PendingPage } from '../pages/pending/pending.component';
import { FinishedPage } from '../pages/finished/finished.component';
import { AddPage } from '../pages/add/add.component';
import { ListsComponent } from '../components/lists.components';

//Servicios
import { TaskService } from '../services/task.service';

//Pipes
import { FiltroCompletadoPipe } from '../pipes/filtro-completado/filtro-completado';

@NgModule({
  declarations: [
    MyApp,
    TabsPage,
    PendingPage,
    FinishedPage,
    AddPage,
    FiltroCompletadoPipe,
    ListsComponent
  ],
  imports: [BrowserModule, IonicModule.forRoot(MyApp)],
  bootstrap: [IonicApp],
  entryComponents: [MyApp, TabsPage, PendingPage, FinishedPage, AddPage],
  providers: [
    StatusBar,
    SplashScreen,
    TaskService,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule {}
