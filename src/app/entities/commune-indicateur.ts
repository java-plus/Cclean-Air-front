export class CommuneIndicateur {
  nomCommune: string;
  codeInsee: string;
  alerte: boolean;

  constructor(nomCommune: string, codeInsee: string, alerte: boolean) {
    this.nomCommune = nomCommune;
    this.codeInsee = codeInsee;
    this.alerte = alerte;

  }


}
