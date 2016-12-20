module.exports = function(grunt) {
  // 项目配置
  grunt.config.init({
    pkg: grunt.file.readJSON('package.json'),

    clean: {
      release: 'dist'
    },

    uglify: {
      options: {
        mangle: { except: ['jQuery'] }, //防止混淆变量名时对jQuery产生影响
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        src: ['app/js/libs/jquery.js','app/js/ui-loading.js','app/js/ui-toast.js', 'app/js/index.js'],
        dest: 'dist/js/<%= pkg.name %>.min.js'
      }
    }
  });

  // 加载提供任务的插件
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  // 设置默认任务
  grunt.registerTask('default', ['clean', 'uglify']);
};