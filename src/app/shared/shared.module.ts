import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { TranslateModule } from '@ngx-translate/core';
import { EndgameDatabaseService } from './endgame.database.service';
import { MiscService } from './misc.service';
import { ConfigurationService } from './configuration.service';
import { StockfishService } from './stockfish.service';
import { ChunksPipe } from './chunk.pipe';

const providers = [EndgameDatabaseService, MiscService, ConfigurationService, StockfishService];

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        TranslateModule.forChild()
    ],
    declarations: [ChunksPipe],
    providers: [
    ],
    exports: [
        CommonModule,
        FormsModule,
        IonicModule,
        TranslateModule,
        ChunksPipe
    ]
})
export class SharedModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: SharedModule,
            providers: [...providers]
        };
    }
}
