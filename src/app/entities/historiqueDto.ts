import { CommuneDtoVisualisation } from './CommuneDtoVisualisation';
import { PolluantDtoVisualisation } from './PolluantDtoVisualisation';

class HistoriqueDto {
  constructor(private communeDtoVisualisation: CommuneDtoVisualisation, private polluantDtoVisualisation: PolluantDtoVisualisation) { }
}

export {HistoriqueDto};
