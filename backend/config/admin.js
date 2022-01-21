module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'ad387451a83891f9a9b5158f9ee5a2c9'),
  },
});
