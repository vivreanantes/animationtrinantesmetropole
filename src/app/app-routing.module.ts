import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  { path: "", redirectTo: "home", pathMatch: "full" },
  {
    path: "codedelaroute",
    loadChildren: () =>
      import("./pages/codedelaroute/codedelaroute.module").then(
        (m) => m.CodedelaroutePageModule
      ),
  },
  {
    path: "contact",
    loadChildren: () =>
      import("./pages/contact/contact.module").then((m) => m.ContactPageModule),
  },
  {
    path: "home",
    loadChildren: () =>
      import("./pages/home/home.module").then((m) => m.HomePageModule),
  },
  {
    path: "parameters",
    loadChildren: () =>
      import("./pages/parameters/parameters.module").then(
        (m) => m.ParametersPageModule
      ),
  },
  {
    path: "quiz",
    loadChildren: () =>
      import("./pages/quiz/quiz.module").then((m) => m.QuizPageModule),
  },
  {
    path: "trier",
    loadChildren: () =>
      import("./pages/trier/trier.module").then((m) => m.TrierPageModule),
  },
  {
    path: "trisac",
    loadChildren: () =>
      import("./pages/trisac/trisac.module").then((m) => m.TrisacPageModule),
  },
  {
    path: "trisac-details",
    loadChildren: () =>
      import("./pages/trisac-details/trisac-details.module").then(
        (m) => m.TrisacDetailsPageModule
      ),
  },
  {
    path: "carte",
    loadChildren: () =>
      import("./pages/carte/carte.module").then((m) => m.CartePageModule),
  },
  {
    path: "structure",
    loadChildren: () =>
      import("./pages/structure/structure.module").then(
        (m) => m.StructurePageModule
      ),
  },
  {
    path: 'categorie-dechet/:categorie',
    loadChildren: () => import('./pages/categorie-dechet/categorie-dechet.module').then(m => m.CategorieDechetPageModule)
  },
  {
    path: 'categorie-dechet/:categorie/dechet/:dechet',
    loadChildren: () => import('./pages/dechet/dechet.module').then(m => m.DechetPageModule),
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }
