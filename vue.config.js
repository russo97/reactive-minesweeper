const path = require('path')

module.exports = {
	configureWebpack: {
		resolve: {
			alias: {
				'@': path.resolve(__dirname, 'src'),
				'@assets': path.resolve(__dirname, 'src', 'assets'),
				'@scss': path.resolve(__dirname, 'src', 'assets', 'scss'),
				'@components': path.resolve(__dirname, 'src', 'components')
			}
		}
	},

	css: {
    loaderOptions: {
      sass: {
        additionalData: `
          @import "@scss/index.scss";
        `
      }
    }
  }
}