export function load_prestation_example_images(): string[] {
    // chemin relatif depuis ce fichier vers le dossier des images
    const modules = import.meta.glob(
      "/src/images/prestation/examples/*.{png,jpg,jpeg,svg}",
      { eager: true } // importe tout immédiatement
    );
  
    // retourne un tableau des chemins importés
    return Object.values(modules).map((module: any) => module.default);
  }