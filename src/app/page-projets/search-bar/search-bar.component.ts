import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { DocumentService } from 'src/app/interaction-backend/document.service';
import { Member } from 'src/app/interaction-backend/member';
import { DocumentType } from 'src/app/models/document';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent {
  
  public authors: Member[] = [];
  public tags: string[] = [];
  public dates: string[] = [];
  public sort: string[] = ["Plus récent", "Plus ancien", "A-Z", "Z-A"];
  public search: FormControl = new FormControl('');

  public formChangesSubscription: Subscription = new Subscription;

  @Input() typeOfDocuments: DocumentType = DocumentType.project;
  @Output() filterChanged = new EventEmitter<any>();

  constructor(private documentService: DocumentService, private route: ActivatedRoute, private fb: FormBuilder) {

  }

  filterForm = this.fb.group({
    authors: this.fb.array([]),
    tags: this.fb.array([]),
    dates: this.fb.array([]),
    sort: ['Plus récent']
  });

  fetchTags() {
    this.route.data.subscribe(
        (data) => {
          this.tags = data['documentTags'];
        })
  }

  fetchAuthors() {
    this.route.data.subscribe(
        (data) => {
          this.authors = data['documentAuthors'];
        })
  }

  fetchYears() {
    this.route.data.subscribe(
        (data) => {
          this.dates = data['documentYears'];
        })
  }

  isThereEnoughYears () {
    return this.dates.length > 0;
  }

  isThereEnoughAuthors () {
    return this.authors.length > 0;
  }

  isThereEnoughTags () {
    return this.tags.length > 0;
  }

  private addCheckboxes() {
    let tagsFormArray = this.filterForm.controls.tags as FormArray;
    let datesFormArray = this.filterForm.controls.dates as FormArray;
    let authorsFormArray = this.filterForm.controls.authors as FormArray;

    this.authors.forEach(() => authorsFormArray.push(this.fb.control(false)));
    this.tags.forEach(() => tagsFormArray.push(this.fb.control(false)));
    this.dates.forEach(() => datesFormArray.push(this.fb.control(false)));
  }

  getSelectedAuthors() {
    let authorsFormArray = this.filterForm.controls.authors as FormArray;
    return this.authors
      .filter((_, i) => authorsFormArray.at(i).value)
      .map(author => author.surname);
  }

  getSelectedTags() {
    let tagsFormArray = this.filterForm.controls.tags as FormArray;
    return this.tags
      .filter((_, i) => tagsFormArray.at(i).value);
  }

  getSelectedDates() {
    let datesFormArray = this.filterForm.controls.dates as FormArray;
    return this.dates
      .filter((_, i) => datesFormArray.at(i).value);
  }

  onFormChange() {
    const selectedAuthors = this.getSelectedAuthors();
    const selectedTags = this.getSelectedTags();
    const selectedDates = this.getSelectedDates();
    const selectedSort = this.filterForm.get('sort')!.value;

    const filters = {
      authors: selectedAuthors,
      tags: selectedTags,
      dates: selectedDates,
      sort: selectedSort,
      search: this.search.value
    };

    console.log(this.search.value);

    this.filterChanged.emit(filters);

  }

  resetSearch() 
  {
    if (this.search.value.length >= 3 || this.isSelectedAuthors() || this.isSelectedTags() || this.isSelectedDates()) {
      this.search.setValue('');
      this.filterForm.reset();
      this.onFormChange();
    }
    
  }

  isSelectedAuthors() {
    return this.getSelectedAuthors().length > 0;
  }

  isSelectedTags() {
    return this.getSelectedTags().length > 0;
  }

  isSelectedDates() {
    return this.getSelectedDates().length > 0;
  }


  ngOnInit() {
    this.fetchAuthors();
    this.fetchTags();
    this.fetchYears();

    this.addCheckboxes();

    // Souscrire aux changements du formulaire
    this.formChangesSubscription = this.filterForm.valueChanges.subscribe(() => {
      this.onFormChange();
    });


  }

  ngOnDestroy(): void {
    // Désabonner pour éviter les fuites de mémoire
    if (this.formChangesSubscription) {
      this.formChangesSubscription.unsubscribe();
    }
  }

}
