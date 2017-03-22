import { Component, Input } from '@angular/core';

import { Agent } from './agent';
import { AGENTS } from './mock-agents';

import { AgentService } from './agent.service';

@Component({
    moduleId: module.id,
    selector: 'my-agent',
    templateUrl: 'agent.component.html'
})

export class AgentComponent {
    pageTitle = 'Hello World Here You go..';
    imageWidth: number = 250;
    imageMargin: number = 250;
    showImage: boolean = false;
    agents: Agent[];
    selectedAgent: Agent;
    
    @Input()
    agent: Agent;
    //agents = AGENTS;

      constructor(private agentService: AgentService) { }

  getAgents(): void {
    this.agentService.getAgents().then(agents => this.agents = agents);
    //this.agentService.getAgentsSlowly().then(agents => this.agents = agents);
  }

  ngOnInit(): void {
    this.getAgents();
  }

  onSelect(agent: Agent): void {
    this.selectedAgent = agent;
  }
    toggleImage(): void {
        this.showImage = !this.showImage;
    }
}

