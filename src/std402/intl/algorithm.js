/*
  Status: prototype
  Process: API generation
*/

// Copyright (C) 2015 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/**
 * Verify that the given date object's Number representation describes the
 * correct number of milliseconds since the Unix epoch relative to the local
 * time zone (as interpreted at the specified date).
 *
 * @param {Date} date
 * @param {Number} expectedMs
 */
function assertRelativeDateMs(date, expectedMs) {
  var actualMs = date.valueOf();
  var localOffset = date.getTimezoneOffset() * 60000;

  if (actualMs - localOffset !== expectedMs) {
    $ERROR(
      'Expected ' + date + ' to be ' + expectedMs +
      ' milliseconds from the Unix epoch'
    );
  }
}
