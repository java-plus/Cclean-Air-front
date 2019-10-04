/**
 * Classe représentant une commune sur la carte.
 */
import {PolluantDto} from './PolluantDto';

export class CommuneCarte {
  public codeInsee: string;
  public codePostal: string;
  public nomCommune: string;
  public latitude: number;
  public longitude: number;
  public alerte: PolluantDto;

}
