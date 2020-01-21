# Free Spirits

This is a website for a fictional charity Free Spirits. It is built with Django, GraphQL, Apollo, and Next.js, styled with EvergreenUI and CSS in JS, and backed with Stripe payments and Mailtrap.

During the original one-week programming period, I spent most time studing Django, GraphQL, Apollo and Next.js, given I have no experience in any of them. I found things can get really complicated when implete them together.
For example:

- Django's built-in administration application is backed by its own authentication token. But GraphGL only provides authentication with JWT. When both token are present, Neither django admin app nor graphql function properly.
- Next.js often throw out unexpected bahaviors.
- I came across so many issues while deploying it to heroku.

_Lessons Learned:_

- Study only one new framework each time.
- Use a framework only if you have a great understanding of the underlying framework.
- And again, implement the deployment process as early as possible!

DEMO:
![Demo](FS.gif)

## Directory Layout

- `backend`: Django application
- `frontend`: Next application
- `public`: Static resources

## Potential Improvements

- Use microservices to have one server dealing with GraphQL requests and another server for authentication and authorisation.
- Responsive design.
- Create a CI/CD pipeline.
