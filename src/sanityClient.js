import sanityClient from '@sanity/client';

export default sanityClient({
  projectId: 'enc6d5b5',
  dataset: 'production',
  apiVersion: '2022-01-29',
  useCdn: true,
});
