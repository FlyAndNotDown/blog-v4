export const BlogConfig = {
    // Debug Mode
    debugMode: true,
    // env
    env: 'development',
    // server
    backend: {
        development: {
            backendUrl: 'http://localhost:7001'
        },
        production: {
            backendUrl: 'https://www.kindem.xyz'
        }
    }
};