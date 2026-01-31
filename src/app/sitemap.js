export default function sitemap() {
    const baseUrl = 'https://yashkarthiya.in';

    // Static routes
    const routes = [
        '',
        '/systems',
        '/ai',
        '/philosophy',
        '/contact',
        '/design-notes',
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: route === '' ? 1 : 0.8,
    }));

    // Dynamic system routes would ideally be fetched here if they weren't hardcoded or if we want to include them explicitly.
    // Since we have the data locally, we can import it if needed, or just let them be discovered via links.
    // But for a better sitemap, let's map the known projects.
    // We'll leave it simple for now as importing the data might require marking this file as server-only or similar depending on next.js version nuances,
    // but sitemap.js usually runs on the server side build.

    // Let's import projects to add them to sitemap 
    const { projects } = require('@/data/projects');

    const projectRoutes = projects.map((project) => ({
        url: `${baseUrl}/systems/${project.id}`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.9, // High priority for content
    }));

    return [...routes, ...projectRoutes];
}
