import { reactive } from "vue";
export const store = reactive({
risultato:[],
api: "https://rickandmortyapi.com/api/character",
selected : "Starter"
});