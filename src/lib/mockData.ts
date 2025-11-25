import { BlogPost } from './types'

export const mockBlogPosts: BlogPost[] = [
  {
    id: '1',
    blogTitle: 'Getting Started with Next.js 15',
    blogPostSlug: 'getting-started-nextjs-15',
    createdAt: '2024-01-15T10:00:00Z',
    createdBy: {
      name: 'Sarah Chen'
    },
    blogPostContent: {
      html: `
        <p>Next.js 15 introduces several exciting features that make building modern web applications even more efficient. In this post, we'll explore the key improvements and how to get started.</p>

        <h2>Key Features</h2>
        <p>The latest version includes enhanced performance optimizations, improved developer experience with Turbopack, and better support for React Server Components.</p>

        <h3>Turbopack Integration</h3>
        <p>Turbopack is now the default development server, offering significantly faster build times and hot module replacement. This means you can iterate on your code more quickly than ever before.</p>

        <h3>Server Components</h3>
        <p>React Server Components are now more stable and production-ready, allowing you to build faster applications with less JavaScript sent to the client.</p>

        <blockquote>Next.js 15 represents a major leap forward in web development productivity.</blockquote>

        <p>To get started, simply run: <code>npx create-next-app@latest</code></p>
      `
    }
  },
  {
    id: '2',
    blogTitle: 'Mastering TypeScript: Advanced Patterns',
    blogPostSlug: 'mastering-typescript-patterns',
    createdAt: '2024-01-18T14:30:00Z',
    createdBy: {
      name: 'Alex Kumar'
    },
    blogPostContent: {
      html: `
        <p>TypeScript has become an essential tool for modern web development. Let's dive into some advanced patterns that will level up your TypeScript skills.</p>

        <h2>Generic Constraints</h2>
        <p>Generic constraints allow you to write more flexible and reusable code while maintaining type safety. Here's how they work:</p>

        <pre><code>function getProperty&lt;T, K extends keyof T&gt;(obj: T, key: K) {
  return obj[key];
}</code></pre>

        <h2>Conditional Types</h2>
        <p>Conditional types enable you to create types that change based on conditions, making your type system more powerful and expressive.</p>

        <h3>Mapped Types</h3>
        <p>Mapped types let you transform existing types into new ones, which is incredibly useful for creating utility types.</p>

        <p>These patterns might seem complex at first, but they become invaluable tools as your projects grow in complexity.</p>
      `
    }
  },
  {
    id: '3',
    blogTitle: 'Building Accessible Web Applications',
    blogPostSlug: 'building-accessible-web-apps',
    createdAt: '2024-01-22T09:15:00Z',
    createdBy: {
      name: 'Jordan Lee'
    },
    blogPostContent: {
      html: `
        <p>Accessibility isn't just a nice-to-have feature—it's essential for creating inclusive web experiences. Let's explore best practices for building accessible applications.</p>

        <h2>Semantic HTML</h2>
        <p>Using semantic HTML elements is the foundation of accessibility. Elements like <code>&lt;nav&gt;</code>, <code>&lt;main&gt;</code>, and <code>&lt;article&gt;</code> provide meaningful structure for screen readers.</p>

        <h2>ARIA Attributes</h2>
        <p>While semantic HTML should be your first choice, ARIA (Accessible Rich Internet Applications) attributes help when you need to create custom interactive components.</p>

        <h3>Keyboard Navigation</h3>
        <p>Every interactive element should be accessible via keyboard. Test your application by navigating through it using only the Tab key and Enter/Space for activation.</p>

        <h3>Color Contrast</h3>
        <p>Ensure sufficient color contrast between text and backgrounds. The WCAG guidelines recommend a minimum contrast ratio of 4.5:1 for normal text.</p>

        <blockquote>Accessibility benefits everyone, not just users with disabilities.</blockquote>

        <p>By following these practices, you create applications that everyone can use and enjoy.</p>
      `
    }
  },
  {
    id: '4',
    blogTitle: 'CSS-in-JS vs Tailwind: Which Should You Choose?',
    blogPostSlug: 'css-in-js-vs-tailwind',
    createdAt: '2024-01-25T16:45:00Z',
    createdBy: {
      name: 'Morgan Taylor'
    },
    blogPostContent: {
      html: `
        <p>The debate between CSS-in-JS and utility-first frameworks like Tailwind continues. Let's examine the pros and cons of each approach to help you make an informed decision.</p>

        <h2>CSS-in-JS Benefits</h2>
        <p>CSS-in-JS solutions like styled-components offer component-scoped styles, dynamic styling based on props, and excellent TypeScript support.</p>

        <ul>
          <li>Automatic critical CSS extraction</li>
          <li>Dead code elimination</li>
          <li>Dynamic theming capabilities</li>
          <li>No naming conflicts</li>
        </ul>

        <h2>Tailwind's Advantages</h2>
        <p>Tailwind CSS provides a comprehensive set of utility classes that speed up development and maintain consistency across your application.</p>

        <ul>
          <li>Rapid prototyping and development</li>
          <li>Smaller bundle sizes in production</li>
          <li>Consistent design system out of the box</li>
          <li>No context switching between files</li>
        </ul>

        <h3>The Verdict</h3>
        <p>Both approaches have their merits. CSS-in-JS excels when you need highly dynamic styles, while Tailwind shines for rapid development and maintaining design consistency.</p>

        <p>Consider your team's preferences, project requirements, and performance needs when making your choice.</p>
      `
    }
  },
  {
    id: '5',
    blogTitle: 'Understanding React Server Components',
    blogPostSlug: 'react-server-components',
    createdAt: '2024-01-28T11:20:00Z',
    createdBy: {
      name: 'Casey Martinez'
    },
    blogPostContent: {
      html: `
        <p>React Server Components represent a fundamental shift in how we think about React applications. Let's explore what they are and why they matter.</p>

        <h2>What Are Server Components?</h2>
        <p>Server Components are React components that run exclusively on the server. They never send JavaScript to the client, resulting in faster page loads and reduced bundle sizes.</p>

        <h2>Key Benefits</h2>

        <h3>Zero Bundle Size</h3>
        <p>Server Components don't add to your client-side JavaScript bundle. This means faster initial page loads and better performance on slower devices.</p>

        <h3>Direct Backend Access</h3>
        <p>You can access databases, file systems, and other server-only resources directly within your components, without creating API routes.</p>

        <pre><code>async function BlogPost({ id }) {
  const post = await db.post.findUnique({ where: { id } })
  return &lt;article&gt;{post.content}&lt;/article&gt;
}</code></pre>

        <h3>Automatic Code Splitting</h3>
        <p>Server Components enable automatic, granular code splitting by default, ensuring users only download the code they need.</p>

        <h2>When to Use Client Components</h2>
        <p>You still need Client Components for interactivity, browser APIs, and state management. The key is using each type of component where it makes the most sense.</p>

        <blockquote>Server Components don't replace Client Components—they complement them.</blockquote>
      `
    }
  }
]

export function getMockPosts(): BlogPost[] {
  return mockBlogPosts
}

export function getMockPostBySlug(slug: string): BlogPost | undefined {
  return mockBlogPosts.find(post => post.blogPostSlug === slug)
}
