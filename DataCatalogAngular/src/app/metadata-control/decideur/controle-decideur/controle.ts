export interface controle {
    referenceControle?:number;
    dateHeureControle:Date;
    vulnerabilite: Risque ;
    rapportScanControle:String;

    
}
export enum Risque{
    FAIBLE='faible'
    ,MOYENNE='moyenne'
    ,ELEVEE='elevee',

}