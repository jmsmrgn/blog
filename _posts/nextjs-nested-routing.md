---
title: 'Next.js: Nested Routing'
date: 2023-9-12
slug: nextjs-nested-routing
tags:
  - next.js
  - javascript
  - react
---

Dynamic routing is a technique that allows your Next.js application to handle dynamic URLs effortlessly. Instead of defining routes for each individual page, you can create a single route pattern that captures dynamic segments of the URL. For instance, if you're building an e-commerce site, you might have a dynamic route like `/products/[productId]`, where `[productId]` can be any product ID.

This flexibility is awesome, but what if you want to go deeper and create a structure like `/category/[category]/[productId]`, where you have both category and product IDs in the URL? This is where nested dynamic routing comes into play.

#### Nested Dynamic Routing in Next.js

Next.js takes dynamic routing to the next level by allowing you to nest dynamic routes within each other. This means you can create complex URL structures with multiple dynamic segments, giving you more control and organization in your application.

Let's break down how this works:

1. **Create Nested Folders:** To start, create a folder structure that matches your desired URL structure. For our example, you'd create a folder structure like `/pages/category/[category]/[productId]`.
2. **Add Page Components:** Within these folders, add React components that represent the pages. In this case, you'd have a component for handling the `/category/[category]/[productId]` route.
3. **Access Dynamic Parameters:** To access dynamic parameters, use the `useRouter` hook from Next.js. You can easily retrieve the `category` and `productId` values from the URL.

```jsx
import { useRouter } from 'next/router';

function ProductPage() {
  const router = useRouter();
  const { category, productId } = router.query;
}
```

4. **Generate Links:** Generating links for nested dynamic routes is a breeze with the `Link` component from `next/link`. It automatically handles the complex URL generation for you.

```jsx
import Link from 'next/link';

<Link href="/category/[category]/[productId]" as={`/category/${category}/${productId}`}>
  <a>Product Details</a>
</Link>
```

#### Benefits

The advantages of nested dynamic routing are clear:

1. **Organized Code:** Your code becomes more organized as you mimic the URL structure with folder and component hierarchy.
2. **Complex Routing Made Easy:** You can create intricate URL structures without breaking a sweat.
3. **Improved SEO:** Properly structured URLs can positively impact your website's SEO, and Next.js makes it easy to achieve this.
Conclusion

Next.js continues to impress with its developer-friendly features, and nested dynamic routing is a testament to that. By utilizing this powerful feature, you can create organized, SEO-friendly, and complex URL structures for your projects. 🍺 🌮

