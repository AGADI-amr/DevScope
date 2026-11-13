import * as Utils from './utils.js';
import * as API from './api.js';
const SearchForm = document.querySelector("#searchArea")
SearchForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    const searchBar = document.querySelector("#searchBar");
    let name = Utils.ValidateName(searchBar.value) ;
    const User = await API.getUser(name);
    //console.log(user);
    window.location.href = `pages/profil.html?username=${encodeURIComponent(name)}`
})