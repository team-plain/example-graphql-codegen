import { request } from '../graphql/request'
import { CreateThreadDocument } from '../graphql/types'

const API_KEY = 'YOUR_API_KEY';

async function example() {
  const createThreadResponse = await request({
    apiKey: API_KEY,
    query: CreateThreadDocument,
    variables: {
      input: {
        customerIdentifier: {
          customerId: 'c_123',
        },
        title: 'Support Request',
        components: [
          {
            componentText: {
              text: 'hello world',
            }
          }
        ]
      }
    }
  });

  if (createThreadResponse.error) {
    const err = createThreadResponse.error;
    
    if (err.type === 'mutation_error') {
      // Lots of information is contained in err.errorDetails to handle these errors.
      // You can look up the code, specific fields of a mutation etc.
      console.log('Failed to create thread', err.errorDetails)
    } 
    else if (err.type === 'forbidden') {
      console.log('API key has invalid permissions:', err.message)
    } 
    else if (err.type === 'internal_server_error') {
      console.log('Unknown error')
    } 
    else {
      // Unknown error
      console.error(err)
    }
    return;
  }

  console.log(`Thread created ${createThreadResponse.data.createThread.thread?.id}`)
}