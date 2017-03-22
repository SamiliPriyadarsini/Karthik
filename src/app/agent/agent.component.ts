import { Component, Input } from '@angular/core';

import { Agent } from './agent';

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
    
    @Input()
    agent: Agent;
    //agents = AGENTS;

    toggleImage(): void {
        this.showImage = !this.showImage;
    }
}

