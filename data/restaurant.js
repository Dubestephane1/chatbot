/**
 * Chatbot data — restaurant (French)
 * Load this BEFORE chatbot.js to set window.ChatBotData and window.ChatBotConfig.
 */
(function () {
  const MENU = {
    entrees: [
      'Bâtonnets de fromage (5 pièces) — 7,00 $',
      'Oignons français — 5,00 $',
      'Soupe aux légumes — 5,00 $',
      'Salade du chef — 12,00 $',
      'Salade de poulet — 14,00 $',
    ],
    poutines: [
      'Classique — 9,50 $ (mini) à 15,75 $ (large)',
      'Italienne — 10,75 $ à 16,75 $',
      'Chinoise — 10,75 $ à 16,75 $',
      'Galvaude — 10,75 $ à 16,75 $',
    ],
    pizzas: [
      'Fromage — 10,00 $ (mini) à 24,50 $ (large)',
      'Pepperoni — 11,50 $ à 26,50 $',
      'Garnie — 12,25 $ à 27,50 $',
      'Végétarienne — 12,75 $ à 29,00 $',
    ],
    pates: [
      'Spaghetti sauce à la viande — 10,50 $ (demi) / 14,50 $ (complet)',
      'Spaghetti gratiné — 11,50 $ (demi) / 16,00 $ (complet)',
      'Spaghetti épicé (pepperoni, piments, champignons) — 12,25 $ (demi) / 16,25 $ (complet)',
      'Lasagne classique sauce à la viande — 14,00 $',
      'Lasagne — 15,75 $',
    ],
    burgers: 'Burger — tomate, salade, oignons français, fromage, bacon, oignons crus et mayo, pour 11,25 $',
    enfants: 'Pogo — 4,25 $ seul, 14,00 $ assiette | Hot-dog — 4,25 $ seul, 14,00 $ assiette',
    ailes: 'Ailes de poulet 6 pièces — 8,50 $ (seul) ou 14,00 $ (assiette) | 10 pièces — 12,50 $ (seul) ou 16,75 $ (assiette)',
    extras: 'Extra fromage — 3,25 $ (4 oz) / 4,75 $ (8 oz) | Extra légumes — 3,00 $ à 4,50 $ | Extra viande — 4,00 $ à 5,50 $ | Changer les frites en poutine italienne — 6,00 $',
    assiette: "L'Assiette — 3 bâtonnets de fromage, 4 ailes de poulet, oignons français, frites, crudités et salsa, pour 15,25 $",
    pelures: 'Pelure gratinée — 16,75 $ | Pelure gratinée napolitaine — 19,50 $',
  };

  window.ChatBotData = {
    labels: {
      headerTitle: 'Assistant Restaurant',
      headerSub: 'Service à la clientèle',
      placeholder: 'Écrivez votre question...',
      welcome: 'Bonjour ! Je suis le chatbot du restaurant. Je peux vous aider avec le menu, les prix, les heures d\u2019ouverture et bien plus. Que souhaitez-vous savoir ?',
      thinking: ['Un instant...', 'Je vérifie...', 'Une seconde...'],
      defaultResponse: 'Je suis le chatbot du restaurant, je peux vous aider avec des informations sur notre menu, nos prix, nos heures d\u2019ouverture, nos méthodes de contact, et plus encore. Que souhaitez-vous savoir ?',
    },
    suggestions: [
      { label: 'Le menu', q: 'Quel est votre menu ?' },
      { label: 'Heures d\u2019ouverture', q: 'Quelles sont vos heures d\u2019ouverture ?' },
      { label: 'Adresse', q: 'Où êtes-vous situé ?' },
      { label: 'Réserver une table', q: 'Je voudrais réserver une table' },
      { label: 'Livraison', q: 'Proposez-vous la livraison ?' },
    ],
    interactions: {
      greeting: {
        terms: ['bonjour', 'allo', 'salut', 'hé', 'hi', 'hello'],
        answers: [
          'Bonjour ! Comment puis-je vous aider aujourd\u2019hui ?',
          'Bonjour ! Bienvenue au restaurant. Menu, prix, heures, réservation — je suis là pour vous aider. Que désirez-vous savoir ?',
        ]
      },
      ca_va: {
        terms: ['comment ça va'],
        answers: ['Je vais très bien, merci de demander ! Comment puis-je vous aider aujourd\u2019hui ?']
      },
      qui_etes: {
        terms: ['qui êtes-vous', 'qui es-tu'],
        answers: ['Je suis un chatbot conçu pour vous aider avec des informations sur le restaurant, notre menu, nos services, et plus encore. Que souhaitez-vous savoir ?']
      },
      bot: {
        terms: ['êtes-vous un bot', 'es-tu un bot', 'un bot'],
        answers: ['Oui, je suis un chatbot ici pour vous aider ! Comment puis-je vous assister aujourd\u2019hui ?']
      },
      nom: {
        terms: ['comment vous appelez-vous', 'quel est votre nom'],
        answers: ['Je suis votre assistant de site web pour le restaurant ! Vous pouvez m\u2019appeler Bot. Comment puis-je vous aider aujourd\u2019hui ?']
      },
      raccrocher: {
        terms: ['ravi de vous rencontrer', 'enchanté de vous rencontrer'],
        answers: ['Enchanté de vous rencontrer aussi ! Comment puis-je vous aider avec nos services ou notre site web ?']
      },
      moment_jour: {
        terms: ['bon matin', 'bon après-midi', 'bonsoir'],
        answers: ['Bon [matin/après-midi/soir] ! Que puis-je faire pour vous aujourd\u2019hui ?']
      },
      reel: {
        terms: ['êtes-vous réel'],
        answers: ['Je suis un assistant virtuel, mais je suis ici pour vous offrir une aide réelle ! Comment puis-je vous aider aujourd\u2019hui ?']
      },
      travail: {
        terms: ['travaillez-vous ici'],
        answers: ['Non, je suis un assistant virtuel, mais je suis ici pour répondre à vos questions sur le restaurant, notre menu, et nos services. De quoi avez-vous besoin ?']
      },
      merci: {
        terms: ['merci', 'merci beaucoup'],
        answers: ['De rien ! Si vous avez d\u2019autres questions, n\u2019hésitez pas à demander.']
      },
      au_revoir: {
        terms: ['au revoir', 'à bientôt', 'à plus tard', 'bye', 'bonne journée'],
        answers: [
          'Au revoir ! Si vous avez d\u2019autres questions plus tard, n\u2019hésitez pas à revenir. Passez une excellente journée !',
          'À plus tard ! N\u2019hésitez pas à revenir si vous avez besoin d\u2019aide.',
        ]
      },
      aide: {
        terms: ['aide', 'help', 'que peux-tu faire', 'commandes'],
        answers: ['Je peux vous aider avec le menu, les prix, les heures d\u2019ouverture, l\u2019adresse, la livraison, les réservations et plus. Essayez « quel est votre menu ? » ou « quelles sont vos heures ? ».']
      }
    },
    knowledge: {
      intents: [
        { terms: ['entrées', 'entree', 'entrées disponibles'], answer: 'Nous avons plusieurs entrées délicieuses : ' + MENU.entrees.join(', ') + '. Que souhaitez-vous essayer ?' },
        { terms: ['bâtonnets de fromage', 'batonnets de fromage', 'fromage sticks'], answer: 'Les bâtonnets de fromage (5 pièces) coûtent 7,00 $. Voulez-vous en ajouter à votre commande ?' },
        { terms: ['salade césar', 'cesar'], answer: 'Oui, nous avons une salade César ! La portion demi coûte 10,75 $. Souhaitez-vous la commander ?' },
        { terms: ['assiette à partager', 'assiette  '], answer: MENU.assiette + ' C\u2019est un excellent choix pour partager ! Voulez-vous la commander ?' },
        { terms: ['poutine italienne', 'galvaude', 'différence entre poutine'], answer: 'La poutine Italienne est garnie de sauce à la viande et de fromage, tandis que la Galvaude inclut du poulet en plus de la sauce et du fromage. Les deux sont délicieuses !' },
        { terms: ['poutine moyenne'], answer: 'Une poutine moyenne coûte 12,25 $. Vous pouvez aussi choisir une Italienne, Chinoise ou Galvaude pour 13,00 $. Quelle poutine préférez-vous ?' },
        { terms: ['pizza végétarienne'], answer: 'Oui, nous avons une pizza végétarienne ! Elle coûte entre 12,75 $ (mini) et 29,00 $ (large). Souhaitez-vous la commander ?' },
        { terms: ['pizza fromage'], answer: 'Une pizza Fromage en taille moyenne (12 po) coûte 16,75 $. Les autres tailles sont : mini (10,00 $), petite (13,00 $) et large (24,50 $). Quelle taille préférez-vous ?' },
        { terms: ['pelure gratinée napolitaine'], answer: 'La pelure gratinée napolitaine est garnie de fromage et d\u2019une sauce style napolitaine, pour 19,50 $. La version classique gratinée est à 16,75 $. Que choisissez-vous ?' },
        { terms: ['ailes de poulet', 'ailes'], answer: MENU.ailes + ' Combien en voulez-vous ?' },
        { terms: ['burger le plus populaire', 'meilleur burger', 'burger'], answer: 'Notre burger le plus populaire est le Burger ! Il est garni de ' + MENU.burgers + ' Il ne vient pas avec des frites, mais vous pouvez en ajouter pour 5,25 $ (mini) à 11,00 $ (grosse).' },
        { terms: ['extra viande', 'extra fromage', 'extras disponibles'], answer: MENU.extras + ' Que souhaitez-vous ?' },
        { terms: ['spaghetti épicé'], answer: 'Le Spaghetti épicé contient des piments, donc il a une touche épicée, mais ce n\u2019est pas trop fort grâce au pepperoni, aux champignons et au fromage gratiné. Ça coûte 12,25 $ (demi) ou 16,25 $ (complet). Voulez-vous l\u2019essayer ?' },
        { terms: ['spaghetti', 'pâtes', 'pates'], answer: 'Nous proposons : ' + MENU.pates.join(' | ') + ' Lequel préférez-vous ?' },
        { terms: ['lasagne'], answer: 'La lasagne classique avec sauce à la viande coûte 14,00 $. Nous avons aussi une version à 15,75 $. Laquelle vous intéresse ?' },
        { terms: ['pizza', 'pizzas'], answer: 'Nous avons plusieurs pizzas délicieuses : ' + MENU.pizzas.join(', ') + '. Quelle pizza vous tente ?' },
        { terms: ['heures d\u2019ouverture', 'heures', 'ouvert', 'ouvrir', 'fermez'], answer: 'Nos heures d\u2019ouverture sont : lundi-vendredi 11h00-21h00, samedi 10h00-22h00, dimanche 10h00-20h00. Comment puis-je vous aider davantage ?' },
        { terms: ['où êtes-vous situé', 'adresse', 'situé', 'situer'], answer: 'Nous sommes situés au 123 Rue Principale, Votre Ville, Canada. Vous pouvez aussi voir notre emplacement sur la carte dans la section Contactez-Nous. Comment puis-je vous aider ?' },
        { terms: ['livraison'], answer: 'Pour l\u2019instant, nous ne proposons pas de livraison, mais vous pouvez commander à emporter ou manger sur place. Voulez-vous plus d\u2019infos ?' },
        { terms: ['réserver une table', 'reservation', 'réserver'], answer: 'Oui, vous pouvez réserver une table en nous appelant au (123) 456-7890. Combien de personnes seront dans votre groupe ?' },
        { terms: ['commande en ligne', 'commander'], answer: 'Nous travaillons à mettre en place un service de commande en ligne. En attendant, vous pouvez commander par téléphone au (123) 456-7890 ou en personne. Que souhaitez-vous commander ?' },
        { terms: ['sans gluten', 'gluten'], answer: 'Nous avons quelques options sans gluten, comme nos salades (par exemple, la salade du chef à 12,00 $). Informez-nous de vos besoins, et nous ferons de notre mieux !' },
        { terms: ['enfants', 'enfant', 'pogo', 'hot-dog'], answer: MENU.enfants + ' Que souhaitez-vous pour les enfants ?' },
        { terms: ['végétarien', 'végétarienne'], answer: 'Nous n\u2019avons pas d\u2019options végétariennes spécifiques, mais notre pizza végétarienne (12,75 $ à 29,00 $) peut être adaptée. Informez-nous de vos besoins !' },
        { terms: ['parler à un humain'], answer: 'Pour une assistance plus personnalisée, vous pouvez nous appeler au (123) 456-7890 ou utiliser le formulaire de contact sur notre site. Je suis ici pour répondre à vos questions en attendant !' },
        { terms: ['groupe', 'groupes'], answer: 'Nous accueillons les groupes ! Vous pouvez réserver une table en nous appelant au (123) 456-7890. Nous avons aussi des plats à partager comme ' + MENU.assiette + '. Combien de personnes dans votre groupe ?' },
        { terms: ['repas moyen'], answer: 'Un repas moyen coûte environ 10 $ à 20 $. Par exemple, une poutine moyenne est à 12,25 $, et une pizza moyenne à 16,75 $. Que souhaitez-vous commander ?' },
        { terms: ['promotion', 'rabais', 'rabais pour les étudiants'], answer: 'Nous n\u2019avons pas de promotions actives pour le moment, mais surveillez notre site pour des offres spéciales ! En attendant, que puis-je vous aider à commander ?' },
        { terms: ['taxes'], answer: 'Les prix affichés n\u2019incluent pas les taxes, qui seront ajoutées à votre facture. Par exemple, une poutine moyenne à 12,25 $ aura des taxes en sus. Voulez-vous plus de détails ?' },
        { terms: ['combien de temps'], answer: 'Une poutine prend généralement 5 à 10 minutes à préparer, selon la taille et les extras. Voulez-vous en commander une ?' },
        { terms: ['plat du jour', 'plat du jour', 'spécial du jour', 'special du jour', 'spécialité', 'specialite', 'spécial'], answer: 'Notre plat du jour change chaque jour — demandez à notre personnel qu\u2019elle est la spécialité aujourd\u2019hui (souvent autour de 12,00 $ à 15,00 $). Souhaitez-vous voir le menu complet ?' },
        { terms: ['menu'], answer: 'Notre menu propose une variété de plats délicieux ! Nous avons des entrées comme les bâtonnets de fromage (7,00 $), des poutines (' + MENU.poutines.map(p => p.split(' — ')[0]).join(', ') + '), des pâtes comme le spaghetti (10,50 $ à 16,25 $), des pizzas (10,00 $ à 29,00 $), et des burgers à 11,25 $. Consultez la section « Notre Menu » pour plus de détails, ou dites-moi ce qui vous tente !' }
      ],
      topics: {
        poutine: {
          keywords: ['poutine', 'poutines', 'frites'],
          answer: 'Oui, nous avons plusieurs poutines ! Par exemple : ' + MENU.poutines.join(', ') + '. Laquelle vous tente ?'
        },
        salade: {
          keywords: ['salade', 'salades'],
          answer: 'Nous avons plusieurs salades : salade du chef (12,00 $), salade de poulet (14,00 $) et salade César (10,75 $ la demi). Laquelle préférez-vous ?'
        },
        dessert: {
          keywords: ['dessert', 'desserts'],
          answer: 'Nous avons une sélection de desserts maison ! Demandez à notre personnel quelles sont les pâtisseries du jour.'
        },
        biere: {
          keywords: ['bière', 'biere', 'alcool', 'boisson'],
          answer: 'Nous offrons une sélection de bières et de vins. Consultez notre carte des boissons sur place pour les choix du moment.'
        }
      }
    }
  };

  window.ChatBotConfig = {
    storageKey: 'restaurant-chat-open',
    position: 'bottom-right',
    themeClass: 'uchat-theme-restaurant',
    avatarHtml: '<span class="uchat-avatar">🍽️</span>',
    iconOpen: '<i class="bi bi-chat-dots"></i>',
    sendIcon: '<i class="bi bi-send"></i>',
  };
})();