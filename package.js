Package.describe({
  name: 'juto:sqs-consumer',
  version: '1.0.0',
  // Brief, one-line summary of the package.
  summary: 'A simple meteor wrapper package for the sqs-consumer npm package.',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/JutoApp/meteor-sqs-consumer.git',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Npm.depends({
  "sqs-consumer": "3.4.0"
});

Package.onUse(function(api) {
  api.versionsFrom('1.4.2.3');
  api.use('ecmascript');
  api.mainModule('sqs-consumer.js');
  api.export("Consumer");
});
