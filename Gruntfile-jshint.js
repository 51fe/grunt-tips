module.exports = function(grunt) {
  // 项目配置
  grunt.config.init({
    jshint: {
      options: {
        jshintrc: true
      },
      own: ['app/js/*.js']
    }
  });

  // 加载提供任务的插件
  grunt.loadNpmTasks('grunt-contrib-jshint');
  // 设置默认任务
  grunt.registerTask('default', ['jshint']);
};