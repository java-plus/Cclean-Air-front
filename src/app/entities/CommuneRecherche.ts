import {PolluantDto} from './PolluantDto';

export class CommuneRecherche {
  public codeInsee: string;
  public nomCommune: string;
  public polluant: string;
  public dateEtHeure: Date;
  public alerte: PolluantDto;
}
