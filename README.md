<p align="center">
  <a href="https://youfeel.vercel.app/">
    <picture>
      <source media="(prefers-color-scheme: dark)" srcset="https://i.ibb.co/GFgT0zc/brand-dark.png"/>
      <img src="https://i.ibb.co/TYDxRJ0/brand-light.png" height="128" alt="" />
    </picture>
  </a>
</p>

<hr  />

<p>
  YouFeel is a sentiment analyzer integrated with the YouTube API. The analysis is performed by co:here's AI services. The project is built with Next.js, Tailwindcss, co:here and the YouTube API.
</p>

## Features

- Display the dislikes of videos.
- Comment classification.
- Graphical representation of data.
- Video search.

## Environment Variables

It is necessary to set the following environment variables in order to run the application.

`NEXT_PUBLIC_YT_KEY_SEARCH` YouTube's API KEY that handles video searches.

`NEXT_PUBLIC_YT_KEY_VIDEO` YouTube's API KEY that retrieves information about a specific video.

`NEXT_PUBLIC_YT_KEY_COMMENTS` YouTube's API KEY that retrieves the comments of a video.

`NEXT_PUBLIC_COHERE_KEY` The co:here API KEY to use its artificial intelligence services.

## Run locally

Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
