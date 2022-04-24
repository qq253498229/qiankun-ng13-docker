import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: '[app-menu]',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  @Input() data: {
    label: string,
    router?: string,
    link?: string,
    sub?: any[]
  }[] = [];

  constructor() {
  }

  ngOnInit(): void {
  }

}
