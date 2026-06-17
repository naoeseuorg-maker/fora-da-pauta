import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://www.terceironivel.org",
      lastModified: new Date(),
    },
    {
      url: "https://www.terceironivel.org/fora-da-pauta",
      lastModified: new Date(),
    },
    {
      url: "https://www.terceironivel.org/editorial/por-que-terceiro-nivel",
      lastModified: new Date(),
    },
    {
      url: "https://www.terceironivel.org/participar",
      lastModified: new Date(),
    },
    {
      url: "https://www.terceironivel.org/quem-ganha",
      lastModified: new Date(),
    },
    {
      url: "https://www.terceironivel.org/trilhoes",
      lastModified: new Date(),
    },
    {
      url: "https://www.terceironivel.org/vitoria-e-sua",
      lastModified: new Date(),
    },
  ];
}