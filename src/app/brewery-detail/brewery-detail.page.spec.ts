import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BreweryDetailPage } from './brewery-detail.page';

describe('BreweryDetailPage', () => {
  let component: BreweryDetailPage;
  let fixture: ComponentFixture<BreweryDetailPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(BreweryDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
