import { reactive } from "vue";
export const store = reactive({
messaggio : "provasda",
risultato:[],
api: "https://rickandmortyapi.com/api/character",
selected : ""
});