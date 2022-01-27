import type { ValidatedEventAPIGatewayProxyEvent } from '@libs/apiGateway';
import { formatJSONResponse } from '@libs/apiGateway';
import { middyfy } from '@libs/lambda';

import schema from './schema';

const hello: ValidatedEventAPIGatewayProxyEvent<typeof schema> = async (event) => {
  if (event.httpMethod === "GET") {
    return formatJSONResponse({
      message: `Hello, you got GET response.`,
      event,
    });
  }
  if (event.httpMethod === "POST") {
    return formatJSONResponse({
      message: `Hello ${event.body.name}, welcome to the exciting Serverless world!`,
      event,
    });
  }
}

export const main = middyfy(hello);
