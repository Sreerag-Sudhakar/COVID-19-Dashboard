import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-case-card',
  templateUrl: './case-card.component.html',
  styleUrls: ['./case-card.component.scss']
})
export class CaseCardComponent implements OnInit {

  @Input()
  title:string = '';
  @Input()
  count:number = 0;

  constructor() { }

  ngOnInit(): void {
  }

}
