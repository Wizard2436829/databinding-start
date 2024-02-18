import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css'],
})
export class CockpitComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  @Output() serverAdded = new EventEmitter<{
    serverName: string;
    serverContent: string;
  }>();
  @Output() blueprintAdded = new EventEmitter<{
    serverName: string;
    serverContent: string;
  }>();

  // newServerName = '';
  // newServerContent = '';

  onAddServer(
    newServerName: HTMLInputElement,
    newServerContent: HTMLInputElement
  ) {
    this.serverAdded.emit({
      serverName: newServerName.value,
      serverContent: newServerContent.value,
    });
  }

  onAddBlueprint(
    newServerName: HTMLInputElement,
    newServerContent: HTMLInputElement
  ) {
    this.blueprintAdded.emit({
      serverName: newServerName.value,
      serverContent: newServerContent.value,
    });
  }
}
