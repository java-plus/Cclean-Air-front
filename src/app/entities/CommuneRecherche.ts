import {PolluantDto} from './PolluantDto';

export class CommuneRecherche {
  public codeEtNom: {
    nomCommune: string,
    codeInsee: string
  };
  public polluant: string;
  public date: Date;
  public heure: number;
  public alerte: PolluantDto;
}
