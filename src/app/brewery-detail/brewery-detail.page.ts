import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BreweryService } from '../services/brewery.service';
import { Brewery } from '../models/brewery';

@Component({
  selector: 'app-brewery-detail',
  styles: [
    `
      ion-item-divider {
        --color: var(--ion-color-tertiary);
      }
    `,
  ],
  template: `
    <ion-header>
      <ion-toolbar color="primary">
        <ion-buttons slot="start">
          <ion-back-button defaultHref="/"></ion-back-button>
        </ion-buttons>
        <ion-title>{{ brewery?.name || 'Brewery Details' }}</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content>
      <ion-card *ngIf="brewery" class="ion-text-center">
        <img
          src="../../assets/beer-mug.svg"
          alt="Brewery image"
          style="height: 300px;"
        />

        <ion-card-header>
          <ion-card-title class="text-2xl font-bold">{{
            brewery.name
          }}</ion-card-title>
          <ion-card-subtitle style="font-variant:small-caps">{{
            brewery.brewery_type || 'Type not specified'
          }}</ion-card-subtitle>
        </ion-card-header>

        <ion-card-content>
          <ion-list>
            <!-- Location Information -->
            <ion-item-group>
              <ion-item-divider>
                <ion-label>Brewery Type</ion-label>
              </ion-item-divider>
              <ion-item>
                <ion-label style="font-variant:small-caps">{{
                  brewery.brewery_type || 'Type not specified'
                }}</ion-label>
              </ion-item>
              <ion-item-divider>
                <ion-label>Location</ion-label>
              </ion-item-divider>

              <ion-item>
                <ion-label>
                  <!-- <h3>Street</h3>
                  <p>{{ brewery.street || 'Not provided' }}</p> -->
                  <div class="space-y-1">
                    <p *ngIf="brewery.street" class="text-gray-700">
                      {{ brewery.street }}
                    </p>
                    <p class="text-gray-700">
                      {{ brewery.city
                      }}{{ brewery.state ? ', ' + brewery.state : '' }}
                      {{ brewery.postal_code }}
                    </p>
                    <p class="text-gray-700">{{ brewery.country }}</p>
                  </div>
                </ion-label>
                <ion-icon
                  name="map-outline"
                  color="secondary"
                  slot="end"
                  size="large"
                  *ngIf="
                    (brewery.latitude && brewery.longitude) ||
                    (brewery.street &&
                      brewery.city &&
                      brewery.state &&
                      brewery.postal_code)
                  "
                  (click)="openMap()"
                ></ion-icon>
              </ion-item>
            </ion-item-group>

            <!-- Contact Information -->
            <ion-item-group>
              <ion-item-divider>
                <ion-label>Contact</ion-label>
              </ion-item-divider>

              <ion-item>
                <ion-label>
                  <h3>Phone</h3>
                  <p>{{ brewery.phone || 'Not provided' }}</p>
                </ion-label>
                <ion-button
                  slot="end"
                  fill="clear"
                  *ngIf="brewery.phone"
                  href="tel:{{ brewery.phone }}"
                >
                  <ion-icon color="secondary" name="call" slot="icon-only" size="large"></ion-icon>
                </ion-button>
              </ion-item>

              <ion-item>
                <ion-label>
                  <h3>Website</h3>
                  <p>{{ brewery.website_url || 'Not provided' }}</p>
                </ion-label>
                <ion-button
                  slot="end"
                  fill="clear"
                  *ngIf="brewery.website_url"
                  [href]="brewery.website_url"
                  target="_blank"
                >
                  <ion-icon color="secondary" name="open" size="large" slot="icon-only"></ion-icon>
                </ion-button>
              </ion-item>
            </ion-item-group>
          </ion-list>
        </ion-card-content>
      </ion-card>
    </ion-content>
  `,
})
export class BreweryDetailPage implements OnInit {
  brewery: Brewery | null = null;

  constructor(
    private route: ActivatedRoute,
    private breweryService: BreweryService
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.breweryService.getBreweryById(id).subscribe((data) => {
        this.brewery = data;
      });
    }
  }

  openMap() {
    if (
      this.brewery?.street &&
      this.brewery?.city &&
      this.brewery.state &&
      this.brewery.postal_code
    ) {
      window.open(
        `https://www.google.com/maps/search/?api=1&query=${this.brewery.street},${this.brewery.city},${this.brewery.state},${this.brewery.postal_code}`,
        '_blank'
      );
    } else if (this.brewery?.latitude && this.brewery?.longitude) {
      window.open(
        `https://www.google.com/maps/search/?api=1&query=${this.brewery.latitude},${this.brewery.longitude}`,
        '_blank'
      );
    }
  }
}
