const handler = async (event, context) => {
  return { message: event.message };
};

exports.handler = handler;
