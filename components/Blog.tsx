// // import Link from "next/link";
// // import ScrollReveal from "./ScrollReveal";
// // import { blogPosts } from "@/lib/blog-posts";

// // export default function Blog() {
// //   return (
// //     <section className="blog">
// //       <div className="wrap">
// //         <div className="work-head">
// //           <div>
// //             <p className="eyebrow">From the Blog</p>
// //             <h2>Tips &amp; Notes from the Garden</h2>
// //           </div>
// //           <p>Short guides on keeping a garden healthy between our maintenance visits.</p>
// //         </div>
// //         <div className="blog-grid">
// //           {blogPosts.map((post) => (
// //             <ScrollReveal key={post.slug} className="blog-card">
// //               <Link href={`/blog/${post.slug}`} className="blog-card-link">
// //                 <span className="blog-tag">{post.tag}</span>
// //                 <h3>{post.title}</h3>
// //                 <p>{post.excerpt}</p>
// //               </Link>
// //             </ScrollReveal>
// //           ))}
// //         </div>
// //       </div>
// //     </section>
// //   );
// // }


// "use client";

// import Link from "next/link";
// import { blogPosts } from "@/lib/blog-posts";
// import ScrollReveal from "./ScrollReveal";

// export default function Blog() {
//   return (
//     <section className="blog-v2">
//       <div className="blog-v2-orb blog-v2-orb-1" aria-hidden="true" />
//       <div className="blog-v2-orb blog-v2-orb-2" aria-hidden="true" />

//       <div className="wrap">
//         <div className="blog-v2-head">
//           <p className="sv3-eyebrow">Journal</p>
//           <h2>Notes from the Garden</h2>
//           <p className="blog-v2-lede">
//             Small, useful reads on planting, care and the small
//             decisions that make a garden last.
//           </p>
//         </div>

//         <div className="blog-v2-grid">
//           {blogPosts.map((post) => (
//             <ScrollReveal key={post.slug} className="blog-v2-card" as="article">
//               <Link href={`/blog/${post.slug}`} className="blog-v2-link">
//                 <div className="blog-v2-image">
//                   <img src={post.coverImage} alt={post.title} loading="lazy" />
//                   <span className="blog-v2-tag">{post.tag}</span>
//                 </div>

//                 <div className="blog-v2-body">
//                   <div className="blog-v2-meta">
//                     {post.date && <span>{post.date}</span>}
//                     {post.readTime && (
//                       <>
//                         <span className="blog-v2-dot">•</span>
//                         <span>{post.readTime}</span>
//                       </>
//                     )}
//                   </div>

//                   <h3>{post.title}</h3>
//                   <p>{post.excerpt}</p>

//                   <span className="blog-v2-read">
//                     Read article
//                     <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//                       <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
//                     </svg>
//                   </span>
//                 </div>
//               </Link>
//             </ScrollReveal>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";

import Link from "next/link";
import { blogPosts } from "@/lib/blog-posts";
import ScrollReveal from "./ScrollReveal";

export default function Blog() {
  return (
    <section className="blog-v2">
      <div className="blog-v2-orb blog-v2-orb-1" aria-hidden="true" />
      <div className="blog-v2-orb blog-v2-orb-2" aria-hidden="true" />

      <div className="wrap">
        <div className="blog-v2-head">
          <p className="sv3-eyebrow">Journal</p>
          <h2>Notes from the Garden</h2>
          <p className="blog-v2-lede">
            Small, useful reads on planting, care and the small
            decisions that make a garden last.
          </p>
        </div>

        <div className="blog-v2-grid">
          {blogPosts.map((post) => (
            <ScrollReveal key={post.slug} className="blog-v2-card" as="article">
              <Link href={`/blog/${post.slug}`} className="blog-v2-link">
                <div className="blog-v2-image">
                  <img src={post.coverImage} alt={post.title} loading="lazy" />
                  <span className="blog-v2-tag">{post.tag}</span>
                </div>

                <div className="blog-v2-body">
                  <div className="blog-v2-meta">
                    {post.date && <span>{post.date}</span>}
                    {post.readTime && (
                      <>
                        <span className="blog-v2-dot">•</span>
                        <span>{post.readTime}</span>
                      </>
                    )}
                  </div>

                  <h3>{post.title}</h3>
                  <p>{post.excerpt}</p>

                  <span className="blog-v2-read">
                    Read article
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}