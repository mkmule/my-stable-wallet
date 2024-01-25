This is a short technical assessment exercise developed in **~6 hours** with complete setup of NextJS application,
creation of client components, layout and routing. Below I will explain some technical decisions and next steps to be
done if we would like to implement a full production ready product.

Keep in mind that UI is very simplified, but it is able to demo some of UI variations accordingly to stubbed data.

The main goal of my implementation is to demonstrate:

- Enterprise-level project structure
- Definition of data models
- Separation of components & dry techniques
- Attention to number formatting (presentation)
- Usage of React hooks

## Technical decisions

### Functionalities

- Validate input number
- Validate address length
- Present intermediate (fee) calculation
- Present transactions of different types reflected on UI ()
- Copy receive address to clipboard

With assumption that most difficult logic is around currency input validation I levereged usage of parsing function that
considers grouping separator and decimal cases precision. However for real case I would look to implement much complex
logic for Currency input which would format user input on blur accordingly to currency precision.

You can check a similar example implemented in React Native
here: [CurrencyConverterExercise](https://github.com/mkmule/CurrencyConverterExercise/tree/main), with complex
multi-regional number formatting and user input parsing.

### Things For Future

Business logic wise for this context: more advanced input components. Technically wise: I would definitely extract some
of the hooks logic into functions and cover them with unit tests.
Also review rendering cycles to look for potential caching improvement with more usage of _useMemo_, _useCallback_
hooks.

Using tailwind.css is great and fast to do, but for more scalable case I would evaluate usage of component library and
potentially shift for css-in-js.

Responsive: since UI was free to define I made a simple approach where simple stacking is enough, but for real
production app I would explore complex UIs for Desktop with more data and simple UIs for mobile with less. This would
potentially result into creation of separate components by platform to avoid complex unmaintainable codebases.

### Preview

![Main screen](https://github.com/mkmule/my-stable-wallet/blob/main/demo/deskop.png?raw=true)
![Main screen](https://github.com/mkmule/my-stable-wallet/blob/main/demo/mobile.png?raw=true)

## Setup & Run

First, run the development server:

```bash
npm install
npm run dev 
```

## Exercise

Frontend Developer Task: Stablecoin Wallet Overview

**Objective**:

- Create a simplified stablecoin wallet overview page using Next.js and TypeScript, demonstrating basic functionalities
  and clean coding practices.

**Requirements**:

- Wallet Overview Page: Display the user's stablecoin balance, recent transactions (mocked data), and a simple form to
  simulate sending stablecoins to another address.
- Mock Data Integration: Use static JSON to mock user data and transactions. No need for real-time updates or external
  APIs.
- Responsive Layout: Ensure the page is responsive and usable on both desktop and mobile devices using CSS Grid or
  Flexbox.
- Basic State Management:Manage the application state (e.g., form input state) using React hooks without external state
  management libraries.

**Submission Guidelines**:

- Provide a GitHub repository with clear README on setup instructions.
- Emphasize code readability, component structure, and use of TypeScript.

