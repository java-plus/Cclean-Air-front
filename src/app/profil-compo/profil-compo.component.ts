import { Component, OnInit } from '@angular/core';
import { ProfilService } from '../services/profil-service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Utilisateur } from '../entities/Utilisateur';


@Component({
  selector: 'app-profil-compo',
  templateUrl: './profil-compo.component.html',
  styleUrls: ['./profil-compo.component.css']
})
export class ProfilCompoComponent implements OnInit {

  utilisateur = new Utilisateur('', '', '', '', [''], '', '', false);
  email: string;

  constructor(private route: ActivatedRoute, private profilService: ProfilService) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.email = params.get('email');

      this.profilService.visualiserProfil(this.email).subscribe(utilisateurCo => this.utilisateur = utilisateurCo);
    });
  }
}
