import type { ValidatedEventAPIGatewayProxyEvent } from '@libs/apiGateway';
import { formatJSONResponse } from '@libs/apiGateway';
import { middyfy } from '@libs/lambda';

import schema from './schema';

const lighthouse: ValidatedEventAPIGatewayProxyEvent<typeof schema> = async (event) => {
  return formatJSONResponse({
    message: `You got lighthouse score.`,
    event,
  });
}

export const main = middyfy(lighthouse);
