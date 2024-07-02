# Tranformer du code JavaScript en code TypeScript

---

## Voici un morceau de code JavaScript :

```js
function hello(name) {
  console.log("Hello " + name);
}

const firstName = "bob";

hello(firstName);
hello(firstName + " marley");

function concat(a, b) {
  return a + b;
}

const wcs = concat("Wild", concat("Code", "School"));
console.log(wcs);
```

**Tranforme ce code pour qu'il devienne du TypeScript, en précisant le type des données où c'est nécessaire. Poste ensuite ton résultat via un gist.**

---

## Comment tester :

    tsc ConcatString.ts
    node CancatString.js

---

## Critères de validation

- [ ] Les types doivent être spécifiés où il faut
- [ ] Le code doit pouvoir être transpilé, puis lancé sans problème et afficher le même résultat dans la console
