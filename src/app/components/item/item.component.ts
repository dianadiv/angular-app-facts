import { Component, Input } from '@angular/core';
import { faHeart, faPencil } from '@fortawesome/free-solid-svg-icons';
import { Fact } from 'src/app/types/facts';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent {
  faHeart = faHeart;
  faPencil = faPencil;

  @Input()
  fact!: Fact;
}
