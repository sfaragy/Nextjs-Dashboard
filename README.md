# Just practiece brashup playground. I will try to put some notes and comments.

### Adding Fonts

```
import { Inter, Lusitana } from 'next/font/google';

export const inter = Inter({ subsets: ['latin'] });

export const lusitana = Lusitana({
  weight: ['400', '700'],
  subsets: ['latin'],
});
```

### Image component:

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

### Difference between app router vs page router

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

## Next.js App Router Course - Starter

This is the starter template for the Next.js App Router Course. It contains the starting code for the dashboard application.

For more information, see the [course curriculum](https://nextjs.org/learn) on the Next.js Website.
