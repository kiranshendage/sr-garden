// export interface BlogPost {
//   slug: string;
//   tag: string;
//   title: string;
//   excerpt: string;
//   /** Body paragraphs shown on the post's own page. */
//   body: string[];
// }

// export const blogPosts: BlogPost[] = [
//   {
//     slug: "5-plants-that-thrive-on-terraces",
//     tag: "Guide",
//     title: "5 Plants That Thrive on Terraces",
//     excerpt: "Species that handle full sun, wind and shallow pots without fuss.",
//     body: [
//       "Terrace gardens deal with more sun, more wind and shallower root space than a ground-level bed — so the plant list that works in a backyard doesn't always survive on a rooftop.",
//       "The plants that tend to hold up best share a few traits: they tolerate direct afternoon sun, they don't mind drying out a little between waterings, and they're not too tall to catch every gust that comes through.",
//       "When we plan a terrace garden, we start with the site itself — how much direct sun it gets, how exposed it is, and how deep the pots or beds can realistically go — before picking what goes in the ground. That's the difference between a terrace that needs constant replanting and one that just keeps growing.",
//     ],
//   },
//   {
//     slug: "setting-up-drip-irrigation-for-a-balcony",
//     tag: "Irrigation",
//     title: "Setting Up Drip Irrigation for a Balcony",
//     excerpt: "What a small drip system needs to keep pots watered on schedule.",
//     body: [
//       "A balcony doesn't need the same irrigation setup as a full lawn, but it still benefits from one — hand-watering pots every day is the single most common reason a balcony garden gets neglected.",
//       "A basic drip setup for a balcony is usually just a small pressure-reducing valve, a length of drip line run along the pots, and a simple timer. It's a small install, but it's the difference between a garden that needs daily attention and one that mostly looks after itself.",
//       "The main things to get right are the number of drippers per pot (bigger pots need more than one) and the schedule — shorter, more frequent watering usually beats one long soak, especially in peak summer.",
//     ],
//   },
//   {
//     slug: "what-to-prune-after-monsoon",
//     tag: "Maintenance",
//     title: "What to Prune After Monsoon",
//     excerpt: "A simple checklist for cutting back growth once the rains ease.",
//     body: [
//       "Monsoon growth is fast and a little unruly — plants put on a lot of new, soft growth during the rains, and not all of it holds up once things dry out again.",
//       "Once the rains ease off, it's worth going through the garden and cutting back anything that's grown leggy or is crowding its neighbours, clearing out any waterlogged or rotting material at the base of plants, and checking drainage around beds and pots that may have silted up.",
//       "This is also a good time to check for pest and fungal issues that tend to show up during humid weeks — catching them early, right after monsoon, is a lot easier than dealing with them once they've spread.",
//     ],
//   },
// ];

// export function getPostBySlug(slug: string): BlogPost | undefined {
//   return blogPosts.find((post) => post.slug === slug);
// }


export interface BlogPost {
  slug: string;
  tag: string;
  title: string;
  excerpt: string;
  /** Cover image shown on the blog card & post hero. */
  coverImage: string;
  /** Optional author info. */
  author?: string;
  date?: string;
  readTime?: string;
  /** Body paragraphs shown on the post's own page. */
  body: string[];
  /** Optional inline images inserted between paragraphs. */
  inlineImages?: { after: number; src: string; caption?: string }[];
}

export const blogPosts: BlogPost[] = [
  {
    slug: "5-plants-that-thrive-on-terraces",
    tag: "Guide",
    title: "5 Plants That Thrive on Terraces",
    excerpt: "Species that handle full sun, wind and shallow pots without fuss.",
    coverImage:
      "https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?auto=format&fit=crop&w=1600&q=80",
    author: "Amol Malegaonkar",
    date: "Mar 12, 2025",
    readTime: "4 min read",
    body: [
      "Terrace gardens deal with more sun, more wind and shallower root space than a ground-level bed — so the plant list that works in a backyard doesn't always survive on a rooftop.",
      "The plants that tend to hold up best share a few traits: they tolerate direct afternoon sun, they don't mind drying out a little between waterings, and they're not too tall to catch every gust that comes through.",
      "When we plan a terrace garden, we start with the site itself — how much direct sun it gets, how exposed it is, and how deep the pots or beds can realistically go — before picking what goes in the ground. That's the difference between a terrace that needs constant replanting and one that just keeps growing.",
    ],
    inlineImages: [
      {
        after: 1,
        src: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=1400&q=80",
        caption: "Hardy species like bougainvillea and adenium thrive in exposed terrace conditions.",
      },
    ],
  },
  {
    slug: "setting-up-drip-irrigation-for-a-balcony",
    tag: "Irrigation",
    title: "Setting Up Drip Irrigation for a Balcony",
    excerpt: "What a small drip system needs to keep pots watered on schedule.",
    coverImage:
      "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=1600&q=80",
    author: "Amol Malegaonkar",
    date: "Feb 26, 2025",
    readTime: "3 min read",
    body: [
      "A balcony doesn't need the same irrigation setup as a full lawn, but it still benefits from one — hand-watering pots every day is the single most common reason a balcony garden gets neglected.",
      "A basic drip setup for a balcony is usually just a small pressure-reducing valve, a length of drip line run along the pots, and a simple timer. It's a small install, but it's the difference between a garden that needs daily attention and one that mostly looks after itself.",
      "The main things to get right are the number of drippers per pot (bigger pots need more than one) and the schedule — shorter, more frequent watering usually beats one long soak, especially in peak summer.",
    ],
    inlineImages: [
      {
        after: 1,
        src: "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?auto=format&fit=crop&w=1400&q=80",
        caption: "A simple drip line and timer keeps balcony pots consistent, even when you travel.",
      },
    ],
  },
  {
    slug: "what-to-prune-after-monsoon",
    tag: "Maintenance",
    title: "What to Prune After Monsoon",
    excerpt: "A simple checklist for cutting back growth once the rains ease.",
    coverImage:
      "https://images.unsplash.com/photo-1558904541-efa843a96f01?auto=format&fit=crop&w=1600&q=80",
    author: "Amol Malegaonkar",
    date: "Feb 08, 2025",
    readTime: "5 min read",
    body: [
      "Monsoon growth is fast and a little unruly — plants put on a lot of new, soft growth during the rains, and not all of it holds up once things dry out again.",
      "Once the rains ease off, it's worth going through the garden and cutting back anything that's grown leggy or is crowding its neighbours, clearing out any waterlogged or rotting material at the base of plants, and checking drainage around beds and pots that may have silted up.",
      "This is also a good time to check for pest and fungal issues that tend to show up during humid weeks — catching them early, right after monsoon, is a lot easier than dealing with them once they've spread.",
    ],
    inlineImages: [
      {
        after: 1,
        src: "https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?auto=format&fit=crop&w=1400&q=80",
        caption: "Post-monsoon pruning restores light and airflow, preventing pest build-up.",
      },
    ],
  },
];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}