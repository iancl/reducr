const { reducer, includes } = require('../index');

describe('utils module', () => {   
    describe('reduce function', () => {
        it('should include all settings', () => {
            const components = [
                {
                    "name": "audio"
                },
                {
                    "name": "LED array"
                }
            ];
            
            const settings = [
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

            const reducedSettings = reducer(settings, components);

            expect(reducedSettings).toEqual(settings);
        });

        it('should exclude all settings', () => {
            const components = [
                {
                    "name": "audio"
                },
                {
                    "name": "LED array"
                }
            ];
            
            const settings = [
                {
                    "name": "Mixer",
                    "requires": ["fooComponent1", "pcb"],
                },
                {
                    "name": "AttractLoop",
                    "requires": ['fooComponent2', 'fooComponent3'],
                },
                {
                    "name": "Volume",
                    "requires": ["nonExistantComponent"],
                },
                {
                    "name": "fooSetting2",
                    "requires": [
                        "fooComponent1",
                        "fooComponent2",
                        "fooComponent3",
                        "fooComponent11002",
                        "fooComponent4"
                    ]
                }
            ];

            const reducedSettings = reducer(settings, components);

            expect(reducedSettings.length).toBe(0);
        });
    });

    describe('includes function', () => {
        // In this spec the required array contains the "audio" string which
        // can also be found in the components array. This this should return
        // true
        it(`should return true`, () => {
            const components = [
                {
                    "name": "audio"
                },
                {
                    "name": "LED array"
                }
            ];

            const required = [
                'fooSetting1',
                'fooSetting2',
                'audio'
            ];

            const result = includes(components, required);

            expect(result).toBeTruthy();
        });

        // in this spec none of the contents of the required array exist in the
        // components array. Thus, it should return false
        it('should return false', () => {
            const components = [
                {
                    "name": "audio"
                },
                {
                    "name": "LED array"
                }
            ];

            const required = [
                'fooSetting1',
                'fooSetting2',
                'fooSetting3'
            ];

            const result = includes(components, required);

            expect(result).toBeFalsy();
        });
    });
});