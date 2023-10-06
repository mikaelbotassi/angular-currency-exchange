import { SharedModule } from 'src/app/shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PesoArgentinoCardComponent } from './peso-argentino/components/peso-argentino-card/peso-argentino-card.component';
import { LibraEsterlinaCardComponent } from './libra-esterlina/components/libra-esterlina-card/libra-esterlina-card.component';
import { DolarCanadenseCardComponent } from './dolar-canadense/components/dolar-canadense-card/dolar-canadense-card.component';
import { PesoArgentinoService } from './peso-argentino/services/peso-argentino.service';
import { LibraEsterlinaService } from './libra-esterlina/services/libra-esterlina.service';
import { DolarCanadenseService } from './dolar-canadense/services/dolar-canadense.service';
import { CardContentComponent } from '../components/card/card-content/card-content.component';
import { ErrorMessageComponent } from '../components/card/error-message/error-message.component';
import { CardHeaderComponent } from '../components/card/card-header/card-header.component';
import { CardComponent } from '../components/card/card.component';

@NgModule({
  declarations: [
    PesoArgentinoCardComponent,
    LibraEsterlinaCardComponent,
    DolarCanadenseCardComponent,
    CardComponent,
    CardContentComponent,
    ErrorMessageComponent,
    CardHeaderComponent,
  ],
  exports: [
    PesoArgentinoCardComponent,
    LibraEsterlinaCardComponent,
    DolarCanadenseCardComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  providers:[PesoArgentinoService, LibraEsterlinaService, DolarCanadenseService]
})
export class FeaturesModule { }
