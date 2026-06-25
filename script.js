// ================================
// OKOKU - GESTION DU SITE
// ================================

// Panier (Cart)
let cart = [];

// ================================
// 1. SCROLL SMOOTH
// ================================
function scrollTo(selector) {
    const element = document.querySelector(selector);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
}

// ================================
// 2. GESTION DU PANIER
// ================================
function addToCart(productName, price) {
    // Créer un ID unique pour chaque produit
    const cartItem = {
        id: Date.now(),
        name: productName,
        price: price,
        quantity: 1
    };

    // Vérifier si le produit existe déjà
    const existingItem = cart.find(item => item.name === productName);
    
    if (existingItem) {
        existingItem.quantity++;
    } else {
        cart.push(cartItem);
    }

    updateCartDisplay();
    logEvent(`CART - ${productName} ajouté au panier`);
    
    // Animation de feedback
    showNotification(`✓ ${productName} ajouté au panier!`);
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    updateCartDisplay();
    logEvent(`CART - Produit retiré du panier`);
}

function updateCartDisplay() {
    const cartItemsDiv = document.getElementById('cartItems');
    const cartTotalSpan = document.getElementById('cartTotal');

    if (cart.length === 0) {
        cartItemsDiv.innerHTML = '<p class="empty-cart">Votre panier est vide</p>';
        cartTotalSpan.textContent = '0 FCFA';
        return;
    }

    let cartHTML = '';
    let total = 0;

    cart.forEach(item => {
        const itemTotal = item.price * item.quantity;
        total += itemTotal;

        cartHTML += `
            <div class="cart-item">
                <div>
                    <div class="item-name">${item.name}</div>
                    <div style="font-size: 0.9rem; color: #999;">Quantité: ${item.quantity}</div>
                </div>
                <div>
                    <span class="item-price">${itemTotal.toLocaleString()} FCFA</span>
                    <button class="btn-remove" onclick="removeFromCart(${item.id})">Retirer</button>
                </div>
            </div>
        `;
    });

    cartItemsDiv.innerHTML = cartHTML;
    cartTotalSpan.textContent = total.toLocaleString() + ' FCFA';
}

// ================================
// 3. FORMULAIRE COMMANDE
// ================================
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('commandeForm');
    
    if (form) {
        form.addEventListener('submit', function(event) {
            event.preventDefault();

            // Récupérer les valeurs
            const nom = document.getElementById('nom').value.trim();
            const telephone = document.getElementById('telephone').value.trim();
            const email = document.getElementById('email').value.trim();
            const adresse = document.getElementById('adresse').value.trim();
            const message = document.getElementById('message').value.trim();
            const formMessage = document.getElementById('formMessage');

            // Validation
            if (!nom || !telephone || !adresse) {
                formMessage.textContent = '❌ Veuillez remplir les champs obligatoires (*)';
                formMessage.className = 'form-message error';
                logEvent(`FORM - Erreur validation`);
                return;
            }

            // Validation téléphone (format simple)
            if (!/^[\d+\s\-()]{8,}$/.test(telephone)) {
                formMessage.textContent = '❌ Veuillez entrer un numéro de téléphone valide';
                formMessage.className = 'form-message error';
                return;
            }

            // Préparation des données de commande
            const orderData = {
                nom: nom,
                telephone: telephone,
                email: email,
                adresse: adresse,
                message: message,
                panier: cart,
                total: cart.reduce((sum, item) => sum + (item.price * item.quantity), 0),
                date: new Date().toLocaleString('fr-FR')
            };

            // Afficher le succès
            formMessage.innerHTML = `
                ✓ <strong>Commande confirmée!</strong><br>
                Merci ${nom}!<br>
                Nous vous contacterons au ${telephone} pour confirmer la livraison.<br>
                Total: ${orderData.total.toLocaleString()} FCFA
            `;
            formMessage.className = 'form-message success';

            // Log l'événement
            logEvent(`COMMANDE - ${nom} | ${telephone} | ${orderData.total} FCFA`);

            // Réinitialiser le formulaire et le panier
            form.reset();
            cart = [];
            updateCartDisplay();

            // Effacer le message après 5 secondes
            setTimeout(() => {
                formMessage.className = 'form-message';
                formMessage.textContent = '';
            }, 5000);
        });
    }
});

// ================================
// 4. ÉVÉNEMENTS UTILISATEUR
// ================================

// Événement LOAD
window.addEventListener('load', function() {
    console.log('✓ Site OKOKU chargé!');
    logEvent('LOAD - Page OKOKU chargée');
});

// Événements INPUT sur les champs
document.querySelectorAll('input[type="text"], input[type="tel"], input[type="email"], textarea').forEach(input => {
    input.addEventListener('input', function() {
        logEvent(`INPUT - ${this.placeholder}`);
    });
});

// Événement CHANGE sur les champs
document.querySelectorAll('input[type="text"], input[type="tel"], input[type="email"], textarea').forEach(input => {
    input.addEventListener('change', function() {
        logEvent(`CHANGE - ${this.placeholder}`);
    });
});

// Événement FOCUS
document.querySelectorAll('input, textarea').forEach(field => {
    field.addEventListener('focus', function() {
        logEvent(`FOCUS - Champ actif: ${this.placeholder}`);
        this.style.borderColor = 'var(--primary-color)';
    });

    field.addEventListener('blur', function() {
        logEvent(`BLUR - Focus perdu`);
        this.style.borderColor = '#ddd';
    });
});

// Événement CLICK sur les boutons "Ajouter"
document.addEventListener('click', function(event) {
    if (event.target.classList.contains('btn-add')) {
        logEvent(`CLICK - Bouton ajouter au panier`);
    }
});

// Événement MOUSEOVER sur les cartes produits
document.querySelectorAll('.product-card').forEach(card => {
    card.addEventListener('mouseover', function() {
        logEvent(`MOUSEOVER - Produit survolé`);
    });

    card.addEventListener('mouseout', function() {
        logEvent(`MOUSEOUT - Produit quitté`);
    });
});

// Événement KEYPRESS
document.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        logEvent(`KEYPRESS - Touche Entrée pressée`);
    }
});

// Événement SCROLL
window.addEventListener('scroll', function() {
    let scrollPos = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollPos > 100) {
        logEvent(`SCROLL - Position: ${Math.round(scrollPos)}px`);
    }
});

// Événement RESIZE
window.addEventListener('resize', function() {
    let width = window.innerWidth;
    let height = window.innerHeight;
    logEvent(`RESIZE - ${width}x${height}`);
});

// ================================
// 5. NOTIFICATION TOAST
// ================================
function showNotification(message) {
    // Créer un élément notification s'il n'existe pas
    let notification = document.getElementById('notification');
    
    if (!notification) {
        notification = document.createElement('div');
        notification.id = 'notification';
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
            color: white;
            padding: 1rem 1.5rem;
            border-radius: 8px;
            box-shadow: 0 4px 12px rgba(0,0,0,0.15);
            z-index: 9999;
            animation: slideInRight 0.3s ease;
        `;
        document.body.appendChild(notification);
    }

    notification.textContent = message;
    
    // Ajouter le style d'animation
    if (!document.getElementById('notificationStyle')) {
        const style = document.createElement('style');
        style.id = 'notificationStyle';
        style.textContent = `
            @keyframes slideInRight {
                from {
                    opacity: 0;
                    transform: translateX(100px);
                }
                to {
                    opacity: 1;
                    transform: translateX(0);
                }
            }
        `;
        document.head.appendChild(style);
    }

    // Effacer la notification après 3 secondes
    setTimeout(() => {
        notification.style.opacity = '0';
        notification.style.transition = 'opacity 0.3s ease';
        setTimeout(() => {
            notification.style.opacity = '1';
        }, 3000);
    }, 3000);
}

// ================================
// 6. ÉVÉNEMENT CHECKOUT
// ================================
function checkout() {
    if (cart.length === 0) {
        showNotification('❌ Votre panier est vide!');
        return;
    }

    // Scroller vers le formulaire
    scrollTo('#contact');
    
    // Afficher une notification
    showNotification('📝 Veuillez remplir le formulaire de commande');
    
    logEvent(`CHECKOUT - Panier avec ${cart.length} article(s)`);
}

// ================================
// 7. SYSTÈME DE LOG D'ÉVÉNEMENTS
// ================================
let eventLog = [];

function logEvent(eventText) {
    const timestamp = new Date().toLocaleTimeString('fr-FR');
    const logEntry = `[${timestamp}] ${eventText}`;
    
    eventLog.push(logEntry);

    // Garder seulement les 50 derniers événements en mémoire
    if (eventLog.length > 50) {
        eventLog.shift();
    }

    // Afficher dans la console
    console.log(logEntry);
}

// ================================
// 8. ÉVÉNEMENT BEFOREUNLOAD
// ================================
window.addEventListener('beforeunload', function() {
    logEvent(`BEFOREUNLOAD - L'utilisateur quitte la page`);
});

// ================================
// 9. ÉVÉNEMENTS CONTEXTE
// ================================
document.addEventListener('contextmenu', function() {
    logEvent(`CONTEXTMENU - Clic droit détecté`);
});

// ================================
// 10. COPIER/COLLER
// ================================
document.addEventListener('copy', function() {
    logEvent(`COPY - Texte copié`);
});

document.addEventListener('paste', function() {
    logEvent(`PASTE - Texte collé`);
});

// ================================
// LOGS CONSOLE
// ================================
console.log('🍗 =============================================');
console.log('🍗 OKOKU - RESTAURANT POULET GRILLÉ');
console.log('🍗 Bienvenue sur le site de OKOKU');
console.log('🍗 =============================================');
console.log('✓ Tous les événements sont actifs');
console.log('✓ Panier opérationnel');
console.log('✓ Formulaires de commande prêts');
