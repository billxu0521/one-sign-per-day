
import { defineStore } from "pinia";
import signList from "@/store/data/signList";

export const useSignList = defineStore("signlist", (app) => {
  
  const signListData = signList;
 
  return {
    signListData
  };
});
