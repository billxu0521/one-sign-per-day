
import { defineStore } from "pinia";
import signList from "@/store/data/signList";

export const useFormRecordMaker = defineStore("utils", (app) => {
  
  const getSignList = signList;
 
  return {
    getSignList
  };
});
