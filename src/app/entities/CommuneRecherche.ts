import {PolluantDto} from './PolluantDto';

export class CommuneRecherche {
  public codeEtNom: {
    nomCommune: string,
    codeInsee: string
  };
  public polluant: string;
  public dateEtHeure: Date;
  public date: Date;
  public heure: number;
  public alerte: PolluantDto;
}
