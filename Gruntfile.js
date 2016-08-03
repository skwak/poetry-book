module.exports = function(grunt) {

  grunt.initConfig({
    babel: {
      options: {
        plugins: ['transform-react-jsx'],
        presets: ['react']
      },
      jsx: {
        files: [{
          expand: true,
          cwd: 'public/javascripts/react/', // Custom folder
          src: ['*.jsx'],
          dest: 'public/javascripts/transpiled/', // Custom folder
          ext: '.js'
        }]
      }
    },

    uglify: {
      my_target: {
        files: {
          'public/javascripts/main.min.js': ['public/javascripts/transpiled/*.js']
        }
      }
    },
    watch: {
      js: {
        files: ['public/javascripts/react/*.jsx'],
        tasks: ['babel', 'uglify']
      }
    }
  });
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-babel');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.registerTask('default', ['watch']);
};
