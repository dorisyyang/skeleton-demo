module.exports = {
    presets: ['next/babel'],
    plugins: [
        [
            'import',
            {
                libraryName: '@eyebuydirect/ebd.front.lib',
                style: (name) => `${name}/style/index.css`,
            },
        ],
    ],
}
