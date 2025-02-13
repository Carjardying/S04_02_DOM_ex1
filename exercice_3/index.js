/*Pour cet exercice, on va créer un bouton qui compte les cliques.

Pour cela créé un <button id="counter">0 clics!</button> dans ton HTML. <- done


Ensuite, ajoute un script JS :
ok - Récupère le bouton dans le code JavaScript <- ok
ok - Créé une variable let count = 0 pour compter le nombre de clics
- Ajoute un évènement sur le bouton avec addEventListener: 
            - À chaque clic, incrémente la variable count
            - puis modifie le texte à l’intérieur du bouton avec la nouvelle valeur de count*/

const clickerCounter = document.querySelector('button#counter');

let count = 0;

clickerCounter.addEventListener('click', () => {
    count++;
    clickerCounter.innerText = `${count} clics!`
})

