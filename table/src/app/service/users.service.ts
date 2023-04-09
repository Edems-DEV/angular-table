import { Injectable, PipeTransform } from '@angular/core';

import { BehaviorSubject, Observable, of, Subject } from 'rxjs';

import { User } from '../models/user';
import { DecimalPipe } from '@angular/common';
import { debounceTime, delay, switchMap, tap } from 'rxjs/operators';
import { SortColumn, SortDirection } from './sortable.directive';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  //simulate a database data
  private users: User[] = [
    {
      id: 1,
      name: 'Joe',
      email: 'Joe@gmail.com',
      interval: '12345',
    },
    {
      id: 2,
      name: 'Bob',
      email: 'Bob@gmail.com',
      interval: '12345',
    },
    {
      id: 3,
      name: 'Alice',
      email: 'Alice@gmail.com',
      interval: '12345',
    },
    {
      id: 4,
      name: 'Foo',
      email: 'Foo@gmail.com',
      interval: '12345',
    },
  ];

  constructor() {}

  public findAll(): User[] {
    return this.users;
  }

  public findById(id: number): User | null {
    for (let item of this.users) {
      if (item.id === id) {
        return item;
      }
    }

    return null;
  }
}

interface SearchResult {
  items: User[];
  total: number;
}

interface State {
  page: number;
  pageSize: number;
  searchTerm: string;
  sortColumn: SortColumn;
  sortDirection: SortDirection;
}

const compare = (v1: string | number, v2: string | number) =>
  v1 < v2 ? -1 : v1 > v2 ? 1 : 0;

function sort(items: User[], column: SortColumn, direction: string): User[] {
  if (direction === '' || column === '') {
    return items;
  } else {
    return [...items].sort((a, b) => {
      const res = compare(a[column], b[column]);
      return direction === 'asc' ? res : -res;
    });
  }
}

//each model has a different set of properties
function matches(user: User, term: string, pipe: PipeTransform) {
  return (
    user.name.toLowerCase().includes(term.toLowerCase()) ||
    pipe.transform(user.email).includes(term) ||
    pipe.transform(user.id).includes(term)
  );
}

@Injectable({ providedIn: 'root' })
export class UserService {
  private _loading$ = new BehaviorSubject<boolean>(true);
  private _search$ = new Subject<void>();
  private _items$ = new BehaviorSubject<User[]>([]);
  private _total$ = new BehaviorSubject<number>(0);

  private _state: State = {
    page: 1,
    pageSize: 4,
    searchTerm: '',
    sortColumn: '',
    sortDirection: '',
  };

  constructor(private pipe: DecimalPipe) {
    this._search$
      .pipe(
        tap(() => this._loading$.next(true)),
        debounceTime(200),
        switchMap(() => this._search()),
        delay(200),
        tap(() => this._loading$.next(false))
      )
      .subscribe((result) => {
        this._items$.next(result.items);
        this._total$.next(result.total);
      });

    this._search$.next();
  }

  get items$() {
    return this._items$.asObservable();
  }
  get total$() {
    return this._total$.asObservable();
  }
  get loading$() {
    return this._loading$.asObservable();
  }
  get page() {
    return this._state.page;
  }
  get pageSize() {
    return this._state.pageSize;
  }
  get searchTerm() {
    return this._state.searchTerm;
  }

  set page(page: number) {
    this._set({ page });
  }
  set pageSize(pageSize: number) {
    this._set({ pageSize });
  }
  set searchTerm(searchTerm: string) {
    this._set({ searchTerm });
  }
  set sortColumn(sortColumn: SortColumn) {
    this._set({ sortColumn });
  }
  set sortDirection(sortDirection: SortDirection) {
    this._set({ sortDirection });
  }

  private _set(patch: Partial<State>) {
    Object.assign(this._state, patch);
    this._search$.next();
  }

  private _search(): Observable<SearchResult> {
    const { sortColumn, sortDirection, pageSize, page, searchTerm } =
      this._state;

    // 1. sort
    //let items = sort(COUNTRIES, sortColumn, sortDirection);
    let items = UsersService.findAll();

    // 2. filter
    items = items.filter(
      (user) => matches(user, searchTerm, this.pipe)
      //use of matches => import specific model
    );
    const total = items.length;

    // 3. paginate
    items = items.slice(
      (page - 1) * pageSize,
      (page - 1) * pageSize + pageSize
    );
    return of({ items, total });
  }
}
