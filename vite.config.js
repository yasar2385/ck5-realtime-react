import vitejsPluginReact from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite'

export default {
	server: {
		open: 'index.html'
	},
	plugins: [vitejsPluginReact(), tailwindcss()]
};
