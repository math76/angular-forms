import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { Person } from "./person";

@Injectable({
  providedIn: "root"
})
export class PersonService {
  person$: BehaviorSubject<Person> = new BehaviorSubject<Person>(
    new Person("", "")
  );

  findPerson(): BehaviorSubject<Person> {
    return this.person$;
  }

  loadPerson() {
    var p: Person = new Person();
    p.name = "jan";
    p.surname = "kowalski";
    this.person$.next(p);
  }
}
