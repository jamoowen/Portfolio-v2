Hello! 

This is the Repo for My portfolio.

It was Built with Typescript/NextJS and Hosted on Vercel. I wanted the UX of a simple single page application,
but the performance and flexibility of different routes. 
I try and add most things onto the first page, wrapping each component in a Suspense tag.
this enables streaming, and loads the HTML sequentially, significantly speeding up the performance
and allowing the first part of the main page to render efficiently.

Sections like Projects, and blog, feature in the main page, but also have a dedicated route,
with more information and detail.

I used the react-multi-carousel package for animating the typing on the Landing page.
I used react-type-animation for the carousel in the about section of the main page.