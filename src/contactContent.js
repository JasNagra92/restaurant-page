function contactload() {
  const mainContent = document.querySelector("#mainContent");
  mainContent.classList.replace("mainContentMenu", "contactContent");
  mainContent.classList.replace("mainContent", "contactContent");

  const headChef = document.createElement("div");
  headChef.classList.add("contact");
  const chefContact = document.createElement("h3");
  chefContact.innerHTML = "Head Pit Boss - Jas Nagra";
  const headPhone = document.createElement('h3')
  headPhone.innerHTML = "778 - 889 - 1317"
  headPhone.classList.add("phone")
  headChef.appendChild(chefContact);
  headChef.appendChild(headPhone)
  mainContent.appendChild(headChef);

  const sousChef = document.createElement("div");
  sousChef.classList.add("contact");
  const sousChefContact = document.createElement("h3");
  sousChefContact.innerHTML = "Sous Chef - Jai Nagra";
  sousChef.appendChild(sousChefContact);
  mainContent.appendChild(sousChef);

  const tester = document.createElement("div");
  tester.classList.add("contact");
  const testerContact = document.createElement("h3");
  testerContact.innerHTML = "Head taste tester - Elias Nagra";
  tester.appendChild(testerContact);
  mainContent.appendChild(tester);
}
export { contactload };
