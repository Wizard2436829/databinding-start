import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
})
export class ServerElementComponent implements OnInit {
  @Input('srvElement') element: { name: string; type: string; content: string };

  /* 
  Use @Input() to expose the property that you wanna bind to using an external component.
  */

  constructor() {}

  ngOnInit(): void {}
}
