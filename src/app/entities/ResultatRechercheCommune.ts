import {PolluantDto} from './PolluantDto';
import {ConditionMeteo} from './ConditionMeteo';

export class ResultatRechercheCommune {

  public codeInsee: string;
  public nomCommune: string;
  public dateEtHeure: string;
  public listePolluants: Array<PolluantDto>;
  public nbHabitants: number;
  public conditionsMeteo: ConditionMeteo;
  public  niveauAlerte: PolluantDto;
  public date: Date;
  public heure: number;

}
