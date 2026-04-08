exports.handler = async function(event) {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  const response = await fetch('https://api.anthropic.com/v1/messages', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': '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',
      'anthropic-version': '2023-06-01'
    },
    body: event.body
  });

  const data = await response.json();

  return {
    statusCode: 200,
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    },
    body: JSON.stringify(data)
  };
};
