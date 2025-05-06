import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AffectationComponent } from './affectation/affectation.component';
import { RegistreComponent } from './registre/registre.component';
import { TraitementsComponent } from './traitements/traitements.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './guards/auth.guard';

import { AjouterEmployeComponent } from './ajouter-employe/ajouter-employe.component';
import { ModifierInfoComponent } from './modifier-info/modifier-info.component';
import { ListeEngagementsComponent } from './liste-engagements/liste-engagements.component';
import { ExtraireListesComponent } from './extraire-listes/extraire-listes.component';
import { EtatEngagementComponent } from './etat-engagement/etat-engagement.component';
import { AnnoncerEngagementComponent } from './annoncer-engagement/annoncer-engagement.component';
import { CertificatTransfertComponent } from './certificat-transfert/certificat-transfert.component';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: 'main',
    component: MainLayoutComponent,
    canActivate: [AuthGuard],
    children: [
      { path: '', component: HomeComponent },
      {
        path: 'dashboard',
        component: DashboardComponent,
        children: [
          { path: 'ajouter-employe', component: AjouterEmployeComponent },
          { path: 'modifier-info', component: ModifierInfoComponent },
          { path: 'liste-engagements', component: ListeEngagementsComponent },
          { path: 'extraire-listes', component: ExtraireListesComponent },
          { path: 'etat-engagement', component: EtatEngagementComponent },
          { path: 'annoncer-engagement', component: AnnoncerEngagementComponent },
          { path: 'certificat-transfert', component: CertificatTransfertComponent },
          { path: '', redirectTo: 'ajouter-employe', pathMatch: 'full' }  // Optionnel
        ]
      },
      { path: 'affectation', component: AffectationComponent },
      { path: 'registre', component: RegistreComponent },
      { path: 'traitements', component: TraitementsComponent },
    ]
  },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', redirectTo: '/main' }
];
