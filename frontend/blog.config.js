export const BlogConfig = {
    // Debug Mode
    debugMode: true,
    // Mock Data
    useMockData: false,
    // env
    env: 'development',
    // server
    backend: {
        development: {
            url: 'http://localhost:7001'
        },
        production: {
            url: 'https://www.kindem.xyz'
        }
    }
};