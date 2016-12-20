module.exports = function(grunt) {
  // 项目配置
  grunt.config.init({
    imagemin: {
      release: {
        options: {
          optimizationLevel: 7
        },
        files: [{
          expand: true,
          cwd: 'app/img/',
          src: ['*.{png,jpg,gif}'],
          dest: 'dist/img/'
        }]
      }
    }
  });

  // 加载提供任务的插件
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  // 设置默认任务
  grunt.registerTask('default', ['imagemin']);
};