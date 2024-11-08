import type { PageServerLoad } from './$types';
import getDirectusInstance from '$lib/directus';
import { languageTag } from '$lib/paraglide/runtime.js';
import { readItems } from '@directus/sdk';

export const load: PageServerLoad = async ({ fetch, depends }) => {
	depends('paraglide:lang');

	const directus = getDirectusInstance(fetch);

	const brands = await directus.request(
		readItems('brand', {
			deep: {
				translations: {
					_filter: {
						languages_code: {
							_eq: languageTag()
						}
					}
				}
			},
			fields: ['*', { translations: ['*'] }]
		})
	);

	return { brands: brands };
};
