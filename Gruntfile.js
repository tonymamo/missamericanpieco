module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({

    pkg: grunt.file.readJSON('package.json'),

    watch: {
      options: {
        livereload: true,
      },
      scripts: {
        files: ['js/*.js'],
        tasks: ['uglify']
      },
      css: {
        files: ['scss/styles.scss'],
        tasks: ['sass']
      },
      html: {
          files: ['index.html'],
          options: {
              livereload: true
          }
      }
    },

    sass: {
      dist: {
        options: {
          style: 'compressed'
        },
        files: {
          'css/styles.css': 'scss/styles.scss'
        }
      }
    },

    uglify: {
      build: {
        src: [
          'js/jquery-1.10.2.min.js',
          'js/jquery.fittext.js',
          'js/global.js'
        ],
        dest: 'js/build/global.min.js'
      }
    },



  });

  // Load the plugins
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  //grunt.loadNpmTasks('grunt-autoprefixer');

  // Default task(s).
  grunt.registerTask('default', ['watch', 'sass', 'uglify']);

};
