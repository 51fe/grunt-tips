module.exports = function(grunt) {
  // 项目配置
  grunt.config.init({
    clean: {
      release: 'dist'
    },

    copy: {
      noSubFolderFile: {
        expand: true,
        cwd: 'app/',
        src: ['js/*.js'], //js下所有的的文件和目录
        dest: 'dist/'
      },

      withSubFolder: {
        expand: true,
        cwd: 'app/',
        src: 'js/**', //js及子目录下所有的的文件
        dest: 'dist/'
      },

      onlyFolder: {
        expand: true,
        cwd: 'app/',
        src: 'js/**/', //js及子目录下所有的的目录
        dest: 'dist/'
      },

      noFullPath: {
        expand: true,
        cwd: 'app/js/',
        src: '**', //当前工程的所有文件和目录
        dest: 'dist/'
      },

      flatten: {
        expand: true,
        cwd: 'app/js/',
        src: '**',
        dest: 'dist/',
        flatten: true, // 压平成一级目录
        filter: 'isFile'
      },

      replace: {
        nonull: true,
        src: 'app/js/common.js',
        dest: 'dist/',
        options: {
          process: function (content, srcpath) {
            return content.replace(/http:\/\/192.168.241.9:8082/g, '');
          }
        }
      }
    }
  });

  //
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');
  // 设置默认任务
  grunt.registerTask('noSubFolderFile', ['clean', 'copy:noSubFolderFile']);
  grunt.registerTask('withSubFolder', ['clean', 'copy:withSubFolder']);
  grunt.registerTask('onlyFolder', ['clean', 'copy:onlyFolder']);
  grunt.registerTask('noFullPath', ['clean', 'copy:noFullPath']);
  grunt.registerTask('flatten', ['clean', 'copy:flatten']);
  grunt.registerTask('replace', ['clean', 'copy:replace']);
};