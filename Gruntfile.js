module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    coffee: {
      compile: {
        files: {
          'src/index.js': ['src/coffee/*.coffee'] // compile and concat into single file
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-coffee');

  grunt.registerTask('default', ['coffee']);

};