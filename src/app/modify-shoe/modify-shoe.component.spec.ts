import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifyShoeComponent } from './modify-shoe.component';

describe('ModifyShoeComponent', () => {
  let component: ModifyShoeComponent;
  let fixture: ComponentFixture<ModifyShoeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModifyShoeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModifyShoeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
