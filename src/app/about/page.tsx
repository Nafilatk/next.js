export default function AboutPage() {
  return (
    <div className="p-5">
      <h1 className="text-3xl font-bold text-green-600">About Us</h1>
      <h1>Welcome to our Next.js app!</h1>
      <p>

Server-Side Rendering (SSR): Next.js allows developers to pre-render pages on the server at request time, providing better performance and SEO compared to traditional client-side rendering.
Static Site Generation (SSG): Next.js offers static site generation for pages that don’t change frequently. This process involves generating HTML pages at build time, which are then served to users directly from a CDN.
API Routes: Next.js provides a simple way to create API endpoints within your application, eliminating the need for a separate backend server.
File-Based Routing: Next.js uses a file-based routing system where routes are created by simply adding files and folders to the pages directory. This makes it easy to organize and manage your application’s structure.
Automatic Code Splitting: Next.js automatically splits your code into smaller chunks, ensuring that only the necessary JavaScript is loaded for each page.
Hot Module Replacement (HMR): HMR allows developers to see changes in real-time without needing to refresh the browser, significantly speeding up the development process.
Built-In CSS and Sass Support: Next.js includes support for importing CSS and Sass files directly into your components, making it easy to style your application without additional configuration.
Image Optimization: Next.js 15 introduced built-in Image Optimization, which automatically serves images in the best format and size, improving performance across devices.
Streaming Metadata (Next.js 15): Streaming Metadata allows asynchronous metadata fetching without blocking page rendering or client-side transitions, improving the performance of your application.
Turbopack Performance Enhancements (Next.js 15): The Turbopack bundler has been optimized for faster compile times and reduced memory usage, enabling a better development experience.</p>


   
    </div>
  );
}
