📱 GUIDE D'UTILISATION - SITE OKOKU
==================================

## 🚀 DÉMARRAGE RAPIDE

1. **Ouvrir le site**
   - Double-cliquez sur `index.html`
   - Ou utilisez un serveur local (Python/Node.js)

2. **Naviguer dans le site**
   - Cliquez sur les liens du menu (Accueil, Menu, Galerie, etc.)
   - Ou utilisez le scroll pour défiler

3. **Ajouter des produits**
   - Cliquez sur "Ajouter" sous chaque produit
   - Voyez le panier se mettre à jour

4. **Passer une commande**
   - Allez à l'onglet "Panier"
   - Cliquez "Commander"
   - Remplissez le formulaire de commande
   - Validez

---

## 🛒 GESTION DU PANIER

### Ajouter un produit
- Cliquez le bouton **"Ajouter"** sous le produit
- Une notification apparaît en haut à droite
- Le panier se met à jour automatiquement

### Voir le panier
- Cliquez sur **"🛒 Panier"** dans le menu
- Ou descendez à la section "Votre Panier"

### Retirer un produit
- Dans le panier, cliquez **"Retirer"** à côté du produit
- Le total se recalcule automatiquement

### Voir le total
- En bas du panier, à côté de "Total:"
- Affiche le prix total en FCFA

---

## 📝 FORMULAIRE DE COMMANDE

### Étapes
1. Allez à la section **"Télécommander"**
2. Remplissez les champs:
   - **Nom** (obligatoire) *
   - **Téléphone** (obligatoire) *
   - **Email** (optionnel)
   - **Adresse de Livraison** (obligatoire) *
   - **Message** (allergies, préférences)

3. Cliquez **"Valider la Commande"**

### Validation
- Tous les champs avec * sont obligatoires
- Le téléphone doit avoir au moins 8 chiffres
- Un message de confirmation s'affiche

---

## 🎨 NAVIGATION

### Menu Supérieur
- **Accueil** → Retourne au haut de la page
- **Menu** → Voir tous les produits
- **Galerie** → Photos des spécialités
- **Contact** → Formulaire et infos
- **🛒 Panier** → Voir vos commandes

---

## 📊 LES PRODUITS

| # | Produit | Prix | Description |
|---|---------|------|-------------|
| 1 | Poulet Grillé | 2500 | Fermier grillé à la perfection |
| 2 | Poulet Pané | 2500 | Croustillant enrobé |
| 3 | Poulet Braisé | 2500 | Savoureux aux épices |
| 4 | Poulet Rôti | 2500 | Traditionnel aux herbes |
| 5 | Poulet Mayo | 2500 | Avec mayonnaise maison |
| 6 | Menu Complet | 5000 | Poulet + Frites + Boisson |

---

## 🔧 POUR LES DÉVELOPPEURS

### Ouvrir la Console (F12)
Pour voir les événements en temps réel:
- **Windows**: F12 ou Ctrl+Shift+I
- **Mac**: Cmd+Option+I
- Allez sur l'onglet "Console"

### Événements Tracés
Le système enregistre automatiquement:
- Clics souris
- Saisies au clavier
- Changements de focus
- Actions du panier
- Soumissions de formulaire
- Scrolls et redimensionnements

### Déboguer
1. Ouvrir Console (F12)
2. Vérifier les messages d'erreur (rouges)
3. Vérifier les logs (bleus)
4. Vérifier les avertissements (jaunes)

---

## 📸 AJOUTER VOS IMAGES

### Remplacer les placeholders:

1. **Logo OKOKU**
   - Fichier: `images/logo-okoku.svg`
   - Remplacez par votre logo (PNG ou JPG 200x200px)

2. **Photo Restaurant**
   - Fichier: `images/okoku-restaurant.svg`
   - Remplacez par la façade (JPG 800x600px)

3. **Photos Plats**
   - Fichier: `images/poulet-plats.svg`
   - Remplacez par photos réelles (JPG 600x400px)

### Comment remplacer:
1. Prenez une image
2. Renommez-la exactement (ex: logo-okoku.png)
3. Collez-la dans le dossier `images/`
4. Rafraîchissez le navigateur (F5)

---

## ⚙️ PERSONNALISATION

### Changer les prix:
- Ouvrir `index.html` dans un éditeur
- Trouver `2500` ou `5000`
- Remplacer par le nouveau prix
- Sauvegarder et rafraîchir

### Changer les couleurs:
- Ouvrir `style.css`
- Lignes 14-19, les couleurs (codes hex)
- Personnaliser comme souhaité

### Ajouter un produit:
- Copier un bloc `<div class="product-card">`
- Changer le nom, prix, image
- Ajouter le bouton onclick

---

## 📞 INFORMATIONS ENTREPRISE

**OKOKU - Restaurant Poulet Grillé**
- 📍 Localisation: Douala, Cameroun
- 👤 Propriétaire: Bouamounsadi
- ⏰ Horaires: 10h - 23h (Lundi-Dimanche)
- 📞 Téléphone: +237 6XX XXX XXX (à compléter)
- 🍗 Spécialité: Poulet Grillé, Pané, Braisé, Rôti, Mayo

---

## 🎯 CHECKLIST LANCEMENT

- [x] HTML structuré et valide
- [x] CSS responsive et attrayant
- [x] JavaScript fonctionnel
- [x] Panier opérationnel
- [x] Formulaire validé
- [x] Images intégrées (SVG placeholder)
- [x] Navigation smooth
- [x] Notifications utilisateur
- [x] Événements tracés
- [x] Documentation complète
- [ ] Images réelles ajoutées
- [ ] Numéro téléphone mis à jour
- [ ] Testeur par un utilisateur réel
- [ ] Publié sur internet (hébergement)

---

## 📱 COMPATIBILITÉ

✅ **Desktop** (1920x1080+)
✅ **Laptop** (1366x768)
✅ **Tablet** (768x1024, iPad)
✅ **Téléphone** (375x667, iPhone)

Testé et validé sur tous les écrans.

---

## 🆘 PROBLÈMES COURANTS

### Images ne s'affichent pas
- Vérifier le dossier `images/` existe
- Vérifier les noms de fichiers
- Rafraîchir la page (Ctrl+F5)

### Panier ne fonctionne pas
- Ouvrir Console (F12)
- Vérifier les erreurs
- Vérifier que JavaScript est activé

### Formulaire ne valide pas
- Tous les champs * doivent être remplis
- Téléphone: minimum 8 chiffres
- Email: format valide (si rempli)

### Page lente
- Optimiser les images (compresser)
- Utiliser formats modernes (WebP)
- Vérifier la connexion internet

---

## 💡 ASTUCES

1. **Utiliser le scroll smooth**
   - Les liens du menu scroll doucement
   - Experience utilisateur améliorée

2. **Notifications toast**
   - Voir confirmation quand on ajoute au panier
   - Feedback instant à l'utilisateur

3. **Validation intelligente**
   - Les erreurs s'affichent clairement
   - Messages en rouge si problème

4. **Responsif parfait**
   - Essayer sur mobile et desktop
   - Tout s'adapte automatiquement

---

## 📞 CONTACT SUPPORT

Pour toute question ou modification:
1. Consulter la DOCUMENTATION.md
2. Vérifier les commentaires dans le code
3. Tester dans la Console du navigateur

---

**Merci de choisir OKOKU! 🍗**
**Bon appétit et bienvenue sur notre site! 😊**
