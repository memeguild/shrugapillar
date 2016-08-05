
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
     *
     * @return {string}
     */
    render({length = 1} = {}){
        const shrugapillar = [
            this.definiton_.antenna,
            this.definiton_.head,
        ];

        for (var i = 0; i < length; i++){
            shrugapillar.push(this.definiton_.body);
        }

        shrugapillar.push(this.definiton_.booty);

        return shrugapillar.join('\n');
    }
}
