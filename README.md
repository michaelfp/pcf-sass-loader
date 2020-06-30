**Sass Loader For Power Apps Component FrameWork**

A load to helps you to use sass in you pcf component

Install using the follwing command

`npm install  pcf-sass-loader file-loader extract-loader css-loader postcss-loader sass-loader --save-dev`

after edit the webpackconfig.js file in /node_modules/pcf-scripts on rules

`{
                    test: /\.scss$/, //find per files that is sass
                    use: [
                       
                        {
                            loader: require.resolve('file-loader'),
                            options: {
                                name: '[folder]/[name].css' // create the compiled file in the same location that is configured in the project
                            }
                        },
                         {
                            loader: require.resolve("pcf-sass-loader"),
                        },
                        {
                            loader: require.resolve('extract-loader')
                        }, {
                            loader: require.resolve('css-loader'),
                            options: {
                                url: true
                            }
                        }, {
                            loader: require.resolve('postcss-loader')
                        }, {
                            loader: require.resolve('sass-loader')
                        }
                       
                    ]
                }`


