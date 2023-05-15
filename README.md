This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

# configcat-feature-flag

Feature flags but specifically for configcat

## Pro's and cons of configcat

- configcat has alot of the same functionality as happykit
- comes down to preference I believe on implementing
- -Pros:
  Single command to install a package and establish connection where happykit utilizes env file to identify location
  Dashboard to watch multiple flags - Same for Happykit
  Ability to invite team members into the dashboard window and create their own flags
  Happykit established a dashbpard view from Github account
  Can add enviroments from configcat where as happykit only has production, preview, and development enviroments
  Configcat has a config files where you can store config values based off of the enviroment you are running
  Looks similar to Datadog in recording the flags and who uses them
  Configcat has more integrations into datadog, jira, slack, etc
  has a VS code extension for recognizing configcat commands
