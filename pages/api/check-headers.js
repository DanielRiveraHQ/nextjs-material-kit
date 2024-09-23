export default function handler(req, res) {
  const headers = req.headers;

  // Convert headers object to array for easier display
  const headersArray = Object.entries(headers).map(([key, value]) => ({
    key,
    value,
  }));

  // Filter CloudFront headers
  const cloudFrontHeaders = headersArray.filter((header) =>
    header.key.toLowerCase().startsWith("cloudfront-")
  );

  // Prepare response
  const response = {
    allHeaders: headersArray,
    cloudFrontHeaders: cloudFrontHeaders,
  };

  res.status(200).json(response);
}
