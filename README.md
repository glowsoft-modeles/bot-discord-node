# Notifications vers Discord

Un service qui relaie des événements vers un salon Discord.

Modèle de départ Bastide (`bot-discord-node`), écrit par Glowsoft. Il se construit et se déploie sans modification ; la campagne hebdomadaire le construit avec des valeurs d'essai.

## Variables

Le déploiement en un clic les demande avant la construction ; copiez `.env.example` pour un essai local.

- `DISCORD_WEBHOOK_URL` (requise) : L'adresse du webhook du salon Discord qui reçoit les messages. À obtenir ici : https://support.discord.com/hc/fr/articles/228383668
