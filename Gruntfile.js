module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        src: 'js/perfmatters.js',
        dest: 'js/perfmatters.min.js',
        src: 'views/js/main.js',
        dest: 'views/js/main.min.js'
      }
    },
     responsive_images: {
      dev: {
        options: {
          sizes: [{
            name: 'small',
            width: '100',
            height: '75',
            quality: 70
          }]
        },
        files: [{
          expand: true,
          src: ['pizzeria.jpg'],
          cwd: 'views/images/',
          dest: 'views/images/'
        }]
      }
    },
    imagemin: {
      dynamic: {
        options: {
          optimizationLevel: 7,
          progressive: true
        },
        files: [{
            expand: true,
            cwd: 'img/',
            src: ['*.{png,jpg,gif}'],
            dest: 'img/build'
        },{
            expand: true,
            cwd: 'views/images/',
            src: ['*.{png,jpg,gif}'],
            dest: 'views/images/build'
        }]
      }
    },
    cssmin: {
      target: {
        files: [{
          expand: true,
          cwd: 'css/',
          src: ['*.css', '!*.min.css'],
          dest: 'css/',
          ext: '.min.css'
        },
        {
          expand: true,
          cwd: 'views/css/',
          src: ['*.css', '!*.min.css'],
          dest: 'views/css/',
          ext: '.min.css'
        }]
      }
    }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-responsive-images');

  // Default task(s).
  grunt.registerTask('default', ['uglify','responsive_images','imagemin','cssmin']);

};