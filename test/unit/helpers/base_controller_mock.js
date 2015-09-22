/*
 Copyright (C) 2015  Careerbuilder, LLC

 This program is free software: you can redistribute it and/or modify
 it under the terms of the GNU General Public License as published by
 the Free Software Foundation, either version 3 of the License, or
 (at your option) any later version.

 This program is distributed in the hope that it will be useful,
 but WITHOUT ANY WARRANTY; without even the implied warranty of
 MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 GNU General Public License for more details.

 You should have received a copy of the GNU General Public License
 along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

module.exports = function BaseControllerModule() {
  var Site_Query_Service_Mock = require('./site_query_service_mock');

  function BaseController(){};

  BaseController.prototype.init = function(props, cb) {
	var self = this;
	cb();
  };

  BaseController.prototype.getPostParams = function(cb) {
	cb(null, null);
  };

  BaseController.prototype.getJSONPostParams = function(cb) {
    cb(null, null);
  };

  BaseController.prototype.ls = {
    get: function(localizationId) {
      return localizationId;
    }
  };
  
  BaseController.prototype.reqHandler = {
    serveError: function(err) {
      return;
    }
  };
  
  BaseController.getContentSanitizationRules = function() {
    return {};
  };

  BaseController.prototype.siteQueryService = Site_Query_Service_Mock;

  BaseController.apiResponse = function(cd, msg, dta) {
    var response = {code: cd, message: msg, data: dta};
    return JSON.stringify(response);
  };

  return BaseController;
}