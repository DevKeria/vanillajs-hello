import "bootstrap";
import "./style.css";
import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

function generateDomainNames() {
  let pronouns = ['the', 'our'];
  let adjectives = ['great', 'big'];
  let nouns = ['jogger', 'racoon'];

  let domainNames = [];

  pronouns.forEach(pronoun => {
    adjectives.forEach(adj => {
      nouns.forEach(noun => {
        let domainName = `${pronoun}${adj}${noun}.com`;
        domainNames.push(domainName);
      });
    });
  });

  let domainList = document.getElementById('domainList');
  domainList.innerHTML = '';
  domainNames.forEach(domain => {
    let listItem = document.createElement('li');
    listItem.textContent = domain;
    domainList.appendChild(listItem);
  });
}

document.getElementById('generateButton').addEventListener('click', generateDomainNames);

export { generateDomainNames }; // Export the function to be used as a module