import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import { blogPosts, getPostBySlug } from "@/lib/blog-posts";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  return (
    <>
      <PageHero title={post.title} />

      <article className="blog-article">
        <div className="wrap blog-article-inner">
          {/* Cover Image */}
          <div className="blog-article-cover">
            <img src={post.coverImage} alt={post.title} />
            <span className="blog-article-tag">{post.tag}</span>
          </div>

          {/* Meta */}
          <div className="blog-article-meta">
            {post.author && <span><strong>By {post.author}</strong></span>}
            {post.date && (
              <>
                <span className="blog-article-dot">•</span>
                <span>{post.date}</span>
              </>
            )}
            {post.readTime && (
              <>
                <span className="blog-article-dot">•</span>
                <span>{post.readTime}</span>
              </>
            )}
          </div>

          {/* Excerpt as lede */}
          {post.excerpt && <p className="blog-article-lede">{post.excerpt}</p>}

          {/* Body with inline images */}
          <div className="blog-article-body">
            {post.body.map((paragraph, i) => {
              const image = post.inlineImages?.find((img) => img.after === i);
              return (
                <div key={i}>
                  <p>{paragraph}</p>
                  {image && (
                    <figure className="blog-article-figure">
                      <img src={image.src} alt={image.caption || ""} loading="lazy" />
                      {image.caption && <figcaption>{image.caption}</figcaption>}
                    </figure>
                  )}
                </div>
              );
            })}
          </div>

          {/* Back link */}
          <div className="blog-article-back-wrap">
            <Link href="/blog" className="blog-article-back">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M19 12H5M12 19l-7-7 7-7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              Back to all posts
            </Link>
          </div>
        </div>
      </article>
    </>
  );
}