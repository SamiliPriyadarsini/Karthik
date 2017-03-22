import { Component, OnInit } from '@angular/core';

import { Agent } from './agent/agent';
import { AGENTS } from './agent/mock-agents';

import { AgentService } from './agent/agent.service';

@Component({
  moduleId: module.id,
  selector: 'my-app',
  templateUrl: 'app.component.html',
  styles: ['app.component.css'],
  providers: [AgentService]
})

export class AppComponent implements OnInit {
  title = 'The Portal of S.H.I.E.L.D';
  agents: Agent[];
  selectedAgent: Agent;

  constructor(private agentService: AgentService) { }

  getAgents(): void {
    this.agentService.getAgents().then(agents => this.agents = agents);
  }

  ngOnInit(): void {
    this.getAgents();
  }

  onSelect(agent: Agent): void {
    this.selectedAgent = agent;
  }



}