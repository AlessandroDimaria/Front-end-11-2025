const articoli = [
  { slug: 'primo-post', titolo: 'Il mio primo post' },
  { slug: 'guida-nextjs', titolo: 'Guida completa a Next.js' },
  { slug: 'come-funziona-nextjs', titolo: 'Come funziona Next.js?' },
  { slug: 'next-js-e-wp-graphql', titolo: 'Next.js e WP GraphQL: come integrarli?' },
  { slug: 'template-next-template', titolo: 'Template per Next Template' },
  { slug: 'best-practices-per-nextjs', titolo: 'Best practices per Next.js' },
  { slug: 'next-js-e-react', titolo: 'Next.js e React: come utilizzarli insieme?' },
  { slug: 'creare-un-template-con-nextjs', titolo: 'Come creare un template con Next.js' },
  { slug: 'utilizzare-nextjs-in-una-app-wpfraql', titolo: 'Come utilizzare Next.js in una app WP GraphQL' },
  { slug: 'next-js-e-typescript', titolo: 'Next.js e TypeScript: come integrarli?' },

];
export default function BlogHome() {
  return (
    <div>
      {articoli.map(a => (
        <Link key={a.slug} href={`/blog/${a.slug}`}>{a.titolo}</Link>
      ))}
    </div>
  );
}

