import { defineConfig } from 'astro/config';
import 'dotenv/config';
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()]
});