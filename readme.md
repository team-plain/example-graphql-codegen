# Example Plain GraphQL Codegen

This is an opinionated example repository showing how to set up graphql code generation for advanced integrations with Plain.com.

It guarantees all graphql queries and mutations are valid, that your code is typesafe and that errors are handled.

You do not need to use this to use our API but this provides a basic scaffold ontop of which you can build complex API integrations.

### Instructions

- In `./graphql` you can define queries, mutations and fragments that you want to use with our API.
- You then run `npm run codegen` to generate types. This will output `./graphql/types.ts`. If your queries are not valid, this will error.
- In `./src/example.ts` you can then see an example request being made, how error handling works etc. 

If you need help with this, please reach out to us via Slack, [email](mailto:help@plain.com) or directly on https://app.plain.com.
