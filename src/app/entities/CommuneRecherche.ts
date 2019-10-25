import { PolluantDto } from './PolluantDto';

export class CommuneRecherche {
  public codeEtNom: {
    nomCommune: string,
    codeInsee: string
  };
  public polluant: string;
  public alerte: PolluantDto;


  // A CORRIGER
  public heure: string;
  public date: Date;
}
