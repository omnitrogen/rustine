import type { PageServerLoad } from "./$types";
import getDirectusInstance from "$lib/directus";
import { languageTag } from "$lib/paraglide/runtime.js";
import { readSingleton } from "@directus/sdk";

export const load: PageServerLoad = async ({ fetch, depends }) => {
  depends("paraglide:lang");

  const directus = getDirectusInstance(fetch);

  const about = await directus.request(
    readSingleton("about", {
      deep: {
        translations: {
          _filter: {
            languages_code: {
              _eq: languageTag(),
            },
          },
        },
      },
      fields: ["*", { translations: ["*"] }],
      limit: 1,
    }),
  );

  return { about: about.translations![0].text };
};
