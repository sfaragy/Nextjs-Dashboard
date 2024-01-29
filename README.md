# Just practice brashup playground. I will try to put some notes and comments.

## Adding Fonts

```
import { Inter, Lusitana } from 'next/font/google';

export const inter = Inter({ subsets: ['latin'] });

export const lusitana = Lusitana({
  weight: ['400', '700'],
  subsets: ['latin'],
});
```

## Image component:

```
import Image from 'next/image';
<Image
        src="/hero-desktop.png"
        width={1000}
        height={760}
        className="hidden md:block"
        alt="Screenshots of the dashboard project showing desktop version"
      />
```

In version 13, Next.js introduced a new App Router built on React Server Components, which supports shared layouts, nested routing, loading states, error handling, and more.

## Difference between app router vs page router

<table class="s-table">
<thead>
<tr>
<th>Feature</th>
<th>App Router</th>
<th>Page Router</th>
</tr>
</thead>
<tbody>
<tr>
<td>File-based routing</td>
<td>Uses nested folders to define routes</td>
<td>Files directly represent routes</td>
</tr>
<tr>
<td>Components</td>
<td>Server Components by default</td>
<td>Client Components by default</td>
</tr>
<tr>
<td>Data fetching</td>
<td>fetch function for data fetching</td>
<td>getServerSideProps, getStaticProps, getInitialProps</td>
</tr>
<tr>
<td>Layouts</td>
<td>Layouts can be nested and dynamic</td>
<td>Layouts are static</td>
</tr>
<tr>
<td>Dynamic routes</td>
<td>Supported, but syntax differs</td>
<td>Supported</td>
</tr>
<tr>
<td>Client-side navigation</td>
<td>Supported with router.push</td>
<td>Supported with Link component</td>
</tr>
<tr>
<td>Priority</td>
<td>Takes precedence over Page Router</td>
<td>Fallback if no matching route in App Router</td>
</tr>
</tbody>
</table>

## Setup DB ----

https://nextjs.org/learn/dashboard-app/setting-up-your-database

## Next.js App Router Course - Starter

This is the starter template for the Next.js App Router Course. It contains the starting code for the dashboard application.

For more information, see the [course curriculum](https://nextjs.org/learn) on the Next.js Website.

## Things to learn

add a global CSS file

Styling: Tailwind / CSS modules

Conditionally add class names by clsx

Add custom fonts with next/font & optimized

Add images with next/image & optimized

Create routes using file-system routing

Role of folders and files when creating new route segments

Create a nested layout that can be shared between multiple pages

Colocation, partial rendering, and the root layout

Use the next/link & use usePathname() hook

Navigation in Next.js

Vercel account to deploy

Create and link Postgres database

Seed the database

Fetching data: APIs, ORMs, SQL, etc

Server Components to help access back-end resources more securely

Network waterfalls

Implement parallel data fetching using a JavaScript Pattern

Static rendering / to improve application's performance

Dynamic rendering / when to use it

Different approaches to make dynamic pages

Simulate a slow data fetch behaviour

async/await VS useEffect, useState

##### add this piece of code in body tag attribute to avoid tag error

suppressHydrationWarning={true}

## Steps:

npx create-next-app@latest nextjs-dashboard --use-npm --example "https://github.com/vercel/next-learn/tree/main/dashboard/starter-example"

cd nextjs-dashboard

npm i

npm run dev

npm i @vercel/postgres

npm run seed

npm i prisma @prisma/client
