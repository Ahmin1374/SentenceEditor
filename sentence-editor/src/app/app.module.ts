import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContainerComponent } from './core/container/container.component';
import { SenetencesContainerComponent } from './modules/sentences/container/senetences-container/senetences-container.component';
import { SentenceTableComponent } from './modules/sentences/component/sentence-table/sentence-table.component';
import { SentenceItemComponent } from './modules/sentences/component/sentence-item/sentence-item.component';
import {MatIconModule} from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import featureReducer from './modules/sentences/state/feature.reducer';
import { EffectsModule } from '@ngrx/effects';
import { SentenceTableEffect } from './modules/sentences/state/sentence-table/sentenceTable.effect';
import { SentencesApiService } from './modules/sentences/api/sentences-api.service';
import { HttpClientModule } from '@angular/common/http';
import { SetencesFacadeService } from './modules/sentences/sentences-facade.service';
@NgModule({
  declarations: [
    AppComponent,
    ContainerComponent,
    SenetencesContainerComponent,
    SentenceTableComponent,
    SentenceItemComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    BrowserAnimationsModule,
    StoreModule.forRoot({}),
    StoreModule.forFeature('sentenceEditor',featureReducer),
    EffectsModule.forRoot([]),
    EffectsModule.forFeature([SentenceTableEffect]),
    HttpClientModule

  ],
  providers: [SentencesApiService,SetencesFacadeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
