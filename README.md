# Movies - Redux Toolkit

This is a version of the [Movies demo application](https://tastejs.com/movies/index.html) built using modern practices (as of 2022) for Redux Toolkit.

## Creation

- Created a new app using `create vite`.
- Created another new app using `create-react-app` with the Redux toolkit + TypeScript template. Copied over the `features` and `app` folders.
- Linked up the app.
- Added a bunch of other dependencies:
  - Vitest/Testing Library
  - ESLint/Prettier/Husky/Lint Staged
  - Tailwind

## Motivation

I made this mostly because I really hated working with Redux (especially Redux Sagas), but after learning about all the changes that has been made to remove the boilerplate, I wanted to give it another shot.

The current React demo application uses Redux, but not in the same way that's being recommended with Redux Toolkit. It's not using TypeScript, and is centered around Next.js, which is not the focus of this project.

## Lessons learned

This is a living document that I will add to while building out the application.

- I am starting to prefer `json` for most configuration files, mostly because most examples are written in `json`, and it makes it a lot easier to transition and copy/paste (especially compared to `yaml`).
- I created a [util file](tools/build/vite.utils.ts) which includes `getAliasEntries`. The motivation is to create one single source of truth for aliases (coming from `tsconfig.json`). However, `vite` (and `rollup` as well as `webpack` if I'm not mistaken) don't take in aliases as a glob. I'm pretty sure there's room for a package to be built around this problem (if not already).
- I really like that `create vite` exposes the `vite.config.ts` file directly, rather than hiding it behind a package (like in `create-react-app` or `nx`). It makes it a lot easier to extend.
- There are a couple problems (nitpicky details) I have about the original file structure from `create-react-app` (which is the same file structure promoted by Mark Erikson).
  - Contents of `app` folder should be in `features`
    - The `app` folder can cause naming clashes, since most React apps have a file called `App.tsx`, and importing everything through an `index.ts` is a common pattern (that I use in this app).
    - All of the logic within `app` is very closely related to everything within `features`, and it's odd that they're so split far apart (with multiple `../..` import statements).
    - I advocate placing `hooks.ts` and `store.ts` within the `features` folder directly. It makes imports look nicer, and puts all related logic in the same location.
    - This structure also sits better with monorepo strucutres (particularly the type that Nx prefers).
  - `counterSlice` should not default import `counterReducer`
    - If the file is named `counterSlice`, it strikes me that the `default` import should be `counterSlice` itself, rather than the reducer. I removed the `default` import and exported a separate variable specifically named `counterReducer`.
  - Circular dependency in `counterSlice`
    - There's a circular type dependency that I discovered when changing the default import. It's caused by using `RootState` within the slice file, as the state and dispatch types are dependent on the exports from the slice.
    - I don't disagree with pooling all the logic together, since having to switch between multiple files was one of my biggest gripes about sagas. The comments in the default file even mention it's optional. However, circular dependencies can cause confusion. I don't really have any good solutions for this, other than adding a comment that the `RootState` type is dependent on the export.
  - `counterAPI` should be `counterApi`
    - Super nitpicky, but `counterApi` is better camel casing. The reason is because, if we were to ever run it through some parsing mechanism (e.g. to snake case), it would be `counter-a-p-i` rather than `counter-api`. It's true that JavaScript itself isn't particularly consistent, but I think it's important to establish here.
  - Should add `index.ts`
    - Helps prevent having to dig through all the file imports to find the right thing, and also encourages use of proper aliasing.
- I've tried a variety of UI libraries. I really like TailwindCSS, but it doesn't play very well with the most popular UI libraries (namely MUI and Chakra). I tried a variety of different options, and most of the Tailwind based libraries are unnecessarily complex, until I found Daisy UI. It was one of the few libraries that had a NavBar, and where the copy/paste examples "just worked."
