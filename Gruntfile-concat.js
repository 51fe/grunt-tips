module.exports = function(grunt) {
  // 项目配置
  grunt.config.init({
    clean: {
      release: 'dist'
    },
    concat: {
      css: {
        nonull: true,
        src: 'app/css/*.css',
        dest: 'dist/css/index.css'
      },
      js: {
        nonull: true,
        src: 'app/js/*.js',
        dest: 'dist/js/index.js'
      },
      fof: {
        nonull: true,
        files: {
          'dist/css/index.css': 'app/css/*.css',
          'dist/js/index.js': 'app/js/*.js'
        }
      },

      faf: {
        files: [
          {dest: 'dist/css/index.css', src: 'app/css/*.css', nonull: true},
          {dest: 'dist/js/index.js', src: 'app/js/*.js', filter: 'isFile'}
        ]
      }
    }
  });

  // 加载提供任务的插件
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-concat');
  // 设置默认任务
  grunt.registerTask('default', ['clean', 'concat:fof']);
};