## About this repository

- This is a Next.Js boilerplate configured to support: Typescript, Tailwind CSS, Storybook, Cypress, Jest, React Testing Library, SWR, Sass
- It helps you start your Next.JS project faster and more easily containing some samples on each of the technologies used

## How to get it work

- run 'npm install' command to install all the dependencies
- run 'npm run dev' or 'yarn dev' to start the development environment on 'localhost:3000'
- run 'npm test' to start unit tests run in watch mode as default
- run 'npm run test:coverage' to see the coverage report of your application
- run 'npm run cypress:run' to run end-to-end testing
- run 'npm run cypress:open' to open the cypress dashboard for observing your end-to-end test result
- run 'npm run storybook' to lunch storaybook dashboard of your stories
- run 'npm run serve-json' to host json server mock APIs on 'localhost:4000' in case you need some mock data

## More to know

- Jest is configured in jest folder containiong jest.config.js and jest.setup.js
- Storybook is configured in .storybook folder containg preview.js and main.js
- Typescript is configured in tsconfig.ts file
- Cypress is configured in cypress.config.js
- TailwindCSS is configured in tailwind.config.js
- you can define the mock data structure in db.json file placed in jsonServer folder in the root directory
- you can update your application metadata in src->core->siteConfig->headConfing
- you can place your documents in the folder with the same name preferably in .md format
- you can define a header and footer for the app in the related components or simply remove it from layout, nested layout woulbe be added in next updates

## References

- <a href='https://nextjs.org/docs' target='_blank'> Next.JS documentation </a>
- <a href='https://nextjs.org/docs' target='_blank'> TypeScript documentation </a>
- <a href='https://tailwindcss.com/'>Tailwind CSS documentation</a>
- <a href='https://www.cypress.io/'>Cypress documentation</a>
- <a href='https://jestjs.io/docs/getting-started'>Jest documentation</a>
- <a href='https://swr.vercel.app/'>SWR documentation</a>
- <a href='https://storybook.js.org/'>Storybook documentation</a>
- <a href='https://gwfh.mranftl.com/fonts'>Google WebFonts Helper</a>
- <a href='https://www.npmjs.com/package/json-server'>JSON Server documentation</a>
- <a href='https://sass-lang.com/documentation/'> Sass documentation</a>
