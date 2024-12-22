export enum Typeorganisation {
    ORGANISATION = 'ORGANISATION',
    ENTREPRISE = 'ENTREPRISE',
}
export class Organisation {

    idOrganisation!: number;
    nomOrganisation!: string;
    typeOrganisation!: Typeorganisation;
    paysOrganisation!: string;
    nieOrganisation!: string;
    nbrDecideurEntreprise!: number | null;
    nbrAnalystesEntreprise!: number | null;

    /*
        private Long idOrganisation;
    private String nomOrganisation;
    private TypeOrganisation typeOrganisation;
    private String paysOrganisation;
    private String nieOrganisation;
    private Integer nbrDecideurEntreprise;
    private Integer nbrAnalystesEntreprise;
    
    */
}


