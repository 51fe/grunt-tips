module.exports = function(grunt) {
  // 项目配置
  grunt.config.init({
    clean: {
      release: 'dist'
    },

    cssmin: {
      release: {
        src: ['app/css/ui-loading.css','app/css/ui-toast.css', 'app/css/index.css'],
        dest: 'dist/css/<%= pkg.name %>.min.css'
      }
    }
  });

  // 加载提供任务的插件
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  // 设置默认任务
  grunt.registerTask('default', ['clean', 'cssmin']);
};