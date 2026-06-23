// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "bundelen",
      customCss: ["./src/styles/custom.css"],
      components: {
        Sidebar: "./src/components/Sidebar.astro",
      },
      social: [
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/bundelen",
        },
      ],
      sidebar: [
        {
          label: "Python Collect",
          collapsed: false,
          items: [
            {
              label: "Introduction",
              slug: "python-collect/introduction",
            },
            {
              label: "Usage",
              items: [
                {
                  label: "Installation",
                  slug: "python-collect/installation",
                },
                {
                  label: "API Reference",
                  slug: "python-collect/api",
                },
              ],
            },
          ],
        },
        {
          label: "Python Mailable",
          collapsed: false,
          items: [
            {
              label: "Introduction",
              slug: "python-mailable/introduction",
            },
            {
              label: "Usage",
              items: [
                {
                  label: "Installation",
                  slug: "python-mailable/installation",
                },
                {
                  label: "Building Mailables",
                  slug: "python-mailable/building-mailables",
                },
                {
                  label: "Templates",
                  slug: "python-mailable/templates",
                },
                {
                  label: "Rendering",
                  slug: "python-mailable/rendering",
                },
              ],
            },
            {
              label: "Advanced Usage",
              items: [
                {
                  label: "Using Your Own Mail Client",
                  slug: "python-mailable/using-your-own-mail-client",
                },
              ],
            },
          ],
        },
      ],
    }),
  ],
});
