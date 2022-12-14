import { namespaces } from "./i18n.constants";
import { booking_en, booking_es, app_en, app_es, dashboard_en, dashboard_es } from "./translations";

export const es = {
    [namespaces.app]: app_es,
    [namespaces.pages.dashboard]: dashboard_es,
    [namespaces.pages.booking]: booking_es

};

export const en = {
    [namespaces.app]: app_en,
    [namespaces.pages.dashboard]: dashboard_en,
    [namespaces.pages.booking]: booking_en
};
