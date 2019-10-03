/**
 * Classe représentant une commune sur la carte.
 */
export class CommuneCarte {
  public codeInsee: string;
  public codePostal: string;
  public nomCommune: string;
  public latitude: number;
  public longitude: number;
  public alerte: {
    nomPolluant: string;
    valeur: number;
  };

}
