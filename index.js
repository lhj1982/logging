'use strict';
var LogUtils = function() {};
const async = require("async");


/**
 * Log event.
 * 
 * @param  {[type]}   stage        [description]
 * @param  {[type]}   db           [description]
 * @param  {[type]}   eventId      [description]
 * @param  {[type]}   payLoad      [description]
 * @param  {Boolean}  isSuccessful [description]
 * @param  {[type]}   responseData successful or error object, it accept JSON format for successful and Error if failed
 * @param  {Function} callback     [description]
 * @return {[type]}                [description]
 */
LogUtils.prototype.logEvent = function(stage, db, eventId, payLoad, isSuccessful, responseData, callback) {
  //console.log(payLoad);
  //console.log(responseData);
  async.waterfall([saveEventToS3, logEvent], function(err, result) {

  });
}

function saveEventToS3(next) {
  next();
}

function logEvent(next) {
  next();
}

exports.LogUtils = new LogUtils();