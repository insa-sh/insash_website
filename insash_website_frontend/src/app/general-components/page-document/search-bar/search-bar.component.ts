import {
  Component,
  EventEmitter,
  Input,
  Output,
  ChangeDetectorRef,
} from "@angular/core";
import { FormArray, FormBuilder, FormControl } from "@angular/forms";
import { ActivatedRoute } from "@angular/router";
import { Subscription } from "rxjs";
import { DocumentService } from "src/app/interaction-backend/document.service";
import { Member } from "src/app/models/member";
import { Tag } from "src/app/models/tag";

@Component({
  selector: "app-search-bar",
  templateUrl: "./search-bar.component.html",
  styleUrls: ["./search-bar.component.css"],
})
export class SearchBarComponent {
  @Input() isItAnArticle: boolean = true;

  public authors: Member[] = [];
  public tags: Tag[] = [];
  public dates: string[] = [];
  public sortOptions: string[] = ["Plus récent", "Plus ancien", "A-Z", "Z-A"];

  public search: FormControl = new FormControl("");
  public formChangesSubscription: Subscription = new Subscription();

  @Output() filterChanged = new EventEmitter<any>();

  constructor(
    private documentService: DocumentService,
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private cdr: ChangeDetectorRef
  ) {}

  public filterForm = this.fb.group({
    authors: this.fb.array([]),
    tags: this.fb.array([]),
    dates: this.fb.array([]),
    sort: ["Plus récent"],
  });

  fetchTags() {
    this.route.data.subscribe((data) => {
      this.tags = data["documentTags"]["data"];
      this.addTagsCheckboxes();
    });
  }

  fetchAuthors() {
    this.route.data.subscribe((data) => {
      this.authors = data["documentAuthors"]["data"];
      this.addAuthorsCheckboxes();
    });
  }

  fetchYears() {
    this.route.data.subscribe((data) => {
      this.dates = Array.from(
        new Set(
          data["documentYears"]["data"].map((d: any) => d.date.split("-")[0])
        )
      );
      this.addDatesCheckboxes();
    });
  }

  isThereEnoughYears() {
    return this.dates != null && this.dates.length > 0;
  }

  isThereEnoughAuthors() {
    return this.authors != null && this.authors.length > 0;
  }

  isThereEnoughTags() {
    return this.authors != null && this.tags.length > 0;
  }

  private addTagsCheckboxes() {
    if (this.tags != null) {
      let tagsFormArray = this.filterForm.controls.tags as FormArray;
      this.tags.forEach(() => tagsFormArray.push(this.fb.control(false)));
    }
  }

  private addAuthorsCheckboxes() {
    if (this.authors != null) {
      let authorsFormArray = this.filterForm.controls.authors as FormArray;
      this.authors.forEach(() => authorsFormArray.push(this.fb.control(false)));
    }
  }

  private addDatesCheckboxes() {
    if (this.dates != null) {
      let datesFormArray = this.filterForm.controls.dates as FormArray;
      this.dates.forEach(() => datesFormArray.push(this.fb.control(false)));
    }
  }

  getSelectedAuthors() {
    let authorsFormArray = this.filterForm.controls.authors as FormArray;
    return this.authors
      .filter((_, i) => authorsFormArray.at(i) && authorsFormArray.at(i).value)
      .map((author) => author.username);
  }

  getSelectedTags() {
    let tagsFormArray = this.filterForm.controls.tags as FormArray;

    return this.tags
      .filter((_, i) => tagsFormArray.at(i) && tagsFormArray.at(i).value)
      .map((tag) => tag.titre);
  }

  getSelectedDates() {
    let datesFormArray = this.filterForm.controls.dates as FormArray;
    return this.dates.filter(
      (_, i) => datesFormArray.at(i) && datesFormArray.at(i).value
    );
  }

  onFormChange() {
    const selectedAuthors = this.getSelectedAuthors();
    const selectedTags = this.getSelectedTags();
    const selectedDates = this.getSelectedDates();
    const selectedSort = this.filterForm.get("sort")!.value;

    const filters = {
      authors: selectedAuthors,
      tags: selectedTags,
      dates: selectedDates,
      sort: selectedSort,
      search: this.search.value,
    };

    this.filterChanged.emit(filters);
  }

  resetSearch() {
    if (
      this.search.value.length >= 3 ||
      this.isSelectedAuthors() ||
      this.isSelectedTags() ||
      this.isSelectedDates()
    ) {
      this.search.setValue("");
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

    this.formChangesSubscription = this.filterForm.valueChanges.subscribe(
      () => {
        this.onFormChange();
      }
    );
  }

  ngOnDestroy(): void {
    if (this.formChangesSubscription) {
      this.formChangesSubscription.unsubscribe();
    }
  }
}
