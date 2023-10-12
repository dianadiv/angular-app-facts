import { AfterViewChecked, Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { faHeart, faPencil } from '@fortawesome/free-solid-svg-icons';
import { Fact } from 'src/app/types/facts';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements AfterViewChecked {
  @Output() like = new EventEmitter();

  @Input()
  fact!: Fact;

  @ViewChild('field') field?: ElementRef

  faHeart = faHeart;
  faPencil = faPencil;
  editing = false;
  value = '';

  ngAfterViewChecked(): void {
    this.field?.nativeElement.focus()
  }

  edit() {
    this.editing = true;
    this.value = this.fact.title;
  }

  save() {
    if (!this.editing) {
      return;
    }
    
    this.editing = false;
    this.fact.title = this.value;
  }
}
