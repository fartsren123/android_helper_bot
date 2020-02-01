const botConfig = {
    db: {
        host: 'localhost',
        port: 27017,
        name: 'test'
    },
    token: '929425200:AAEiL-jyZ8wXs1QH4oNPA8HqPFGg1AeU-Nk',
    api_id: 1159352,
    api_hash: '3a8bb7fd3b22de7eeadf8cb32d23ac10',
    enableTdlib: false,
    github_token: '',
    dump_feature_enabled: false,
    dump_sudoers: [],
    commands_type: {
        ROMS: "ROMs",
        RECOVERY: "Recovery",
        APP: "Applications",
        FIRMWARE: "Firmwares",
        TTOLS: "Tools",
        XDA: "XDA",
        GITHUB:"GitHub",
        XPOSED:"XPosed",
        MAGISK:"Magisk",
        NANODROID:"NanoDroid",
        DEVELOPERS:"Developers",
        FDROID:"FDroid"
    }
};

module.exports = botConfig;
