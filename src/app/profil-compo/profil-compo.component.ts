import { Component, OnInit } from '@angular/core';
import { ProfilService } from '../services/profil-service';
import { ParamMap, Router } from '@angular/router';
import { UtilisateurProfil } from '../entities/UtilisateurProfil';

/**
 * Composant qui gère l'affichage, la modification et la suppression du profil
 */
@Component({
  selector: 'app-profil-compo',
  templateUrl: './profil-compo.component.html',
  styleUrls: ['./profil-compo.component.css']
})
export class ProfilCompoComponent implements OnInit {

  utilisateur = new UtilisateurProfil('', '', '', '', [''], null, '', '', '');
  error: string;
  modif: boolean = false;
  suppression: boolean = false;

  /**
   * Constructeur
   * @param profilService : ProfilService
   * @param router : Router
   */
  constructor(private router: Router, private profilService: ProfilService) { }

  /**
   * Permet d'afficher les données de l'utilisateur à l'initialisation de la page Profil.
   */
  ngOnInit() {
    this.profilService.visualiserProfil().subscribe(utilisateurCo => this.utilisateur = utilisateurCo);
  }

  /**
   * Permet de modifier les informations de l'utilisateur connecté.
   */
  modifierProfil() {
    this.profilService.modifierProfil(this.utilisateur).subscribe(result => { this.modif = true; }, (err: any) => {
      this.error = err.error;
    });
  }

  /**
   * Méthode pour afficher la demande de confirmation de suppression du membre connecté.
   */
  demanderSuppression(): void {
    this.suppression = true;
  }

  /**
   * Méthode pour annuler la suppression.
   */
  annulerSuppression(): void {
    this.suppression = false;
  }

  /**
   * Méthode appellant le service pour supprimer le membre connecté.
   */
  validerSuppression(): void {
    this.profilService.supprimerProfil(this.utilisateur.email).subscribe(result => {
      this.router.navigate(['/']);
      this.suppression = false;
    }, (err: any) => {
      this.error = err.error;
    });
  }
}
