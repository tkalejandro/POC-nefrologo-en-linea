import {  namespaces } from "./i18n.constants";
import dashboard_es from './translations/dashboard_es.json'
export const es = {
  [namespaces.common]: {
    buttons: {
      ok: "Aceptar",
      cancel: "Cancelar",
    },
  },
  [namespaces.pages.dashboard]: dashboard_es
};

export const en = {
  [namespaces.common]: {
    buttons: {
      ok: "Ok",
      cancel: "Cancel",
    },
  },
  [namespaces.pages.dashboard]: {
    welcome: "Welcome",
  },
};
