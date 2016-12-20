module.exports = function(grunt) {
  // 项目配置
  grunt.config.init({
    jshint: {
      options: {
        curly: true,
        eqeqeq: true,
        eqnull: true,
        browser: true,
        globals: {
          $: true
        }
      },
      all: ['app/js/*.js']
    },
    watch: {
      scripts: {
        files: ['app/js/*.js'],
        tasks: ['jshint']
      }
    }
  });

  // 加载提供任务的插件
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  // 设置默认任务
  grunt.registerTask('default', [ 'watch', 'jshint']);
};