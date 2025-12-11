// @northsoon/astro-seo
// SEO component for Astro with full TypeScript support

// Component exports (default and named)
export { default as AstroSeo } from "./src/AstroSeo.astro";
export { default } from "./src/AstroSeo.astro";

// Type exports
export * from "./src/types";

// Re-export specific commonly used types for convenience
export type {
  AstroSeoProps,
  OpenGraph,
  OpenGraphArticle,
  OpenGraphMedia,
  Twitter,
  MetaTag,
  LinkTag,
  LanguageAlternate,
  AdditionalRobotsProps,
} from "./src/types";
