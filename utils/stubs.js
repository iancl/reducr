module.exports.components = [
    {
        "name": "audio"
    },
    {
        "name": "LED array"
    }
];

module.exports.settings = [
    {
        "name": "Mixer",
        "requires": ["audio", "pcb"],
    },
    {
        "name": "AttractLoop",
        "requires": [],
    },
    {
        "name": "Volume",
        "requires": ["audio"],
    },
    {
        "name": "fooSetting1",
        "requires": ["fooComponent1", "fooComponent2"]
    },
    {
        "name": "fooSetting2",
        "requires": [
            "fooComponent1",
            "fooComponent2",
            "fooComponent3",
            "LED array",
            "fooComponent4"
        ]
    }
];
