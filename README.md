# Guide d'utilisation du site TalkToBuy

Bienvenue sur ce guide d'utilisation de votre site vitrine TalkToBuy. Ce document vous explique comment gérer et mettre à jour votre site facilement, même si vous n'êtes pas développeur.

## Table des matières

1. [Présentation du site](#présentation-du-site)
2. [Gestion de la page d'accueil](#gestion-de-la-page-daccueil)
3. [Création de nouvelles catégories](#création-de-nouvelles-catégories)
4. [Mise à jour du header (menu)](#mise-à-jour-du-header-menu)
5. [Conseils et astuces](#conseils-et-astuces)

## Présentation du site

Votre site TalkToBuy est composé de deux types de pages principales :

- **La page d'accueil** (index.html) qui présente vos 3 produits phares
- **Les pages de catégories** qui présentent les produits par thème (bijoux, accessoires, etc.)

Toutes les pages partagent le même design et la même structure pour une expérience cohérente.

## Gestion de la page d'accueil

La page d'accueil met en avant vos 3 produits phares. Pour la mettre à jour :

### Modifier les produits phares

1. Les images des produits phares sont stockées dans le dossier `images/products/`
2. Pour changer une image, remplacez simplement le fichier existant par votre nouvelle image en conservant le même nom :
   - `carnet-cuir.jpg`
   - `tasses-ceramique.jpg`
   - `plaid-laine.jpg`

Ou en pensant à bien mettre à jour le `src` de la balise image, il doit correspondre au nom du fichier de votre image.

```html
<div class="product-image">
    <img
    style="object-fit: cover;"
    src="images/products/carnet-cuir.jpg"
    alt="Carnet en cuir artisanal"
    />
</div>
```

3. Pour modifier les informations d'un produit, ouvrez le fichier `index.html` et recherchez la section correspondante :

```html
<!-- Produit 1 -->
<div class="product-card fade-in">
```

Vous pouvez alors modifier :

- Le nom du produit (`<h3 class="product-name">Carnet en Cuir</h3>`)
- La description (`<p class="product-description">...</p>`)
- Le prix (`<p class="product-price">89€</p>`)
- Les détails au dos de la carte (`<div class="product-back-content">...</div>`)
- Le lien de commande par message (`<a href="https://m.me/...`)

## Création de nouvelles catégories

Pour créer une nouvelle catégorie de produits :

### Étape 1 : Préparer les images

1. Créez un nouveau dossier pour votre catégorie dans `images/category/`
   Par exemple : `images/category/decorations/`

2. Placez toutes les images des produits de cette catégorie dans ce dossier

### Étape 2 : Créer la page de catégorie

1. Dupliquez le fichier `pages/category/category-bijoux.html`
2. Renommez-le selon votre nouvelle catégorie, par exemple : `category-decorations.html`

### Étape 3 : Personnaliser la page

Ouvrez votre nouveau fichier et modifiez les éléments suivants :

1. **Le titre de la page** (dans la balise `<title>`) :

   ```html
   <title>Décorations - Cyrcrea</title>
   ```

2. **La description** (dans la balise `<meta name="description">`) :

   ```html
   <meta name="description" content="Découvrez notre collection de décorations artisanales uniques et faites main." />
   ```

3. **Le titre principal de la catégorie** :

   ```html
   <span class="hero-title-main">Nos Décorations</span>
   <span class="hero-title-sub">Artisanales & Uniques</span>
   ```

4. **La description de la catégorie** :

   ```html
   <p class="hero-description">
     Découvrez notre collection de décorations artisanales uniques, faites main avec passion et savoir-faire.
     Chaque pièce apporte une touche personnelle à votre intérieur.
   </p>
   ```

5. **Le titre de la section produits** :

   ```html
   <h2 class="section-title">Collection de Décorations</h2>
   ```

6. **Les produits** : Pour chaque produit, modifiez :

   - Le chemin de l'image (`src="../../images/category/decorations/nom-image.jpg"`)
   - Le texte alternatif (`alt="Description de l'image"`)
   - Le nom du produit (`<h3 class="product-name">Nom du produit</h3>`)
   - La description (`<p class="product-description">...</p>`)
   - Le prix (`<p class="product-price">XX,XX€</p>`)
   - Les détails au dos de la carte
   - Le lien de commande par message

   Recherchez les commentaires `<!-- TODO: -->` pour trouver facilement les éléments à modifier.

## Mise à jour du header (menu)

Pour ajouter votre nouvelle catégorie au menu de navigation :

1. Ouvrez le fichier `index.html`
2. Recherchez la section du menu déroulant :

   ```html
   <ul class="dropdown-menu">
     <li><a href="./pages/category/category-bijoux.html" class="dropdown-item">Bijoux</a></li>
     <li><a href="pages/category/category-accessoires.html" class="dropdown-item">Accessoires</a></li>
   </ul>
   ```

3. Ajoutez votre nouvelle catégorie :

   ```html
   <li><a href="pages/category/category-decorations.html" class="dropdown-item">Décorations</a></li>
   ```

4. Répétez cette opération dans chaque page de catégorie pour mettre à jour le menu partout

## Conseils et astuces

### Taille des images

- Utilisez des images de dimensions similaires pour une présentation harmonieuse
- Compressez vos images pour optimiser le temps de chargement du site

### Textes et descriptions

- Gardez les descriptions courtes et percutantes
- Mettez en avant les caractéristiques uniques de vos produits

### Liens de commande

- Personnalisez le message prérempli pour chaque produit
- Format recommandé : `https://m.me/VOTRE_ID_FACEBOOK?text=Bonjour, je souhaite commander [NOM DU PRODUIT].`

---

Ce guide vous permet de gérer facilement votre site vitrine. Si vous avez des questions supplémentaires, n'hésitez pas à contacter directement.
