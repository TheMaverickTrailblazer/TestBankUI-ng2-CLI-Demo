import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'bnk-client-info',
  templateUrl: './client-info.component.html'
})
export class ClientInfoComponent implements OnInit {
  @Input() clientId: number;
  constructor() { }

  ngOnInit() {
  }

}
