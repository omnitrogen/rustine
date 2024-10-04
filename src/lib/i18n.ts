import * as runtime from "$lib/paraglide/runtime.js";

import { createI18n } from "@inlang/paraglide-sveltekit";

export const i18n = createI18n(runtime, {
  pathnames: {
    "/learn": {
      "en-US": "/learn",
      "fr-FR": "/apprendre",
    },

    "/learn/tools": {
      "en-US": "/learn/tools",
      "fr-FR": "/apprendre/outils",
    },

    "/fix": {
      "en-US": "/fix",
      "fr-FR": "/réparer",
    },

    "/about": {
      "en-US": "/about",
      "fr-FR": "/a-propos",
    },
  },
  prefixDefaultLanguage: "always",
  defaultLanguageTag: "fr-FR",
});
