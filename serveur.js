import { createServer } from "node:http";

// Les variables requises du modèle. Le service démarre sans elles (la campagne hebdomadaire le construit
// avec des valeurs d'essai) et dit lesquelles manquent sur /sante, au lieu de tomber au démarrage.
const REQUISES = ["DISCORD_WEBHOOK_URL"];
const port = Number(process.env.PORT ?? 3000);

function manquantes() {
  return REQUISES.filter((nom) => !process.env[nom]);
}

createServer((req, res) => {
  const chemin = (req.url ?? "/").split("?")[0];
  if (chemin === "/sante") {
    const absentes = manquantes();
    res.writeHead(200, { "content-type": "application/json; charset=utf-8" });
    res.end(JSON.stringify({ ok: true, modele: "bot-discord-node", variables_manquantes: absentes }));
    return;
  }
  if (chemin === "/") {
    res.writeHead(200, { "content-type": "application/json; charset=utf-8" });
    res.end(JSON.stringify({ modele: "bot-discord-node", message: "Bonjour depuis Bastide" }));
    return;
  }
  res.writeHead(404, { "content-type": "application/json; charset=utf-8" });
  res.end(JSON.stringify({ erreur: "introuvable" }));
}).listen(port);
