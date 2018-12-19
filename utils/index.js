/**
 * Returns true if any of the items of the required array exist in the
 * components array
 * @param {Array} required
 * @param {Array} components
 * @returns {Boolean}
 */
function includes(components, required) {
    return components.some((component) => required.includes(component.name));
}

/**
 * Takes a settings array and a components array and removes the settings that:
 * 1. Have an empty 'requires' array
 * 2. At least one of the strings in the 'requires' array exists in the
 *    component array
 * 
 * @param   {Array}   settings
 * @param   {Array}   components 
 * @returns {Array}   Filtered components array array
 * 
 * This function assumes that the settings and components come from a service
 * where the the "requires" value is not undefined
 */
function reducer(settings, components) {
    return settings.reduce((total, value) => {
        if (!value.requires.length || includes(components, value.requires)) {
            total.push(value);
        }

        return total;
    }, []);
}

module.exports = {
    reducer: reducer,
    includes: includes
};
