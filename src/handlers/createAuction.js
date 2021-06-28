async function createAuction(event, context) {
  return {
    statusCode: 200,
    body: JSON.stringify({ message: 'Hello from Nitish' }),
  };
}

export const handler = createAuction;


