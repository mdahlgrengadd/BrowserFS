// Generated by CoffeeScript 1.6.2
(function() {
  BrowserFS.File = (function() {
    function File() {}

    File.prototype.getPos = function() {
      throw new BrowserFS.ApiError(BrowserFS.ApiError.NOT_SUPPORTED);
    };

    File.prototype.stat = function(cb) {
      return cb(new BrowserFS.ApiError(BrowserFS.ApiError.NOT_SUPPORTED));
    };

    File.prototype.statSync = function() {
      throw new BrowserFS.ApiError(BrowserFS.ApiError.NOT_SUPPORTED);
    };

    File.prototype.close = function(cb) {
      return cb(new BrowserFS.ApiError(BrowserFS.ApiError.NOT_SUPPORTED));
    };

    File.prototype.closeSync = function() {
      throw new BrowserFS.ApiError(BrowserFS.ApiError.NOT_SUPPORTED);
    };

    File.prototype.truncate = function(len, cb) {
      return cb(new BrowserFS.ApiError(BrowserFS.ApiError.NOT_SUPPORTED));
    };

    File.prototype.truncateSync = function(len) {
      throw new BrowserFS.ApiError(BrowserFS.ApiError.NOT_SUPPORTED);
    };

    File.prototype.sync = function(cb) {
      return cb(new BrowserFS.ApiError(BrowserFS.ApiError.NOT_SUPPORTED));
    };

    File.prototype.syncSync = function() {
      throw new BrowserFS.ApiError(BrowserFS.ApiError.NOT_SUPPORTED);
    };

    File.prototype.write = function(buffer, offset, length, position, cb) {
      return cb(new BrowserFS.ApiError(BrowserFS.ApiError.NOT_SUPPORTED));
    };

    File.prototype.writeSync = function(buffer, offset, length, position) {
      throw new BrowserFS.ApiError(BrowserFS.ApiError.NOT_SUPPORTED);
    };

    File.prototype.read = function(buffer, offset, length, position, cb) {
      return cb(new BrowserFS.ApiError(BrowserFS.ApiError.NOT_SUPPORTED));
    };

    File.prototype.readSync = function(buffer, offset, length, position) {
      throw new BrowserFS.ApiError(BrowserFS.ApiError.NOT_SUPPORTED);
    };

    File.prototype.datasync = function(cb) {
      return this.sync(cb);
    };

    File.prototype.datasyncSync = function() {
      return this.syncSync();
    };

    File.prototype.chown = function(uid, gid, cb) {
      return cb(new BrowserFS.ApiError(BrowserFS.ApiError.NOT_SUPPORTED));
    };

    File.prototype.chownSync = function(uid, gid) {
      throw new BrowserFS.ApiError(BrowserFS.ApiError.NOT_SUPPORTED);
    };

    File.prototype.chmod = function(mode, cb) {
      return cb(new BrowserFS.ApiError(BrowserFS.ApiError.NOT_SUPPORTED));
    };

    File.prototype.chmodSync = function(mode) {
      throw new BrowserFS.ApiError(BrowserFS.ApiError.NOT_SUPPORTED);
    };

    File.prototype.utimes = function(atime, mtime, cb) {
      return cb(new BrowserFS.ApiError(BrowserFS.ApiError.NOT_SUPPORTED));
    };

    File.prototype.utimesSync = function(atime, mtime) {
      throw new BrowserFS.ApiError(BrowserFS.ApiError.NOT_SUPPORTED);
    };

    return File;

  })();

}).call(this);
