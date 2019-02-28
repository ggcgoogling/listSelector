import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-list-selector',
  templateUrl: './list-selector.component.html',
  styleUrls: ['./list-selector.component.css']
})
export class ListSelectorComponent implements OnInit {
  @Input() public list: Array<any>;
  public list2: Array<any> = [];
  public selectedItem: any;
  public selectedItem2: any;

  constructor() { }

  ngOnInit() {
  }

  moveAllToList2(): void {
    this.list2 = this.list2.concat(this.list);
    this.list = [];
  }

  moveSelectedToList2(): void {
    this.moveElementFromAtoB(this.selectedItem, this.list, this.list2);
  }

  moveSelectedToList(): void {
    this.moveElementFromAtoB(this.selectedItem2, this.list2, this.list);
  }

  moveAllToList(): void {
    this.list = this.list.concat(this.list2);
    this.list2 = [];
  }

  private moveElementFromAtoB(element: any, listA: Array<any>, listB: Array<any>): void {
    if (element) {
      const index = listA.indexOf(element);
      if (index !== -1) {
        listB.push(element);
        listA.splice(index, 1);
      }
    }
  }

}
