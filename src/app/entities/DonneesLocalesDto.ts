import { CommuneDtoVisualisation } from './CommuneDtovisualisation';
import { PolluantDtoVisualisation } from './PolluantDtoVisualisation';
import { ConditionMeteoDtoVisualisation } from './ConditionMeteoDtoVisualisation';

class DonneesLocalesDto {
  constructor(public commune: CommuneDtoVisualisation, public listePolluants: PolluantDtoVisualisation[],
    public conditionMeteo: ConditionMeteoDtoVisualisation, public date: Date) { }
}

export { DonneesLocalesDto };




