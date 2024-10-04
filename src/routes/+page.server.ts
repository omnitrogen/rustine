import type { PageServerLoad } from "./$types";
import getDirectusInstance from "$lib/directus";
import { languageTag } from "$lib/paraglide/runtime.js";
import { readSingleton } from "@directus/sdk";

export const load: PageServerLoad = async ({ fetch, depends }) => {
  depends("paraglide:lang");

  const directus = getDirectusInstance(fetch);

  const global = await directus.request(
    readSingleton("global", {
      deep: {
        translations: {
          _filter: {
            _and: [
              {
                languages_code: { _eq: languageTag() },
              },
            ],
          },
        },
      },
      fields: ["*", { translations: ["*"] }],
      limit: 1,
    }),
  );

  return {
    global: {
      title: global?.translations![0]?.title?.blocks[0]?.data?.html,
      description: global?.translations![0]?.description?.blocks[0]?.data
        ?.html,
    },
  };
};
