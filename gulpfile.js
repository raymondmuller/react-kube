"use strict";

var gulp = require("gulp");
var browserify = require("browserify");
var babel = require("gulp-babel");
var babelify = require("babelify");
var source = require("vinyl-source-stream");
var runSequence = require("run-sequence");
var uglify = require("gulp-uglify");
var buffer = require("vinyl-buffer");
var opn = require("opn");
var connect = require("gulp-connect");
var del = require("del");
var exec = require("child_process").exec;

gulp.task("compile", function (cb) {
    browserify({
        entries: "./src/components/Main.js",
        extensions: [".js"],
        debug: true
    })
        .transform(babelify)
        .bundle()
        .pipe(source("bundle.js"))
        .pipe(gulp.dest("./build/js"))
        .pipe(connect.reload())
        .on("end", function() {
            cb();
        });
});

gulp.task("compile:production", function () {
    browserify({
        entries: "./src/components/Main.js",
        extensions: [".js"],
        debug: true
    })
        .transform(babelify)
        .bundle()
        .pipe(source("bundle.js"))
        .pipe(buffer())
        .pipe(uglify())
        .pipe(gulp.dest("./production/js"));
});

gulp.task("compile:lib", function () {
    return gulp.src("./src/components/lib/**/*.js")
        .pipe(babel())
        .pipe(gulp.dest("./dist"));
});

gulp.task("copy", function (cb) {
    gulp.src("./src/index.html")
        .pipe(gulp.dest("./build"));

    gulp.src("./src/styles/**/*.css")
        .pipe(gulp.dest("./build/css"));

    gulp.src("./src/assets/**/*")
        .pipe(gulp.dest("./build/assets"))
        .on("end", function() {
            cb();
        });
});

gulp.task("copy:production", function () {
    gulp.src("src/index.html")
        .pipe(gulp.dest("./production"));

    gulp.src("src/styles/*.css")
        .pipe(gulp.dest("./production/css"));

    gulp.src("src/assets/**/*")
        .pipe(gulp.dest("./production/assets"));
});

gulp.task("copy:lib", function () {
    gulp.src("package.json")
        .pipe(gulp.dest("./dist"));

    gulp.src("README.MD")
        .pipe(gulp.dest("./dist"));

    gulp.src("src/components/lib/**/*.js")
        .pipe(gulp.dest("./dist/src/js"));

    gulp.src("src/styles/**/*.css")
        .pipe(gulp.dest("./dist/css"));
});

gulp.task("clean", function (cb) {
    return del("./build", cb);
});

gulp.task("clean:production", function (cb) {
    return del(["./production/assets", "./production/css", "./production/js", "./production/index.html"], cb);
});

gulp.task("watch", function () {
    gulp.watch(["src/components/**/*.js", "src/*.html", "src/styles/*.css"], function () {
        runSequence(["lint"], ["compile"], ["copy"], ["reload"]);
    });
});

gulp.task("reload", function () {
    connect.reload();
});

gulp.task("opn", function () {
    opn("http://localhost:3000");
});

gulp.task("server", function () {
    connect.server({
        root: "./build",
        port: 3000,
        livereload: {
            port: 35730
        }
    });
});

gulp.task("test", function(cb) {
    exec("karma start --single-run", function (err, stdout, stderr) {
    console.log(stdout);
    console.log(stderr);
    cb(err);
    });
});

gulp.task("lint", function(cb) {
    exec("eslint src/components/lib", function (err, stdout, stderr) {
    console.log(stdout);
    console.log(stderr);
    cb(err);
    });
});

gulp.task("default", function () {
    runSequence(["test"], ["lint"], ["compile:lib"], "copy:lib");
});

gulp.task("demo", function () {
    runSequence(["clean"], ["lint"], ["compile", "copy"], "server", "opn", "watch");
});

gulp.task("build", ["default"]);

gulp.task("production", function () {
    runSequence(["clean:production"], ["test"], ["compile:production"], "copy:production");
});

