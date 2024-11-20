import { Component, OnInit } from '@angular/core';
import { BreweryService } from '../services/brewery.service';
import { InfiniteScrollCustomEvent } from '@ionic/angular';
import { Brewery } from '../models/brewery';

@Component({
  selector: 'app-home',
  template: `
    <ion-header>
      <ion-toolbar color="primary">
        <ion-title>Brewhaus App</ion-title>
      </ion-toolbar>
      <ion-toolbar>
        <ion-row>
          <ion-col size="8">
            <ion-searchbar
              [(ngModel)]="searchTerm"
              (ionInput)="handleSearch($event)"
              [debounce]="500"
              placeholder="Search breweries..."
            ></ion-searchbar>
          </ion-col>
          <ion-col size="4">
            <ion-select 
              [(ngModel)]="selectedType"
              (ionChange)="handleSearch($event)"
              placeholder="Type"
              interface="popover"
            >
              <ion-select-option value="">All</ion-select-option>
              <ion-select-option value="micro">Micro</ion-select-option>
              <ion-select-option value="brewpub">Brewpub</ion-select-option>
              <ion-select-option value="large">Large</ion-select-option>
              <ion-select-option value="regional">Regional</ion-select-option>
              <ion-select-option value="contract">Contract</ion-select-option>
            </ion-select>
          </ion-col>
        </ion-row>
      </ion-toolbar>
    </ion-header>

    <ion-content>
      <ion-list>
        <ion-item *ngFor="let brewery of breweries" [routerLink]="['/brewery', brewery.id]" detail="true">
          <ion-thumbnail style="height: fit-content;" slot="start" class="ion-margin-end">
            <img src="brewery.image | ../../../../assets/beer-mug.svg" alt="Brewery thumbnail"/>
          </ion-thumbnail>
          <ion-label>
            <h2 class="font-bold">{{ brewery.name }}</h2>
            <p>{{ brewery.city }}, {{ brewery.state }}</p>
            <ion-text color="secondary" style="font-variant:small-caps;">{{ brewery.brewery_type }}</ion-text>
          </ion-label>
        </ion-item>
      </ion-list>

      <ion-infinite-scroll (ionInfinite)="loadMore($event)">
        <ion-infinite-scroll-content
          loadingSpinner="bubbles"
          loadingText="Loading more breweries...">
        </ion-infinite-scroll-content>
      </ion-infinite-scroll>
    </ion-content>
  `
})
export class HomePage implements OnInit {
  breweries: Brewery[] = [];
  currentPage = 1;
  searchTerm = '';
  selectedType = '';

  constructor(private breweryService: BreweryService) {}

  ngOnInit() {
    this.loadBreweries();
  }

  loadBreweries() {
    this.breweryService.getBreweries(this.currentPage, 10, this.selectedType).subscribe(
      (data) => {
        this.breweries = [...this.breweries, ...data];
      }
    );
  }

  handleSearch(event: any) {
    const query = this.searchTerm.toLowerCase();
    if (query.length > 2) {
      this.breweryService.searchBreweries(query, this.selectedType).subscribe(
        (data) => {
          this.breweries = data;
        }
      );
    } else if (query.length === 0) {
      this.currentPage = 1;
      this.breweries = [];
      this.loadBreweries();
    }
  }

  loadMore(event: InfiniteScrollCustomEvent) {
    this.currentPage++;
    this.loadBreweries();
    event.target.complete();
  }
}