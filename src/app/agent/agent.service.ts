import { Injectable } from '@angular/core';

import { Agent } from './agent';
import { AGENTS } from './mock-agents';

@Injectable()

export class AgentService {
  
  getAgents(): Promise<Agent[]> {
  return Promise.resolve(AGENTS);
  }

  getAgentsSlowly(): Promise<Agent[]> {
  return new Promise(resolve => {
    // Simulate server latency with 2 second delay
    setTimeout(() => resolve(this.getAgents()), 2000);
  });
  }

}
