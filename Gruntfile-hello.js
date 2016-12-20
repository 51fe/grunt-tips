module.exports = function(grunt) {
  // 设置默认任务
  grunt.registerTask('default', 'log', function() {
    grunt.log.write('Hello Grunt...');
  });
};