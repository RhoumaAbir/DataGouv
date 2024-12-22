export interface controle {
    referenceControle?:number;
    dateHeureControle:Date;
    vulnerabilite: Risque ;
    rapportScanControle:String;

    
}
export enum Risque{
    FAIBLE='FAIBLE'
    ,MOYENNE='MOYENNE'
    ,ELEVEE='ELEVEE',

}