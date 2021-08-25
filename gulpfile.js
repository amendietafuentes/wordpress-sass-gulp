var gulp = require("gulp"),
watch = require("gulp-watch"),
plumber = require("gulp-plumber"),
notify = require("gulp-notify");

var onError = function(err){
    console.log("Se ha producido un error: ", err);
    this.emit("end");
}

gulp.task("sass", function(){
    return gulp.src("./sass/style.scss")
    .pipe(plumber({errorHandler:onError}))
    .pipe(notify({message: "sass task finalizada"}))
});

gulp.task("watch", function(){
    gulp.watch("./sass/**/*.scss", ["sass"]);
});

gulp.task("default", ["sass", "javascript", "imagemin", "watch"], function(){
    
});