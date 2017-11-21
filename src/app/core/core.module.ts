import { HttpClient } from '@angular/common/http';
import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { CustomFormsModule } from 'ng2-validation';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ModalModule } from 'ngx-bootstrap/modal';
import { PopoverModule } from 'ngx-bootstrap/popover';
import { FooterModule } from '../shell/components/footer/footer.module';
import { HeaderModule } from '../shell/components/header/header.module';
import { GlobalConfiguration } from './configurations/global.configuration';
import { StyleWrapperDirective } from './directives/style-wrapper.directive';
import { UserDetailService } from './services/account-login/user-detail.service';
import { ApiService } from './services/api.service';
import { CartStatusService } from './services/cart-status/cart-status.service';
import { CustomErrorHandler } from './services/custom-error-handler';
import { translateFactory } from './services/custom-translate-loader';
import { ErrorCodeMappingService } from './services/error-code-mapping.service';
import { CurrentLocaleService } from './services/locale/current-locale.service';
import { ProductCompareService } from './services/product-compare/product-compare.service';
import { StatePropertiesService } from './services/state-transfer/state-properties.service';


@NgModule({
  imports: [
    FooterModule,
    HeaderModule,
    BsDropdownModule.forRoot(),
    CarouselModule.forRoot(),
    CollapseModule.forRoot(),
    ModalModule.forRoot(),
    PopoverModule.forRoot(),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: translateFactory,
        deps: [HttpClient]
      }
    }),
    CustomFormsModule
  ],
  declarations: [
    StyleWrapperDirective
  ],
  providers: [
    ApiService,
    CustomErrorHandler,
    ProductCompareService,
    UserDetailService,
    CurrentLocaleService,
    CartStatusService,
    GlobalConfiguration,
    ErrorCodeMappingService,
    StatePropertiesService
  ],
  exports: [
    FooterModule,
    HeaderModule,
    StyleWrapperDirective
  ]
})
export class CoreModule {

  public static forRoot(): ModuleWithProviders {
    return {
      ngModule: CoreModule,
      providers: []
    };
  }

  constructor(
    @Optional() @SkipSelf() parentModule: CoreModule
  ) {
    if (parentModule) {
      throw new Error(
        'CoreModule is already loaded. Import it in the AppModule only');
    }
  }
}
