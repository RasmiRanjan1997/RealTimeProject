import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewTicketsComponent } from './new-tickets.component';

describe('NewTicketsComponent', () => {
  let component: NewTicketsComponent;
  let fixture: ComponentFixture<NewTicketsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewTicketsComponent]
    });
    fixture = TestBed.createComponent(NewTicketsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
