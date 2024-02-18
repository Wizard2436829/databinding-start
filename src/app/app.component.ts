import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  serverElements = [
    { type: 'server', name: 'TestServer', content: 'JustTesting' },
  ];

  onAddServer(newServerData = { serverName: '', serverContent: '' }) {
    this.serverElements.push({
      type: 'server',
      name: newServerData.serverName,
      content: newServerData.serverContent,
    });
  }

  onAddBlueprint(newBlueprintData = { serverName: '', serverContent: '' }) {
    this.serverElements.push({
      type: 'blueprint',
      name: newBlueprintData.serverName,
      content: newBlueprintData.serverContent,
    });
  }
}
