
export default class Shrugapillar {
    constructor(definition){
        this.definiton_ = Object.assign({}, definition);
    }

    /**
     * Returns the Shrugapillars definition.
     *
     * @return {Object} A shrugapillar definition.
     */
    getDefinition(){
        return Object.assign({}, this.definiton_);
    }

    /**
     * Renders the current shrugapillar to a string.
     *
     * @param {number} options.length=1 The number of body elements that should
     *      be rendered.
     * @param {boolean} options.type='html' One of 'html', 'slack', or
     *      'monospace'.
     * @param {number} options.maxNumCharacters= If specified, the length of
     *      of the shrugapillar will be limited so as to fit within the
     *      provided max number of characters.
     *
     * @return {string}
     */
    render(options = {}){
        let type = options.type || 'html';
        if (!this.definiton_[type]){
            console.warning(`Unknown type "${type}", defaulting to "html"`);
            type = 'html';
        }

        let lineEnd = '\n';
        if (type === 'html') lineEnd = '<br/>';

        let parts = this.definiton_[type];
        let length = !options.length ? 1 : Math.max(options.length, 1);

        if (options.maxNumCharacters){
            const baseSize = [
                parts.antennae,
                parts.head,
                parts.booty,
            ].join(lineEnd).length;

            const maxLength = Math.floor(
                    (options.maxNumCharacters - baseSize) /
                    (parts.body.length + lineEnd.length));

            length = Math.min(length, maxLength);
        }

        let shrugapillar = [
            parts.antennae,
            parts.head,
        ];

        for (var i = 0; i < length; i++) shrugapillar.push(parts.body);

        shrugapillar.push(parts.booty);

        // If html output is requested and we are not formatting monospace then
        // replace every other space with a &nbsp; character to avoid whitespace
        // collapsing.
        if (type === 'html'){
            shrugapillar = shrugapillar.map(part => {
                return part.replace(/  /g, ' &nbsp;');
            });
        }

        // To prevent slack from trimming leading whitespace, add a small 'ؘ'
        // character to the start of the shrugapillar .
        if (type === 'slack'){
            shrugapillar[0] = `ؘ${shrugapillar[0]}`;
        }

        return shrugapillar.join(lineEnd);
    }
}
