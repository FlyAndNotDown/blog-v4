export const BlogConfig = {
    // Debug Mode
    debugMode: true,
    // env
    env: 'development',
    // server
    backend: {
        development: {
            backendHost: 'http://localhost:7001'
        },
        production: {
            backendHost: 'https://www.kindem.xyz'
        }
    }
};
