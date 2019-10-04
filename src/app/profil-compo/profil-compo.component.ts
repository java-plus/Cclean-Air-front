import { Component, OnInit } from '@angular/core';
import { ProfilService } from '../services/profil-service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { UtilisateurProfil } from '../entities/UtilisateurProfil';


@Component({
  selector: 'app-profil-compo',
  templateUrl: './profil-compo.component.html',
  styleUrls: ['./profil-compo.component.css']
})
export class ProfilCompoComponent implements OnInit {

  utilisateur = new UtilisateurProfil('', '', '', '', [''], null, '', '', '');
  error: string;
  modif: boolean = false;

  constructor(private route: ActivatedRoute, private profilService: ProfilService) { }

  ngOnInit() {
      this.profilService.visualiserProfil().subscribe(utilisateurCo => this.utilisateur = utilisateurCo);
    }

  modifierProfil() {
    this.profilService.modifierProfil(this.utilisateur).subscribe(result => { this.modif = true; }, (err: any) => {
      this.error = err.error;
    });
  }
}
