var config = {};

// secret key (update in production!!!)
config.secretKey = process.env.secretKey || "\x1d\x0fB\x8d'\xaa\xaf\x04\xca\xfe\n\xb8Vg\x95X\x9b\xd6\x18\xd60T`\xc6";

// mongo uri
config.mongoURI = {
  development: "mongodb://localhost/node-stripe-charge",
  test: "mongodb://localhost/node-stripe-charge-test",
  stage: process.env.MONGOLAB_URI
};

// stripe keys
// Add as env variables
// export "stripePublishableKey=pk_test_GET_YOUR_OWN"
// export "githubClientSecret=sk_test_test_GET_YOUR_OWN"
config.StripeKeys = {
  publishableKey: process.env.stripePublishableKey,
  secretKey: process.env.stripeSecretKey
};


module.exports = config;