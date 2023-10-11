import { Component, OnInit } from '@angular/core';
import { ContentService } from 'src/app/services/content.service';

import { Fact } from 'src/app/types/facts';

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss']
})
export class ContentListComponent implements OnInit {
  facts: Fact[] = [];

  constructor(
    private factsService: ContentService,
  ) {}

  // ngOnInit(): void {
  //   this.factsService.fetchData()
  //     .subscribe(res => {
  //       const { data } = res;
  //       const newData = [];
  //       for (let i = 0; i < data.length; i++) {
  //         newData.push({
  //           title: data[i],
  //           likes: Math.trunc(Math.random() * 100)
  //         })
  //       }
  //       this.facts = newData;
  //     })
  // }

  ngOnInit(): void {
    this.factsService.fetchData()
      .subscribe(res => {
        if (localStorage.getItem('cachedData')) {
          return;
        }

        const { data } = res;
        const newData = [];
        for (let i = 0; i < data.length; i++) {
          newData.push({
            title: data[i],
            likes: Math.trunc(Math.random() * 100)
          })
        }

        localStorage.setItem('cachedData', JSON.stringify(newData));
        this.facts = newData;
      })
  }

  handleLike(fact: Fact) {
    this.facts = this.facts.map(item => item === fact ? { ...item, likes: item.likes + 1 } : item)
  }
}
