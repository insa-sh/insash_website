import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent {
  @Input() nameFilter!: string;
  @Input() elements!: string[];
  @Input() isMultiple!: boolean;
  
}
