# 🍗 OKOKU - Documentation Complète du Site Web

## 📋 Résumé Exécutif

Site web professionnel pour **OKOKU**, restaurant de poulet grillé à Douala, Cameroun. 
Le site est entièrement fonctionnel avec panier, formulaire de commande et système d'événements.

---

## 📁 Structure du Projet

```
JS/
├── index.html              # Page principale (HTML)
├── style.css               # Styles CSS (Design responsive)
├── script.js               # Logique JavaScript (Panier, Événements)
├── course.js               # Ancien fichier (à archiver)
└── images/                 # Dossier images
    ├── README.md           # Instructions pour les images
    ├── logo-okoku.svg      # Logo OKOKU (placeholder)
    ├── okoku-restaurant.svg# Image restaurant (placeholder)
    └── poulet-plats.svg    # Image plats (placeholder)
```

---

## 🎯 Étapes de Réalisation

### ✅ ÉTAPE 1: ANALYSE DE PROJECT
- Analyse des besoins et objectifs
- Structure des pages et fonctionnalités
- Palette de couleurs (Orange #FF6B35, Jaune #F7931E)
- Design responsive (Mobile, Tablet, Desktop)

### ✅ ÉTAPE 2: CONFIGURATION HTML & CSS
- Architecture HTML5 sémantique
- CSS moderne avec Flexbox et Grid
- Variables CSS pour personnalisation facile
- 100% responsive (testé sur tous les écrans)

### ✅ ÉTAPE 3: INTÉGRATION IMAGES
- Logos et images des plats
- 3 images SVG temporaires (placeholder)
- Dossier `images/` avec instructions

### ✅ ÉTAPE 4: PAGES PRINCIPALES
- **Accueil**: Hero section + présentation
- **Menu**: 6 produits avec prix
- **Galerie**: Showcase des plats
- **Panier**: Gestion des commandes
- **Contact**: Formulaire + Info

### ✅ ÉTAPE 5: LOGIQUE DYNAMIQUE (JavaScript)
- Système de panier complet
- Gestion des produits (ajout/suppression)
- Calcul automatique du total
- Formulaire de commande avec validation
- Notifications toast pour feedback utilisateur

### ✅ ÉTAPE 6: ÉVÉNEMENTS & LOGS
- 20+ événements JavaScript tracés
- Système de logging en temps réel
- Analyse des interactions utilisateur

---

## 🎨 Design & Couleurs

| Élément | Couleur | Code |
|---------|---------|------|
| Primary | Orange | #FF6B35 |
| Secondary | Jaune | #F7931E |
| Dark | Noir | #1a1a1a |
| Light | Gris clair | #f5f5f5 |
| Text | Gris foncé | #333 |

---

## 📱 Sections du Site

### 1. **Navigation (Navbar)**
- Logo OKOKU
- Menu avec liens vers les sections
- Sticky (reste visible au scroll)
- Réactif sur mobile

### 2. **Hero Section**
- Image du restaurant
- Titre et descriptif
- Bouton "Voir le Menu"
- Design attrayant

### 3. **Menu (Products)**
- Grille de 6 produits
- Images, descriptions, prix
- Boutons "Ajouter au panier"
- Animations au survol

### 4. **Galerie**
- 3 images de showcase
- Grid responsive
- Zoom au survol

### 5. **Panier**
- Liste des produits ajoutés
- Quantités et prix
- Total automatique
- Bouton "Commander"

### 6. **Formulaire Commande**
- Champs: Nom, Téléphone, Email, Adresse, Message
- Validation des champs
- Message de confirmation
- Résumé de la commande

### 7. **Informations Entreprise**
- Localisation: Douala
- Horaires: 10h - 23h (Lundi-Dimanche)
- Numéro de téléphone

---

## 🛒 Fonctionnalités JavaScript

### Panier
```javascript
addToCart(productName, price)      // Ajouter un produit
removeFromCart(productId)          // Retirer un produit
updateCartDisplay()                // Mettre à jour l'affichage
```

### Formulaire
```javascript
Validation automatique des champs
Calcul du total du panier
Enregistrement des commandes
Notifications de confirmation
```

### Événements Tracés
- LOAD, CLICK, FOCUS, BLUR
- INPUT, CHANGE, MOUSEOVER
- KEYPRESS, SCROLL, RESIZE
- Et 10 autres événements...

---

## 📦 Produits du Menu

| Produit | Prix |
|---------|------|
| Poulet Grillé | 2500 FCFA |
| Poulet Pané | 2500 FCFA |
| Poulet Braisé | 2500 FCFA |
| Poulet Rôti | 2500 FCFA |
| Poulet Mayo | 2500 FCFA |
| Menu Complet | 5000 FCFA |

---

## 📊 Événements Système

Le site enregistre **20+ événements**:

1. **LOAD** - Chargement de la page
2. **CLICK** - Clics utilisateur
3. **FOCUS/BLUR** - Focus des champs
4. **INPUT/CHANGE** - Saisie utilisateur
5. **MOUSEOVER/MOUSEOUT** - Survol souris
6. **KEYPRESS** - Touches clavier
7. **SCROLL** - Défilement page
8. **RESIZE** - Redimensionnement
9. **SUBMIT** - Envoi formulaire
10. **CART** - Actions panier

---

## 🖼️ Images Requises

### Pour remplacement des placeholders:

1. **logo-okoku.png/jpg** (200x200px)
   - Logo OKOKU avec le personnage orange
   
2. **okoku-restaurant.jpg** (800x600px)
   - Façade du restaurant (image fournie)
   
3. **poulet-plats.jpg** (600x400px)
   - Photos des plats préparés (image fournie)

**Note**: Les fichiers SVG actuels sont des placeholders. Remplacez-les par les vraies images.

---

## ⚙️ Customisation

### Changer les prix:
Dans `index.html`, ligne des produits:
```html
<button class="btn-add" onclick="addToCart('Poulet Grillé', 2500)">
```

### Changer les couleurs:
Dans `style.css`, ligne 17-22:
```css
--primary-color: #FF6B35;
--secondary-color: #F7931E;
```

### Ajouter des produits:
Dupliquer une `.product-card` et modifier:
```html
<div class="product-card">
    <img src="images/votre-image.jpg" alt="Produit">
    <h3>Nom Produit</h3>
    <button class="btn-add" onclick="addToCart('Nom', PRIX)">
</div>
```

---

## 📱 Responsivité

Le site s'adapte à tous les écrans:

- **Desktop** (>768px): Grille 3 colonnes
- **Tablet** (768px): Grille 2 colonnes
- **Mobile** (<480px): Grille 1 colonne, nav compacte

Tous les éléments sont testés et fonctionnels.

---

## 🧪 Tests

Le site inclut un système de logging pour déboguer:

1. Ouvrir la console (F12)
2. Vérifier les logs d'événements
3. Tester le panier
4. Valider le formulaire

---

## 🚀 Prochaines Étapes (Optionnel)

1. **Backend**: Ajouter PHP/Node.js pour vraies commandes
2. **Database**: Stocker les commandes en BD
3. **Email**: Envoyer confirmations par email
4. **WhatsApp API**: Intégrer WhatsApp Business
5. **Paiement**: Ajouter passerelle paiement (MTN Money, Orange Money)
6. **Admin Panel**: Dashboard pour gérer commandes

---

## 💡 Informations de Développement

**Entreprise**: OKOKU
**Localisation**: Douala, Cameroun
**Propriétaire**: Bouamounsadi
**Secteur**: Restauration (Vente de Poulet)
**Site créé**: 2026

---

## 📧 Support & Contact

Pour les modifications ou questions:
- Vérifier les fichiers HTML, CSS, JS
- Consulter les commentaires dans le code
- Tester dans la console du navigateur (F12)

---

**🍗 Merci de choisir OKOKU! 🍗**
