
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
     * @param {boolean} options.type='html' One of 'html', or 'monospace'.
     *
     * @return {string}
     */
    render(options = {}){
        options.length = !options.length || options.length < 1 ?
                1 : options.length;

        let type = options.type || 'html';
        let parts;
        switch (type){
            case 'html':
                parts = this.definiton_.html;
                break;
            case 'monospace':
                parts = this.definiton_.monospace;
                break;
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
        if (type === 'html'){
            shrugapillar = shrugapillar.map(part => {
                return part.replace(/  /g, ' &nbsp;');
            });
        }

        return shrugapillar.join('\n');
    }
}
