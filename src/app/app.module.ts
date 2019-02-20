import { BrowserModule } from "@angular/platform-browser";
import { ErrorHandler, NgModule } from "@angular/core";
import { IonicApp, IonicErrorHandler, IonicModule } from "ionic-angular";
import { SplashScreen } from "@ionic-native/splash-screen";
import { StatusBar } from "@ionic-native/status-bar";
import { HttpModule } from "@angular/http";
import { NguCarouselModule } from "@ngu/carousel";

import { MyApp } from "./app.component";
import { QuizPage } from "../pages/quiz/quiz";
import { CodedelaroutePage } from "../pages/codedelaroute/codedelaroute";
import { ContactPage } from "../pages/contact/contact";
import { ParametersPage } from "../pages/parameters/parameters";
import { DomicileModalPage } from "../pages/domicile-modal/domicile-modal";
import { DifficultModalPage } from "../pages/difficult-modal/difficult-modal";

import { LangageService } from "../services/langage.service";
import { DebugService } from "../services/debug.service";
import { DataService } from "../services/data.service";

import { HomeCollectModsHandler } from "../handlers/homeCollectMods.handler";
import { DifficultHandler } from "../handlers/difficult.handler";

import { PipesModule } from "../pipes/pipes.module";
import { ComponentsModule } from "../components/components.module";

import { HttpClient, HttpClientModule } from "@angular/common/http";
import { TranslateLoader, TranslateModule } from "@ngx-translate/core";
import { TranslateHttpLoader } from "@ngx-translate/http-loader";

@NgModule({
  declarations: [
    MyApp,
    QuizPage,
    CodedelaroutePage,
    ContactPage,
    ParametersPage,
    DomicileModalPage,
    DifficultModalPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(
      MyApp,
      {},
      {
        links: [
          { component: QuizPage, segment: "quiz" },
          { component: CodedelaroutePage, segment: "code_de_la_route" },
          { component: ContactPage, segment: "contact" },
          { component: ParametersPage, segment: "parametres" }
        ]
      }
    ),
    HttpClientModule,
    HttpModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    PipesModule,
    ComponentsModule,
    NguCarouselModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    QuizPage,
    CodedelaroutePage,
    ContactPage,
    ParametersPage,
    DomicileModalPage,
    DifficultModalPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    LangageService,
    DebugService,
    DataService,
    HomeCollectModsHandler,
    DifficultHandler
  ]
})
export class AppModule {}

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, "./assets/i18n/", ".json");
}
