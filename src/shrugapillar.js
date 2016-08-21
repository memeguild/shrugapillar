
export default class Shrugapillar {
    static get TYPES(){
        return Object.assign({}, TYPES);
    }

    get commonName(){
        return this.definiton_.commonName;
    }

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
     * @param {Shrugapillar.TYPES} options.type=TYPES.PLAIN
     * @param {number} options.maxNumCharacters= If specified, the length of
     *      of the shrugapillar will be limited so as to fit within the
     *      provided max number of characters.
     *
     * @return {string}
     */
    render(options = {}){
        const parts = this.getParts_(options.type);
        const lineEnd = '\n';
        let length = !options.length ? 1 : Math.max(options.length, 1);

        const maxNumCharacters = options.maxNumCharacters;

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

        return shrugapillar.join(lineEnd);
    }

    getParts_(type = DEFAULT_TYPE){
        let parts = Object.assign({}, this.definiton_[type]);

        // To prevent slack and twitter from trimming leading whitespace,
        // add a tiny 'ؘ' character to the start of the shrugapillar's antennae.
        if (type === TYPES.SLACK || type === TYPES.TWITTER){
            parts.antennae = `ؘ${parts.antennae}`;
        }

        return parts;
    }
}

const TYPES = {
    PLAIN: 'plain',
    TWITTER: 'twitter',
    SLACK: 'slack',
    MONO: 'monospace',
};

const DEFAULT_TYPE = TYPES.PLAIN;
