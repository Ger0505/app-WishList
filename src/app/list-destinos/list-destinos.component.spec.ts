import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListDestinosComponent } from './list-destinos.component';

describe('ListDestinosComponent', () => {
  let component: ListDestinosComponent;
  let fixture: ComponentFixture<ListDestinosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListDestinosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListDestinosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
