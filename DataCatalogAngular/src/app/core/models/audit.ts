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
   FAIBLE='faible'
   ,MOYENNE='moyenne'
   ,ELEVEE='elevee',

}
export enum Etat{
   CORRIGE='corrige',
   NONCORRIGE='noncoriger'
}