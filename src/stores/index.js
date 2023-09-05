// import { defineStore } from "pinia";
// import bootstrap from "bootstrap/dist/js/bootstrap.min.js";
// export const useAppStore = defineStore("storeId", {
//   state: () => ({
//     bootstrap,
//   }),
// });

import { defineStore } from "pinia";
import {bootstrap} from 'bootstrap/dist/js/bootstrap.min.js';
import '@popperjs/core';
export const useAppStore = defineStore("storeId", {
  state: () => ({
    bootstrap,
  }),
});