"use strict";

var gulp = require("gulp");
var server = require("browser-sync").create();
var imagemin = require("gulp-imagemin");
var webp = require("gulp-webp");

gulp.task("images", function () {
  return gulp.src("source/img/**/*.png")
    .pipe(imagemin([
      imagemin.optipng({optimizationLevel: 7}),
    ]))
    .pipe(gulp.dest("source/img"));
});

gulp.task("webp", function () {
  return gulp.src("source/img/**/*.{png,jpg}")
    .pipe(webp({quality: 90}))
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
