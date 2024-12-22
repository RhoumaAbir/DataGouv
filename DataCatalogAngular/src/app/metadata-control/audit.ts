export interface controle {
    referenceAudit?:number;
  dateHeureAudit:Date;
    comforme:Boolean;
   causeProbleme:String ;
   fichierRapportAudit: String;
    etatAudit:Etat;
   alerteAudit: Risque ;

   
}
export enum Risque{
   FAIBLE='FAIBLE'
   ,MOYENNE='MOYENNE'
   ,ELEVEE='ELEVEE',

}
export enum Etat{
   CORRIGE='CORRIGE',
   NONCORRIGE='NONCORRIGE'
}