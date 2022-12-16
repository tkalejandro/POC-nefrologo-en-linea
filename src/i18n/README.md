# How to use translations

We are using i18n. A library that specialize in translation. They have a lot of features but for now we will just focus in using translations.


## How to create a translation file

Lets imagine we are creating the translation for TEST page in EN / ES.

1. Open "./i18n.constants.ts" and write inside the route as a string. This string is what we will use to recognize which translation page to use.

````
export const namespaces = {
    pages: {
    ... 
        test: "pages.test",
    ...
    },
    //or if something specific and not a page
    ...
        test2: "test2",
    ...
  };

````

2. Create 2 JSON files inside "./translations". 

- testPage_en.json
- testPage_es.json

In case is not a page and is something specific:

- test_en.json
- test_es.json

Once created, you can organize your variables to translation for example:

```
{   
    ...
        "messages":{
        ...
            "hello": "Hola"
            "error": "Algo esta mal"
        ...
    }
    ...
}

PRO TIP: Keep the structure same as your components, and use as long as you can the same names of their components.
```

3. Now import the translation files to "./i18n.translations.ts". Make sure you match the correct language.

````
SPANISH - ES

export const es = {
...
  [namespaces.test2]: test_es,
  [namespaces.pages.test]: testPage_es
...
};
````

## How to use the translation in a React Component.

Lets imagine we want to call the error message. What is important is "t" and "useTranslation".
Remember it will have the same JSON structure you provide. 

````
...
import { useTranslation } from 'react-i18next'
import { namespaces } from '../../../../i18n/i18n.constants'
...

const Welcome = (): JSX.Element => {

  const { t } = useTranslation(namespaces.pages.test)
  
  return (
    <Box>
      <Typography>{t("messages.error")}</Typography>
    </Box>
  )
}

export default Welcome
````

## How to pass variables to translation.

Lets imagine we want to translate. "I am 20 years old." As you can see there is a number. Probably this number will come from an API. So we need to make it dynamic.

1. Inside React Component. What is important is "t" second parameter.

````
const Welcome = (): JSX.Element => {

  const { t } = useTranslation(namespaces.pages.test)
  const dynamicAge = 20
  return (
    <Box>
      <Typography>{t("messages.myAgeIs", {age: dynamicAge})}</Typography>
    </Box>
  )
}
````

2. Inside your JSON file call the variable. The important here is the double curly bracket. Same name as your variable.

````
{   
    "messages":{
    ...
        "myAgeIs": "Yo tengo {{age}} años."
    }
}
````

## How to initiate a new Language

Lets imagine we want to add Russian.

1. First you need to create the constant for russian inside "./i18n.constants".

````
 export const languages = {
    ...
    ru: "ru"
};
````

2. Initiate the language resource inside "./i18n.ts"

````
...
import { ... , ru } from "./i18n.translations";
...


const createI18n = (language: string): i18nInstance => {
  const i18n = i18next.createInstance().use(initReactI18next);

  i18n.init({
   ...
    resources: {
    ...
      [languages.ru]: ru,
    ...
    },
  });

  return i18n;
};

export const i18n = createI18n(languages.es);
````

3. Start now the translations files. Make sure you create all current Translation files. If there are currently 8 for Spanish and 8 for english, that means we need 8 more files for Russian. So from 16 files to 24 files.

````
export const ru = {
    ...
    [namespaces.common]: common_ru,
    [namespaces.pages.dashboard]: dashboard_ru
    ...
};
````

## How to change the project default Language.

Inside "./i18n.ts"  at the very bottom change the language to your preference. Lets say we want English as default.

````
...
import { es , en , ru } from "./i18n.translations";
...


export const i18n = createI18n(languages.en); //en as English
````
