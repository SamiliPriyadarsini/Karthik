import { Injectable } from '@angular/core';

import { Agent } from './agent';
import { AGENTS } from './mock-agents';

@Injectable()

export class AgentService {
  
  getAgents(): Promise<Agent[]> {
  return Promise.resolve(AGENTS);
  }

}
