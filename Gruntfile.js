module.exports = function (grunt) {

    build_dir = 'dist';

    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    var taskConfig = {
        pkg: grunt.file.readJSON('package.json'),    

        meta: {
            banner:
              '/**\n' +
              ' * <%= pkg.name %> - v<%= pkg.version %> - <%= grunt.template.today("yyyy-mm-dd") %>\n' +
              ' * <%= pkg.homepage %>\n' +
              ' *\n' +
              ' * Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author %>\n' +
              ' * Licensed <%= pkg.licenses.type %> <<%= pkg.licenses.url %>>\n' +
              ' */\n'
        },        

        clean: [    
            'dist'
        ],

        copy: {
            build_app_locale: {
                files: [
                    {
                        src: ['src/app/translations/pt-br.json'],
                        dest: '<%= build_dir %>/',
                        expand: true
                    }
                ]
            },
            vendor_files: {
                files: [
                    {
                        src: [
                            'node_modules/angular/angular.min.js',
                            'node_modules/angular-ui-router/release/angular-ui-router.min.js',
                            'node_modules/angular-translate/dist/angular-translate.min.js',
                            'node_modules/angular-translate-loader-static-files/angular-translate-loader-static-files.min.js',
                            'node_modules/angular-local-storage/dist/angular-local-storage.min.js'
                        ],
                        dest: '<%= build_dir %>/assets/',
                        cwd: '.',
                        expand: true,
                        flatten: false
                    }
                ]
            },
            vendor_css_files: {
                files: [
                    {
                        src: [
                            'node_modules/bootstrap/dist/css/bootstrap.min.css'
                        ],
                        dest: '<%= build_dir %>/assets/',
                        cwd: '.',
                        expand: true,
                        flatten: false
                    }
                ]

            }
        },

        concat: {
            compile_js: {
                options: {
                    banner: '<%= meta.banner %>',
                    separator: ';\n'
                },                
                src: [
                    'src/app/app.js',
                    'src/app/app.builder.js',
                    'src/app/home/*.js',
                    'src/app/home/common/*'
                    ],
                dest: 'dist/<%= pkg.name %>.js'
            }
        },

        /**
         * Minify the sources!
         */
        uglify: {            
            compile: {
                options: {
                    banner: '<%= meta.banner %>'
                },                
                files: {
                    '<%= concat.compile_js.dest %>': '<%= concat.compile_js.dest %>'
                }
            }
        },     
                 
    };

    grunt.initConfig(taskConfig);
    grunt.registerTask('build', ['clean', 'copy', 'concat:compile_js', 'uglify']);

    grunt.registerMultiTask('index', 'Process index.html template', function (){
    
    })
};