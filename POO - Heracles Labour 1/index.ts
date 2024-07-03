import { Fighter } from "./src/Fighter";

const Heracles = new Fighter("🧔 Heracles", 20, 6);
const Lion = new Fighter("🦁 Nemean Lion", 11, 13);

let round: number = 1;

while (Heracles.life > 0 && Lion.life > 0) {
  // Round #X
  console.info(`🕐 Round #${round}`);

  // Herlacles fight the Lion
  Lion.fight(Heracles);
  console.info(
    `${Heracles.name} 🗡️   ${Lion.name} | ${Lion.name} : ${Lion.life} 💚`
  );

  // The Lion Herlacles
  Heracles.fight(Lion);
  console.info(
    `${Lion.name} 🗡️   ${Heracles.name} | ${Heracles.name} : ${Heracles.life} 💙`,
    "\n"
  );

  round++;
}

// Who win

if (Heracles.isAlive()) console.info(`${Heracles.name} win 👑`);
else console.info(`${Lion.name} win 👑`);
