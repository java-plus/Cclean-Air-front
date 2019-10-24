import { Moment } from 'moment';

/**
 *Objet Dto de données locales qui sert à demander l'affichage de l'historique
 *
 * @class DonneesLocalesDto
 */
class DonneesLocalesRecherchees {
  constructor(public dateDebut: string, public dateFin: string, public polluant: string) { }
}

export { DonneesLocalesRecherchees };
