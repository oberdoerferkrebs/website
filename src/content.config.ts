import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Image fields are public paths (e.g. "/projects/bend/detail.jpg") pointing
// into /public. Until a real file is added, leave the field out and the
// components render a light-grey placeholder block instead.
const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    year: z.number(),
    materials: z.string(),
    dimensions: z.string(),
    exhibition: z.string(),
    thumbDetail: z.string().optional(), // tight textural crop: strip rest state
    thumbFull: z.string().optional(), // full piece with air: strip hover reveal
    fillImage: z.string().optional(), // edge-to-edge texture for the O&K monogram fill (falls back to thumbDetail)
    focalX: z.number().min(0).max(100).default(50),
    focalY: z.number().min(0).max(100).default(50),
    images: z.array(z.string()).default([]),
    instagramUrl: z.string().optional(),
    featured: z.boolean().default(false),
    shortText: z.string(),
  }),
});

export const collections = { projects };
