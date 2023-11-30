import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { NavigationBarComponent } from './app/navigation-bar/navigation-bar.component';

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));

bootstrapApplication(NavigationBarComponent, appConfig)
  .catch((err) => console.error(err));
