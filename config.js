var mipConfig = {
    MIP_SERVER_IP: "192.168.1.1",
    MIP_SERVER_PORT: "7200",
    user: "api",
    password: "newway123",
    WallName: "KFWall"
};

var sourceConfig = {
    source01: {
        channel: 1,
        device: {
            type: "matrix",
            ip: "10.1.1.10"
        }
    },
    source02: "test02",
    source03: "test03",
    source04: "test04",
    source05: "",
    source06: "",
    source07: "HK-IPC",
    source08: "",
    source09: "",
    source10: "",
    source12: "",
    source13: "",
    source14: "",
    source15: "",
    source16: ""
};

var windowConfig = {
    preset01: {
        window01: {
            x: 0,
            y: 0,
            width: 3840,
            height: 1620,
            source: [sourceConfig.source02, sourceConfig.source03, sourceConfig.source04]
        },
        window02: {
            x: 3840,
            y: 0,
            width: 3840,
            height: 1620,
            source: [sourceConfig.source03, sourceConfig.source04]
        },
        window03: {
            x: 7680,
            y: 0,
            width: 3840,
            height: 1620,
            source: sourceConfig.source01
        },
        window04: {
            x: 0,
            y: 1620,
            width: 3840,
            height: 1620,
            source: sourceConfig.source01
        },
        window05: {
            x: 3840,
            y: 1620,
            width: 3840,
            height: 1620,
            source: sourceConfig.source01
        },
        window06: {
            x: 7680,
            y: 1620,
            width: 3840,
            height: 1620,
            source: sourceConfig.source01
        }
    },
    preset02: {
        window01: {
            x: 0,
            y: 0,
            width: 3840,
            height: 1620,
            source: sourceConfig.source01
        },
        window02: {
            x: 3840,
            y: 0,
            width: 3840,
            height: 1620,
            source: sourceConfig.source01
        },
        window03: {
            x: 7680,
            y: 0,
            width: 3840,
            height: 1620,
            source: sourceConfig.source01
        },
        window04: {
            x: 0,
            y: 1620,
            width: 3840,
            height: 1620,
            source: sourceConfig.source01
        },
        window05: {
            x: 3840,
            y: 1620,
            width: 3840,
            height: 1620,
            source: sourceConfig.source01
        },
        window06: {
            x: 7680,
            y: 1620,
            width: 3840,
            height: 1620,
            source: sourceConfig.source01
        }
    },
    preset03: {
        window01: {
            x: 0,
            y: 0,
            width: 3840,
            height: 1620,
            source: sourceConfig.source01
        },
        window02: {
            x: 3840,
            y: 0,
            width: 3840,
            height: 1620,
            source: sourceConfig.source01
        },
        window03: {
            x: 7680,
            y: 0,
            width: 3840,
            height: 1620,
            source: sourceConfig.source01
        },
        window04: {
            x: 0,
            y: 1620,
            width: 3840,
            height: 1620,
            source: sourceConfig.source01
        },
        window05: {
            x: 3840,
            y: 1620,
            width: 3840,
            height: 1620,
            source: sourceConfig.source01
        },
        window06: {
            x: 7680,
            y: 1620,
            width: 3840,
            height: 1620,
            source: sourceConfig.source01
        }
    },
    preset04: {
        window01: {
            x: 0,
            y: 0,
            width: 3840,
            height: 1620,
            source: sourceConfig.source01
        },
        window02: {
            x: 3840,
            y: 0,
            width: 3840,
            height: 1620,
            source: sourceConfig.source01
        },
        window03: {
            x: 7680,
            y: 0,
            width: 3840,
            height: 1620,
            source: sourceConfig.source01
        },
        window04: {
            x: 0,
            y: 1620,
            width: 3840,
            height: 1620,
            source: sourceConfig.source01
        },
        window05: {
            x: 3840,
            y: 1620,
            width: 3840,
            height: 1620,
            source: sourceConfig.source01
        },
        window06: {
            x: 7680,
            y: 1620,
            width: 3840,
            height: 1620,
            source: sourceConfig.source01
        }
    },
    preset05: {
        window01: {
            x: 0,
            y: 0,
            width: 3840,
            height: 1620,
            source: sourceConfig.source01
        },
        window02: {
            x: 3840,
            y: 0,
            width: 3840,
            height: 1620,
            source: sourceConfig.source01
        },
        window03: {
            x: 7680,
            y: 0,
            width: 3840,
            height: 1620,
            source: sourceConfig.source01
        },
        window04: {
            x: 0,
            y: 1620,
            width: 3840,
            height: 1620,
            source: sourceConfig.source01
        },
        window05: {
            x: 3840,
            y: 1620,
            width: 3840,
            height: 1620,
            source: sourceConfig.source01
        },
        window06: {
            x: 7680,
            y: 1620,
            width: 3840,
            height: 1620,
            source: sourceConfig.source01
        }
    },
    preset06: {
        window01: {
            x: 0,
            y: 0,
            width: 3840,
            height: 1620,
            source: sourceConfig.source01
        },
        window02: {
            x: 3840,
            y: 0,
            width: 3840,
            height: 1620,
            source: sourceConfig.source01
        },
        window03: {
            x: 7680,
            y: 0,
            width: 3840,
            height: 1620,
            source: sourceConfig.source01
        },
        window04: {
            x: 0,
            y: 1620,
            width: 3840,
            height: 1620,
            source: sourceConfig.source01
        },
        window05: {
            x: 3840,
            y: 1620,
            width: 3840,
            height: 1620,
            source: sourceConfig.source01
        },
        window06: {
            x: 7680,
            y: 1620,
            width: 3840,
            height: 1620,
            source: sourceConfig.source01
        }
    },
};

module.exports.mipConfig = mipConfig;
module.exports.windowConfig = windowConfig;
module.exports.sourceConfig = sourceConfig;