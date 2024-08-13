import { createSelector } from "@reduxjs/toolkit";

export const getContacts = state => state.contacts.items;

export const getIsLoading = state => state.contacts.isLoading;

export const getError = state => state.contacts.error;
export const getFilterValue= state => state.filter.filter;

export const setFilteredContacs=createSelector([getContacts,getFilterValue],(contacts,filter)=>{
return contacts.filter(contact=>contact.name.toLowerCase().includes(filter.toLowerCase()));
})