import { i18n } from "$lib/i18n";
import { sequence } from "@sveltejs/kit/hooks";

async function directusHeaders({ event, resolve }) {
  return await resolve(event, {
    filterSerializedResponseHeaders: (key, _) => {
      return key.toLowerCase() === "content-type";
    },
  });
}

export const handle = sequence(i18n.handle(), directusHeaders);
