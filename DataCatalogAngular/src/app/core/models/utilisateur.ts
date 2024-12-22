export enum Role {
    DECIDEUR = ' DECIDEUR',
    ANALYSTE = 'ANALYSTE',
    AUDITEUR = 'AUDITEUR',
    ADMINISTRATEUR = 'ADMINISTRATEUR',
}

export class Utilisateur {
    idUtilisateur!: number;
    roleUtilisateur!: Role;
    nomUtilisateur!: string;
    prenomUtilisateur!: string;
    matriculeUtilisateur!: string | null;
    identifiantUtilisateur!: string;
    emailUtilisateur!: string;
    telUtilisateur!: string | null;
    fonctionUtilisateur!: string | null;
    motDePasseUtil!: string;
    demandeValidation!: boolean | null;
    premiereConnection!: boolean | null;
    token!: string;

}