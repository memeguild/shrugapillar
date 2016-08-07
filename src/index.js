import Shrugapillar from './shrugapillar';

const SHRUGAPILLAR_DEFINITIONS = [];

/**
 * Renders a Shrugapillar based on the provided name.
 *
 * @param {string} options.name= Either the commonName or the species of the
 *      shrugapillar to get.
 *
 * @return {Shrugapillar}
 */
export function get(name){
    name = name.toLowerCase();

    const def = SHRUGAPILLAR_DEFINITIONS.find(def => {
        return def.commonName.toLowerCase() === name ||
                def.species.toLowerCase() === name;
    });

    return def ? new Shrugapillar(def) : null;
}

/**
 * Returns all registered Shrugapillars.
 *
 * @return {Array.<Shrugapillar>} Array of Shrugapillars.
 */
export function getAll(){
    return SHRUGAPILLAR_DEFINITIONS.map(def => new Shrugapillar(def));
}

/**
 * Register the provided shrugapillars.
 *
 * @param {...Object} args Shrugapillar objects.
 */
export function register(...args){
    args.forEach(shrugapillar => {
        // TODO(ndrwhr): validate incoming shrugapillar.
        SHRUGAPILLAR_DEFINITIONS.push(Object.assign({}, {
            regnum: `mememalia`,
            phylum: `arthropoda`,
            classis: `insecta`,
            ordo: `lepidoptera`,
            familia: `nymphalidae`,
            genus: `depulso`,
        }, shrugapillar));
    });
}

register({
    species: `marcinekae`,
    commonName: `Shrugapillar`,
    html: {
        antennae:   `   ᕙ  ᕗ`,
        head:       `¯\\_(ツ)_/¯`,
        body:       `¯\\_(    )_/¯`,
        booty:      `¯\\_(ˍˍˍ)_/¯`,
    },
    monospace: {
        antennae:   `   ᕙ ᕗ`,
        head:       `¯\\_(ツ)_/¯`,
        body:       `¯\\_(  )_/¯`,
        booty:      `¯\\_(__)_/¯`,
    },
    slack: {
        antennae:   `   ᕙ  ᕗ`,
        head:       `¯\\_(ツ)_/¯`,
        body:       `¯\\_(    )_/¯`,
        booty:      `¯\\_(__)_/¯`,
    },
}, {
    species: `inflatus`,
    commonName: `Smugapillar`,
    html: {
        antennae:   `   ᕙ            ᕗ`,
        head:       `¯\\_(⌣̯̀⌣́)_/¯`,
        body:       `¯\\_(             )_/¯`,
        booty:      `¯\\_(ˍˍˍˍˍˍˍˍˍ)_/¯`,
    },
    monospace: {
        antennae:   `  ᕙ      ᕗ`,
        head:       `¯\\_(⌣̯̀⌣́)_/¯`,
        body:       `¯\\_(     )_/¯`,
        booty:      `¯\\_(_____)_/¯`,
    },
    slack: {
        antennae:   `    ᕙ   ᕗ`,
        head:       `¯\\_(⌣̯̀⌣́)_/¯`,
        body:       `¯\\_(       )_/¯`,
        booty:      `¯\\_(ˍˍˍˍˍ)_/¯`,
    },
}, {
    species: `incertus`,
    commonName: `Unsureapillar`,
    html: {
        antennae:   `   ᕙ    ᕗ`,
        head:       `¯\\_(º_o)_/¯`,
        body:       `¯\\_(     )_/¯`,
        booty:      `¯\\_(ˍˍˍ)_/¯`,
    },
    monospace: {
        antennae:   `   ᕙ  ᕗ`,
        head:       `¯\\_(º_o)_/¯`,
        body:       `¯\\_(   )_/¯`,
        booty:      `¯\\_(___)_/¯`,
    },
    slack: {
        antennae:   `    ᕙ  ᕗ`,
        head:       `¯\\_(º_o)_/¯`,
        body:       `¯\\_(     )_/¯`,
        booty:      `¯\\_(ˍˍˍ)_/¯`,
    },
}, {
    species: `ignavia`,
    commonName: `Apathetapillar`,
    html: {
        antennae: `   ᕙ     ᕗ`,
        head: `¯\\_(´-｀)_/¯`,
        body: `¯\\_(       )_/¯`,
        booty: `¯\\_(ˍˍˍˍˍ)_/¯`,
    },
    monospace: {
        antennae:   `   ᕙ   ᕗ`,
        head:       `¯\\_(´-｀)_/¯`,
        body:       `¯\\_(    )_/¯`,
        booty:      `¯\\_(____)_/¯`,
    },
    slack: {
        antennae: `   ᕙ     ᕗ`,
        head: `¯\\_(´-｀)_/¯`,
        body: `¯\\_(       )_/¯`,
        booty: `¯\\_(ˍˍˍˍˍ)_/¯`,
    },
}, {
    species: `indignati`,
    commonName: `Indignapillar`,
    html: {
        antennae:   `    ༽     ༼`,
        head:       `¯\\_(ಠ_ಠ)_/¯`,
        body:       `¯\\_(       )_/¯`,
        booty:      `¯\\_(ˍˍˍˍˍ)_/¯`,
    },
    monospace: {
        antennae:   `   ༽   ༼`,
        head:       `¯\\_(ಠ_ಠ)_/¯`,
        body:       `¯\\_(   )_/¯`,
        booty:      `¯\\_(___)_/¯`,
    },
    slack: {
        antennae:   `    ༽      ༼`,
        head:       `¯\\_(ಠ_ಠ)_/¯`,
        body:       `¯\\_(       )_/¯`,
        booty:      `¯\\_(ˍˍˍˍˍ)_/¯`,
    },
}, {
    species: `contentus`,
    commonName: `Contentapillar`,
    html: {
        antennae:   `     ᕙ     ᕗ`,
        head:       `¯\\_(◉‿◉)_/¯`,
        body:       `¯\\_(          )_/¯`,
        booty:      `¯\\_(ˍˍˍˍˍˍˍ)_/¯`,
    },
    monospace: {
        antennae:   `   ᕙ   ᕗ`,
        head:       `¯\\_(◉‿◉)_/¯`,
        body:       `¯\\_(    )_/¯`,
        booty:      `¯\\_(____)_/¯`,
    },
    slack: {
        antennae:   `     ᕙ      ᕗ`,
        head:       `¯\\_(◉‿◉)_/¯`,
        body:       `¯\\_(           )_/¯`,
        booty:      `¯\\_(ˍˍˍˍˍˍˍ)_/¯`,
    },
}, {
    species: `exasperentur`,
    commonName: `Desuapillar`,
    html: {
        antennae:   `     ᕙ           ᕗ`,
        head:       `¯\\_( ͡° ͜ʖ ͡° )_/¯`,
        body:       `¯\\_(                )_/¯`,
        booty:      `¯\\_(ˍˍˍˍˍˍˍˍˍˍˍ)_/¯`,
    },
    monospace: {
        antennae:   `   ᕙ       ᕗ`,
        head:       `¯\\_( ͡° ͜ʖ ͡° )_/¯`,
        body:       `¯\\_(        )_/¯`,
        booty:      `¯\\_(________)_/¯`,
    },
    slack: {
        antennae:   `   ᕙ          ᕗ`,
        head:       `¯\\_( ͡° ͜ʖ ͡° )_/¯`,
        body:       `¯\\_(            )_/¯`,
        booty:      `¯\\_(ˍˍˍˍˍˍˍˍ)_/¯`,
    },
}, {
    species: `omnipotentem`,
    commonName: `Illumipillar`,
    description: `Knows all. Sees all. Controls all.`,
    html: {
        antennae:   `   ᕙ   ᕗ`,
        head:       `¯\\_(👁)_/¯`,
        body:       `¯\\_(     )_/¯`,
        booty:      `¯\\_(ˍˍˍ)_/¯`,
    },
    monospace: {
        antennae:   `   ᕙ ᕗ`,
        head:       `¯\\_(👁)_/¯`,
        body:       `¯\\_(  )_/¯`,
        booty:      `¯\\_(__)_/¯`,
    },
    slack: {
        antennae:   `   ᕙ    ᕗ`,
        head:       `¯\\_(👁)_/¯`,
        body:       `¯\\_(     )_/¯`,
        booty:      `¯\\_(ˍˍˍ)_/¯`,
    },
}, {
    species: `lepidoptera`,
    commonName: `Concealapillar`,
    html: {
        antennae:   `    ༽        ༼`,
        head:       `¯\\_(ಥ﹏ಥ)_/¯`,
        body:       `¯\\_(          )_/¯`,
        booty:      `¯\\_(_____)_/¯`,
    },
    monospace: {
        antennae:   `   ༽    ༼`,
        head:       `¯\\_(ಥ﹏ಥ)_/¯`,
        body:       `¯\\_(    )_/¯`,
        booty:      `¯\\_(____)_/¯`,
    },
    slack: {
        antennae:   `    ༽         ༼`,
        head:       `¯\\_(ಥ﹏ಥ)_/¯`,
        body:       `¯\\_(          )_/¯`,
        booty:      `¯\\_(______)_/¯`,
    },
});
