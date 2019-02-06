import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageInfoDialogComponent } from './image-info-dialog.component';

describe('ImageInfoDialogComponent', () => {
  let component: ImageInfoDialogComponent;
  let fixture: ComponentFixture<ImageInfoDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImageInfoDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageInfoDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
