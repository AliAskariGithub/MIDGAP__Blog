import { type SchemaTypeDefinition } from 'sanity'
import { Author } from '../lib/author';
import { post } from './../post';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [post, Author],
}
