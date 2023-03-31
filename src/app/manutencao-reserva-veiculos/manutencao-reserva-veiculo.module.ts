import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { SharedLibrariesGeralModule } from '@linx/shared-libraries/geral';
import { LoadingService, SharedLibrariesUtilsModule } from '@linx/shared-libraries/utils';
import { AuthenticationModule } from '../../authentication';
import { ConsultaReservaVeiculoComponent } from './components/consulta-reserva-veiculo/consulta-reserva-veiculo.component';
import { ManutencaoReservaVeiculoComponent } from './components/manutencao-reserva-veiculo/manutencao-reserva-veiculo.component';
import { PageManutencaoReservaVeiculoComponent } from './pages';
import { ReservaVeiculoContextService } from './services/reserva-veiculo-context.service';
@NgModule({
    declarations: [
        PageManutencaoReservaVeiculoComponent,
        ConsultaReservaVeiculoComponent,
        ManutencaoReservaVeiculoComponent
    ],
    imports: [
        CommonModule,
        SharedLibrariesGeralModule,
        SharedLibrariesUtilsModule,
        MatTabsModule,
        AuthenticationModule
    ],
    exports: [
        PageManutencaoReservaVeiculoComponent
    ],
    providers: [
        ReservaVeiculoContextService,
        LoadingService
    ]
})
export class ManutencaoReservaVeiculoModule { }
