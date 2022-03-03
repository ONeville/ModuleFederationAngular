import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { MicrofrontendService } from './microfrontends/microfrontend.service';
import { AppRoutingModule } from './app-routing.module';

export function initializeApp(mfService: MicrofrontendService): () => Promise<void> {
  return () => mfService.initialise();
}

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // RouterModule.forRoot(APP_ROUTES),
  ],
  providers: [
    MicrofrontendService,
    {
      provide: APP_INITIALIZER,
      useFactory: initializeApp,
      multi: true,
      deps: [MicrofrontendService],
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
