import { Fighter } from "./src/Fighter";

const Heracles: Fighter = new Fighter("🧔 Heracles", 20, 6);
const Lion: Fighter = new Fighter("🦁 Nemean Lion", 11, 13);

let round: number = 1;

while (Heracles.isAlive() && Lion.isAlive()) {
  // Round #X
  console.info(`🕐 Round #${round}`);

  // Herlacles fight the Lion
  Heracles.fight(Lion);
  console.info(
    `${Heracles.name} 🗡️  ${Lion.name} | ${Lion.name} : ${Lion.life} 💚`
  );

  // The Lion fight Herlacles (if is alive )
  if (Lion.isAlive()) {
    Lion.fight(Heracles);
    console.info(
      `${Lion.name} 🗡️  ${Heracles.name} | ${Heracles.name} : ${Heracles.life} 💙`
    );
  }

  console.info("\n");

  round++;
}

// Who win

if (Heracles.isAlive()) {
  console.info(`${Heracles.name} win 👑 (${Heracles.life} 💙)`);
  console.info(`${Lion.name} is dead 💀`);
} else {
  console.info(`${Lion.name} win 👑 (${Lion.life} 💚)`);
  console.info(`${Heracles.name} is dead 💀`);
}
