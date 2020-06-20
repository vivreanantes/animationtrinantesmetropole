import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { IonicModule } from "@ionic/angular";
import { TranslateModule } from "@ngx-translate/core";
import { PipesModule } from "../../pipes/pipe.module";
import { ComponentsModule } from "../../components/components.module";
import { NguCarouselModule } from "@ngu/carousel";

import { QuizPageRoutingModule } from "./quiz-routing.module";

import { QuizPage } from "./quiz.page";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    QuizPageRoutingModule,
    TranslateModule,
    PipesModule,
    ComponentsModule,
    NguCarouselModule,
  ],
  declarations: [QuizPage],
})
export class QuizPageModule {}
