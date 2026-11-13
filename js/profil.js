import { getUser } from "./api.js";
import * as Utils from './utils.js';

const searchBar = document.querySelector("#searchBar")
const parms = new URLSearchParams(window.location.search);
const username = parms.get("username")
searchBar.value = username;
searchBar
const User = await getUser(username);

console.log(User);
