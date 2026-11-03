import projectData from "./data/projects.json";

export default function sitemap() {
  const baseUrl = "https://www.ton-domaine.com";

  const staticPages = [
    "",
    "/about",
    "/formations",
    "/projects",
    "/contact",
  ].map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: path === "" ? 1 : 0.8,
  }));

  const projectPages = projectData.map((project) => ({
    url: `${baseUrl}/projects/${project.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...staticPages, ...projectPages];
}