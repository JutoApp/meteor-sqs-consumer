SQS-Consumer for meteor
===

A simple meteor wrapper package for the 
node [sqs-consumer](https://www.npmjs.com/package/sqs-consumer)
 npm package. Exports a ```Consumer``` global variable.

## Usage Example

```
import {Meteor} from 'meteor/meteor';

Meteor.startup(() => {
  // code to run on server at startup
  var AWS = require('aws-sdk');

  AWS.config.update({
    region: 'ap-southeast-2',
    accessKeyId: 'ABCDEFGHIJKLMNOP',
    secretAccessKey: 'ABCDEFGHIJKLMNOPABCDEFGHIJKLMNOPABCDEFGHIJKLMNOP'
  });

  var app = Consumer.create({
    queueUrl: 'https://sqs.ap-southeast-2.amazonaws.com/01234567890/myawesomequeue',
    handleMessage: function (message, done) {
      console.log("Got a message!");
      console.log(message.Body);
      done();
    },
    sqs: new AWS.SQS()
  });

  app.on('error', function (err) {
    console.log(err.message);
  });

  app.on('stopped', function () {
    console.log("Fired when the consumer finally stops its work");
  });

  app.on('empty', function () {
    console.log("Fired when the queue is empty (All messages have been consumed).");
  });

  console.log("about to listen for messages...");
  app.start();
});

```