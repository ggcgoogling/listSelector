import { Component, OnInit, Input, TemplateRef, ContentChild } from '@angular/core';

@Component({
  selector: 'app-list-selector',
  templateUrl: './list-selector.component.html',
  styleUrls: ['./list-selector.component.css']
})
export class ListSelectorComponent implements OnInit {
  @Input() public list: Array<any> = [];
  @Input() public list2: Array<any> = [];
  @Input() public id: string;
  public selectedItem: any;
  public selectedItem2: any;

  @ContentChild(TemplateRef)
  template: TemplateRef<any>;

  constructor() { }

  ngOnInit() {
  }

  moveSelectedToList(): void {
    this.moveElementFromAtoB(this.selectedItem2, this.list2, this.list);
  }

  moveAllToList(): void {
    this.moveAllFromAToB(this.list2, this.list);
  }

  moveSelectedToList2(): void {
    this.moveElementFromAtoB(this.selectedItem, this.list, this.list2);
  }

  moveAllToList2(): void {
    this.moveAllFromAToB(this.list, this.list2);
  }

  private moveElementFromAtoB(element: any, listA: Array<any>, listB: Array<any>): void {
    if (element) {
      const index = listA.indexOf(element);
      if (index !== -1) {
        if (!this.doesAlreadyExist(element, listB)) {
          listB.push(element);
        }
        listA.splice(index, 1);
      }
    }
  }

  private moveAllFromAToB(listA: Array<any>, listB: Array<any>): void {
    while (listA.length > 0) {
      this.moveElementFromAtoB(listA[0], listA, listB);
    }
  }

  private doesAlreadyExist(element: any, list: Array<any>): boolean {
    let exists = this.id !== undefined && this.id !== null && this.id !== '';
    if (exists) {
      exists = list.find(item => item[this.id] === element[this.id]) !== undefined;
    }
    return exists;
  }

}
