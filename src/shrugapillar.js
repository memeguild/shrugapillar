
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

        const shrugapillar = [
            parts.antenna,
            parts.head,
        ];

        for (var i = 0; i < options.length; i++){
            shrugapillar.push(parts.body);
        }

        shrugapillar.push(parts.booty);

        return shrugapillar.join('\n');
    }
}
