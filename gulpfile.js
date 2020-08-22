"use strict";

var gulp = require("gulp");
var server = require("browser-sync").create();
var imagemin = require("gulp-imagemin");

gulp.task("images", function () {
  return gulp.src("source/img/**/*.{png}")
    .pipe(imagemin([
      imagemin.optipng({optimizationLevel: 3}),
    ]))
    .pipe(gulp.dest("source/img"));
});

gulp.task("server", function () {
  server.init({
    server: "source/",
    notify: false,
    open: true,
    cors: true,
    ui: false
  });

  gulp.watch("source/*.html").on("change", server.reload);
});

gulp.task("start", gulp.series("server"));
