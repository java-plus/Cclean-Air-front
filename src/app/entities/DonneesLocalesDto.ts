import { CommuneDtoVisualisation } from './CommuneDtovisualisation';
import { PolluantDtoVisualisation } from './PolluantDtoVisualisation';
import { ConditionMeteoDtoVisualisation } from './ConditionMeteoDtoVisualisation';

class DonneesLocalesDto {
  constructor(private commune: CommuneDtoVisualisation, private polluant: PolluantDtoVisualisation[],
    private meteo: ConditionMeteoDtoVisualisation, private date: Date) { }
}

export { DonneesLocalesDto };
