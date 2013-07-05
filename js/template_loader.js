// Copyright (c) 2013 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

TemplateLoader = function(filer, spark) {
  this.spark = spark;
  this.filer = filer;
};

TemplateLoader.prototype.loadTemplate = function(callback) {
  var activeProject = this.spark.projects[this.spark.ActiveProjectName];
  var filer = this.filer;
  var noop = function(){};
  filer.ls('sample_app', function(entry){
    console.log(entry);
    entry.forEach(function(file, idx, arr){
      if(idx === arr.length - 1){
        filer.cp(file, activeProject, null, callback, noop);
      } else {
        filer.cp(file, activeProject, null, noop, noop);
      }
    });
  });
};
