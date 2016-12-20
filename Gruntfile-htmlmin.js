module.exports = function(grunt) {
  // 项目配置
  grunt.config.init({
    clean: {
      release: 'dist'
    },

    htmlmin: {                                     // Task
      release: {                                      // Target
        options: {                                 // Target options
          removeComments: true,
          collapseWhitespace: true
        },
        files: {                                   // Dictionary of files
          'dist/index.html': 'app/index.html'          // 'destination': 'source'
        }
      },
      dev: {                                       // Another target
        files: {
          'dist/index.html': 'app/index.html'
        }
      }
    }
  });

  // 加载提供任务的插件
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-htmlmin');
  // 设置默认任务
  grunt.registerTask('default', ['clean', 'htmlmin:release']);
};