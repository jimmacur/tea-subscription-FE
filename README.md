# Tea Subscription 🫖 (Frontend)

This Tea Subscription Frontend is built using React, and it consumes the **Tea Subscription API** (Rails backend) to manage subscriptions, teas, and customers. The frontend focuses on creating an intuitive user interface that allows customers to interact with the subscription service.

### Features
---
- **Subscription Management**: Users can view all subscriptions, toggle between active and inactive status, and modify subscription frequencies.
- **User Interface**: A clean, responsive interface optimized for desktop, tablet, and mobile devices.
- **Error Handling & User Feedback**: Ensures smooth user experience with error handling for failed API calls and interactive feedback when status or frequency changes.
- **Testing**: Frontend tested using Cypress to ensure proper functionality and user experience.

[GitHub Project Board](https://github.com/users/jimmacur/projects/12)

[Figma Planning Project Board](https://www.figma.com/board/52FUFMkcAHFmeJ2qYQCtzJ/Take-Home-final-mod-3?node-id=0-1&node-type=canvas&t=3rete0JI4XdkUFN2-0)



## Context

This **Tea Subscription Service** project was completed as part of a simulated technical challenge, focusing on both **Frontend (FE)** and **Backend (BE)** development. The project was designed with a strict 2-day timeframe, with about **8 hours dedicated to the frontend** and **8 hours dedicated to the backend**.

The goal was to develop a fully functional subscription service that could manage customer subscriptions to tea, with endpoints to manage subscriptions, teas, and customers.



## Tech Stack

- **Backend (BE)**: Ruby on Rails, RSpec for testing, Simplecov for test coverage.
- **Frontend (FE)**: React, Cypress for frontend testing.



## Installation
---
1. Fork and clone this BE repo 
[Tea Subscription BE repo](https://github.com/jimmacur/tea-subscription-BE)
2. `cd` into the repo
2. Run these commands in your terminal
  - `bundle install`
  -  `rails db:{drop, create, migrate, seed}`
  -  `rails s`

4. Fork this FE repo
[Tea Subscription FE repo]()
5. `cd` into cloned repo
6. Run `npm install`
7. Run `npm start`
8.  Enter `control + c` in your terminal to stop running the React app at any time
9. To run Cypress tests, use `npx cypress open`


## Contributors

Jim Macur - [linkedin](https://www.linkedin.com/in/jimmacur/) - [gitHub](https://github.com/jimmacur) - jim.macur@gmail.com 

## Learning Goals

- **Project Planning and Time Management**: Manage and deliver a fully functional frontend application within a short 2-day timeframe, simulating a real-world technical challenge.

- **Frontend Development**: Build a responsive, user-friendly UI using React, integrating smoothly with a Ruby on Rails API. Focus on dynamic content loading and state management.

- **API Integration**: Interact with a Rails API to fetch and update subscription data, including subscription status and frequency, with error handling and appropriate user feedback.

- **User Interface Design**: Create a clean, intuitive user interface that allows for easy subscription management, including toggling between subscription statuses and changing subscription frequencies.

- **Responsive Design**: Implement a mobile-first design that ensures the application is fully responsive and optimized for desktop, tablet, and mobile devices.

- **Testing and Test-Driven Development (TDD)**: Write frontend tests using Cypress to ensure the functionality and user interactions work as expected, with a focus on maintaining high test coverage.

- **Time-Efficient Development**: Prioritize tasks effectively to develop key frontend features within a limited time frame while ensuring the application remains functional and user-friendly.

- **Professional Development**: Simulate a real-world software development process by completing a frontend application in a short period, handling both individual responsibilities and project management.

- **Version Control and Collaboration**: Use Git for version control, applying best practices in code collaboration, managing branches, and committing often to track progress and facilitate collaboration.