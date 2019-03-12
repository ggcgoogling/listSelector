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
  public selectedItems: Array<any> = [];
  public selectedItems2: Array<any> = [];

  @ContentChild(TemplateRef)
  template: TemplateRef<any>;

  constructor() { }

  ngOnInit() {
  }

  moveSelectedToList(): void {
    this.moveElementsFromAtoB(this.selectedItems2, this.list2, this.list);
  }

  moveAllToList(): void {
    this.moveAllFromAToB(this.list2, this.list);
    this.selectedItems2 = [];
  }

  selectFromList(element: any): void {
    this.selectFromListX(element, this.selectedItems);
  }

  moveSelectedToList2(): void {
    this.moveElementsFromAtoB(this.selectedItems, this.list, this.list2);
  }

  moveAllToList2(): void {
    this.moveAllFromAToB(this.list, this.list2);
    this.selectedItems = [];
  }

  selectFromList2(element: any): void {
    this.selectFromListX(element, this.selectedItems2);
  }

  private moveElementsFromAtoB(selectedItems: Array<any>, listA: Array<any>, listB: Array<any>): void {
    if (selectedItems && selectedItems.length > 0) {
      while (selectedItems.length > 0) {
        const element = selectedItems[0];
        const index = listA.indexOf(element);
        if (index !== -1) {
          if (!this.doesAlreadyExist(element, listB)) {
            listB.push(element);
          }
          listA.splice(index, 1);
        }
        selectedItems.shift();
      }
    }
  }

  private moveAllFromAToB(listA: Array<any>, listB: Array<any>): void {
    while (listA.length > 0) {
      this.moveElementsFromAtoB([listA[0]], listA, listB);
    }
  }

  private selectFromListX(element: any, list: Array<any>): void {
    if (this.isSelected(element, list)) {
      const index = list.indexOf(element);
        if (index !== -1) {
          list.splice(index, 1);
        }
    } else {
      list.push(element);
    }
  }

  private isSelected(element: any, list: Array<any>): boolean {
    const index = list.indexOf(element);
    return index !== -1;
  }

  private doesAlreadyExist(element: any, list: Array<any>): boolean {
    let exists = this.id !== undefined && this.id !== null && this.id !== '';
    if (exists) {
      exists = list.find(item => item[this.id] === element[this.id]) !== undefined;
    }
    return exists;
  }

}
