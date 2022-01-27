import type { AWS } from '@serverless/typescript';
import schema from './schema';
import { handlerPath } from '@libs/handlerResolver';

const index: AWS["functions"]["k"] = {
  handler: `${handlerPath(__dirname)}/handler.main`,
  events: [
    // GET
    {
      http: {
        method: 'get',
        path: 'hello',
      }
    },
    // POST
    {
      http: {
        method: 'post',
        path: 'hello',
        request: {
          schemas: {
            'application/json': schema
          }
        }
      }
    }
  ]
}

export default index;
