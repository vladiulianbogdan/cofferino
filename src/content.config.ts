import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const pages = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/pages' }),
  schema: z.object({}).passthrough(),
});

const galerie = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/galerie' }),
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    description: z.string().optional(),
    cover_image: z.string().optional(),
    images: z.array(z.object({
      src: z.string(),
      alt: z.string().optional(),
    })).default([]),
    videos: z.array(z.object({
      url: z.string(),
      title: z.string().optional(),
      thumbnail: z.string().optional(),
    })).default([]),
    order: z.number().default(99),
  }),
});

export const collections = { pages, galerie };
