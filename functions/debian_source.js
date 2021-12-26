
  exports.handler = async (event, context) => {
  const searchterm = event.queryStringParameters.searchterm;
  const API_ENDPOINT = '/api/search?keywords=" + searchterm + "&searchon=names&section=all&exact=1';
  try {
    const response = await fetch(API_ENDPOINT);
    const data = await response;
    return { statusCode: 200, body: data };
  } catch (error) {
    console.log(error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed fetching data' }),
    };
  }
};
