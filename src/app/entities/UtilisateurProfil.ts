/**
 * Classe représentant un utilisateur.
 */
export class UtilisateurProfil {
  nom: string;
  prenom: string;
  email: string;
  nomCommune: string;
  listeIndicateur: string[];
  statutNotification: boolean;
  motDePasse: string;

  /**
   * Constructeur.
   * @param nom : string nom de l'utilisateur
   * @param prenom : string prénom de l'utilisateur
   * @param email : string email de l'utilisateur
   * @param nomCommune : string commune de résidence de l'utilisateur
   * @param listeIndicateur : string[] liste des indicateurs de l'utilisateur
   * @param statutNotification : boolean statut des notifications pour la commune de l'utilisateur
   * @param motDePasse : string mot de passe de l'utilisateur
   */
  constructor(nom: string, prenom: string, email: string, nomCommune: string,
              listeIndicateur: string[], statutNotification: boolean, motDePasse: string) {
    this.nom = nom;
    this.prenom = prenom;
    this.email = email;
    this.nomCommune = nomCommune;
    this.listeIndicateur = listeIndicateur;
    this.statutNotification = statutNotification;
    this.motDePasse = motDePasse;
  }
}
