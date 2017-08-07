var gulp = require("gulp");
var connect = require("gulp-connect");

gulp.task("server",function(){
    connect.server({
        port:8008,
        livereload:true
    })
});

gulp.task("default",["server"]);

/**
 * Created by huihu on 2017/8/7.
 */
