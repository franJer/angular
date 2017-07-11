import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddRemoveDomComponent } from './add-remove-dom.component';

describe('AddRemoveDomComponent', () => {
  let component: AddRemoveDomComponent;
  let fixture: ComponentFixture<AddRemoveDomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddRemoveDomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddRemoveDomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
