import { DonneeParent } from '../model/DonneeParent';
export interface Historique{
  idHistorique? :number;
  typeOperation? :string;
  dateOperation?: Date;
  matriculeUtilisateur ?:string;
  details ?:string;
  idDonneeParent: number | null;
  donneeParent: number | null;
  }
  