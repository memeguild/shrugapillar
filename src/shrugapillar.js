
export default class Shrugapillar {
    constructor(definition){
        this.definiton_ = Object.assign({}, definition);
    }

    /**
     * Returns the Shrugapillars definition.
     *
     * @return {Object} A shrugapillar definition.
     */
    getDefiniton(){
        return Object.assign({}, this.definiton_);
    }

    /**
     * Renders the current shrugapillar to a string.
     *
     * @param {number} options.length=1 The number of body elements that should
     *      be rendered.
     * @param {boolean} options.monospace=false Whether or not to use the
     *      shrugapillars monospace definition (if available).
     * @param {boolean} options.html=false Whether or to format the shrugapillar
     *      for use in html files (replaces ever other space with &nbsp; to
     *      avoid whitespace collapsing).
     *
     * @return {string}
     */
    render(options = {}){
        options.length = !options.length || options.length < 1 ?
                1 : options.length;

        let parts = this.definiton_;
        if (options.monospace && this.definiton_.monospace){
            parts = this.definiton_.monospace;
        }

        let shrugapillar = [
            parts.antennae,
            parts.head,
        ];
        for (var i = 0; i < options.length; i++) shrugapillar.push(parts.body);
        shrugapillar.push(parts.booty);

        // If html output is requested and we are not formatting monospace then
        // replace every other space with a &nbsp; character to avoid whitespace
        // collapsing.
        if (options.html && !options.monospace){
            shrugapillar = shrugapillar.map(part => {
                return part.replace(/  /g, ' &nbsp;');
            });
        }

        return shrugapillar.join('\n');
    }
}
