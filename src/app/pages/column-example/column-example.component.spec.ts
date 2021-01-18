import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColumnExampleComponent } from './column-example.component';

describe('ColumnExampleComponent', () => {
  let component: ColumnExampleComponent;
  let fixture: ComponentFixture<ColumnExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColumnExampleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ColumnExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
