import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
    projectId: 'kgexwkac',
    dataset: 'production',
    apiVersion: '2022-04-24',
    useCdn: true,
    token: process.env.THE_MALL_SANITY_TOKEN
})

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);