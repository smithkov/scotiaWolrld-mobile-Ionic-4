import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";
import { AuthGuardService } from "./services/auth-guard.service";

const routes: Routes = [
  { path: "", redirectTo: "main/landing", pathMatch: "full" },
  { path: "", loadChildren: "./auth/main/main.module#MainPageModule" },
  { path: "pages", loadChildren: "./pages/menu/menu.module#MenuPageModule" }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
