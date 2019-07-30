module.exports ={
    entry: './src/app.ts',
    output: {
        filename: 'appp.js',
        path: __dirname + './dist'
    },
    resolve: {
        extensions: ['.ts', '.js']
    },
    module:{
        rules:[
            {test: /\.ts$/, use:'awesome-typescript-loader'}
        ]
    },
    devServer:{ 
        port: 3000,
    }
}