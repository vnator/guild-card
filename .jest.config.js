module.exports = {
    watchPlugins: [
        ['jest-watch-toggle-config', { setting: 'verbose' }],
        ['jest-watch-toggle-config', { setting: 'collectCoverage' }],
    ],
}
