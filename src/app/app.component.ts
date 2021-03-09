import { Component } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { Person } from "./person";
import { PersonService } from "./personService";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  name = "Angular";
  person$: BehaviorSubject<Person>;

  public constructor(public personService: PersonService) {
    this.person$ = personService.findPerson();
  }

  load() {
    this.personService.loadPerson();
  }
}
