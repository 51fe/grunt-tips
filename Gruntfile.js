module.exports = function(grunt) {

  // 项目配置
  grunt.config.init({
    pkg: grunt.file.readJSON('package.json'),

    clean: {
      release: {
        src: 'dist'
      },
      temp: {
        src: '.tmp'
      }
    },

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
      src: 'app/js/*.js'
    },

    watch: {
      scripts: {
        files: 'app/js/*.js',
        tasks: ['jshint'],
        options: {
          spawn: false
        }
      }
    },

    concat: {
      dist: {
        src: 'app/css/*.css',
        dest: '.tmp/css/<%= pkg.name %>.css',
        nonull: true
      }
    },

    cssmin: {
      release: {
        src: ['app/css/ui-loading.css','app/css/ui-toast.css', 'app/css/index.css'],
        dest: 'dist/css/<%= pkg.name %>.min.css'
      }
    },

    imagemin: {
      release: {
        options: {
          optimizationLevel: 5
        },
        files: [{
          expand: true,
          cwd: 'app/img/',
          src: '*.{png,jpg,gif}',
          dest: 'dist/img/'
        }]
      }
    },

    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n',
        footer: '\n/* Powered by Flying */'
      },
      build: {
        src: ['app/js/libs/jquery.js','app/js/ui-loading.js','app/js/ui-toast.js', 'app/js/index.js'],
        dest: 'dist/js/<%= pkg.name %>.min.js'
      }
    },

    copy: {
      release: {
        expand: true,
        cwd: 'app/',
        src: 'index.html',
        dest: 'dist/'
      }
    }

  });

  // 加载复制任务
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-cssmin')
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  // 设置默认任务
  grunt.registerTask('default', ['clean:release', 'concat', 'cssmin',
    'imagemin', 'copy', 'uglify', 'clean:temp']);

  grunt.registerTask('test', ['clean:release', 'jshint', 'watch']);
};