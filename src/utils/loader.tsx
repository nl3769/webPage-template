export function load_prestation_example_images(): string[] {
  // chemin relatif depuis ce fichier vers le dossier des images
  const modules = import.meta.glob(
    "/src/images/prestation/examples/*.{png,jpg,jpeg,svg}",
    { eager: true } // importe tout immédiatement
  );

  // retourne un tableau des chemins importés
  return Object.values(modules).map((module: any) => module.default);
}

export function load_prestation_sdb(): string[] {
  // chemin relatif depuis ce fichier vers le dossier des images
  const modules = import.meta.glob(
    "/src/images/prestation/sdb/*.{png,jpg,jpeg,svg}",
    { eager: true } // importe tout immédiatement
  );

  // retourne un tableau des chemins importés
  return Object.values(modules).map((module: any) => module.default);
}

export function load_prestation_cuisine(): string[] {
  // chemin relatif depuis ce fichier vers le dossier des images
  const modules = import.meta.glob(
    "/src/images/prestation/cuisine/*.{png,jpg,jpeg,svg}",
    { eager: true } // importe tout immédiatement
  );

  // retourne un tableau des chemins importés
  return Object.values(modules).map((module: any) => module.default);
}

export function load_prestation_terrasse(): string[] {
  // chemin relatif depuis ce fichier vers le dossier des images
  const modules = import.meta.glob(
    "/src/images/prestation/terrasse/*.{png,jpg,jpeg,svg}",
    { eager: true } // importe tout immédiatement
  );

  // retourne un tableau des chemins importés
  return Object.values(modules).map((module: any) => module.default);
}

export function load_prestation_magasin(): string[] {
  // chemin relatif depuis ce fichier vers le dossier des images
  const modules = import.meta.glob(
    "/src/images/prestation/magasin/*.{png,jpg,jpeg,svg}",
    { eager: true } // importe tout immédiatement
  );

  // retourne un tableau des chemins importés
  return Object.values(modules).map((module: any) => module.default);
}