import { VrednostStavkeOsiguranja } from './vrednost-stavke-osiguranja';

export class StavkaOsiguranja {

    constructor(
    public id:number = 0,
    public version:number = 0,
    public naziv:string = '',
    public vrednosti: VrednostStavkeOsiguranja[]
    ) {

    }
}
