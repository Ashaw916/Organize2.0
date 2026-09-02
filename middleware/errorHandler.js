module.exports = function errorHandler(err, req, res, next) {
  // Log full error server-side
  console.error('Unhandled error:', err && (err.stack || err));

  const status = err && err.status ? err.status : 500;
  const response = { error: status === 500 ? 'Internal server error' : (err.message || 'Error') };

  // In non-production include a hint (but not stack) for debugging
  if (process.env.NODE_ENV !== 'production' && err && err.message && status !== 500) {
    response.detail = err.message;
  }

  res.status(status).json(response);
};
