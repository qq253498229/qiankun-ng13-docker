import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  listOfData: {
    title?: string,
    storeName?: string,
    pic?: string,
    collect?: boolean,
  }[] = [];

  constructor() {
  }

  ngOnInit(): void {
    for (let i = 0; i < 25; i++) {
      this.listOfData.push({
        title: '微软（Microsoft）日版 Xbox Series S 新世代主机 家用家庭高清电视游',
        storeName: '数码海外京东自营专区',
        pic: 'https://img10.360buyimg.com/n7/jfs/t1/184935/32/24126/81050/625e67e6E3800775d/71d28ddf287dceca.jpg',
        collect: false,
      });
    }
  }

}
