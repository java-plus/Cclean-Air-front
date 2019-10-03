import {Time} from '@angular/common';

export class CommuneRecherche {
  public codeInsee: string;
  public nomCommune: string;
  public polluant: string;
  public dateEtHeure: Date;
  public alerte: {
    nomPolluant: string,
    valeur: number
  };
}
