module.exports = function(grunt) {
  grunt.config.init({
    clean: {
      release: 'dist',
      temp: '.tmp'
    }
  });
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.registerTask('default', ['clean']);
};

