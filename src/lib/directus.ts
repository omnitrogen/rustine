import { PUBLIC_APIURL } from "$env/static/public";
import type { Schema } from "$lib/types/api-collection";

import { createDirectus, rest } from "@directus/sdk";

import { type LoadEvent } from "@sveltejs/kit";

export default function getDirectusInstance(fetch: LoadEvent["fetch"]) {
  const options = { globals: { fetch } };

  const directus = createDirectus<Schema>(PUBLIC_APIURL, options).with(rest());

  return directus;
}
