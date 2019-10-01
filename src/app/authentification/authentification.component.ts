import {Component, OnInit} from '@angular/core';
import {AuthentificationService} from '../services/authentification-service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-authentification',
  templateUrl: './authentification.component.html',
  styleUrls: ['./authentification.component.css']
})
export class AuthentificationComponent implements OnInit {


  constructor(private service: AuthentificationService, private router: Router) {
  }


  ngOnInit() {
  }

  authentifier(email: string, motDePasse: string): void {
    this.service.authentifier(email, motDePasse).subscribe(() => {
      this.router.navigate(['/accueil']);
    }, () => {

    });
  }

}
