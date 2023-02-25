<img width='auto' height='160px' src='./brand.svg' alt="youfeel">

<hr/>
Youfeel is a Youtube with an integrated sentiment analyzer. The analysis is performed by co:here's AI services. The project was built with Next.js, Tailwind, co:here and YouTube API.


## Features

- Display of dislikes on the videos.
- Comment classification.
- Graphical representation of data.
- Video search.

## Environment Variables

It is necessary to set the following environment variables in order to run the application.

`NEXT_PUBLIC_YT_KEY_SEARCH` YouTube's API KEY that handles video searches.

`NEXT_PUBLIC_YT_KEY_VIDEO` YouTube's KEY API that retrieves information about a specific video.

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

## Screenshots

<img width='auto' src='https://im.ge/i/7SdMbD' alt='youfeel home page'>