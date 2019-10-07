export class RechercheHistorique {

  dateDebut: Date;
  dateFin: Date;
  heureDebut: Date;
  heureFin: Date;
  polluant: string;

  /**
   * Constructeur
   * @param dateDebut : Date
   * @param dateFin: Date
   * @param heureDebut: Date
   * @param heureFin: Date
   * @param polluant: string
   */
  constructor(dateDebut: Date, dateFin: Date, heureDebut: Date, heureFin: Date, polluant: string ) {
    this.dateDebut = dateDebut;
    this.dateFin = dateFin;
    this.heureDebut = heureDebut;
    this.heureFin = heureFin;
    this.polluant = polluant;
  }
}
