import Shrugapillar from './shrugapillar';

const SHRUGAPILLAR_DEFINITIONS = [];

export const TYPES = Shrugapillar.TYPES;

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
            regnum: `Mememalia`,
            phylum: `Arthropoda`,
            classis: `Insecta`,
            ordo: `Lepidoptera`,
            familia: `Nymphalidae`,
            genus: `Depulso`,
        }, shrugapillar));
    });
}

register({
    species: `marcinekae`,
    commonName: `Shrugapillar`,
    description: `Your garden variety shrugapillar. Its discovery in 2016 by Kait Marcinekae prompted a flurry of discoveries of other organisms in the Mememalia kingdom.`,
    [TYPES.PLAIN]: {
        antennae:   `    ᕙ  ᕗ`,
        head:       `¯\\_(ツ)_/¯`,
        body:       `¯\\_(    )_/¯`,
        booty:      `¯\\_(__)_/¯`,
    },
    [TYPES.TWITTER]: {
        antennae:   `  ᕙ  ᕗ`,
        head:       `¯\\_(ツ)_/¯`,
        body:       `¯\\_(    )_/¯`,
        booty:      `¯\\_(__)_/¯`,
    },
    [TYPES.MONO]: {
        antennae:   `   ᕙ ᕗ`,
        head:       `¯\\_(ツ)_/¯`,
        body:       `¯\\_(  )_/¯`,
        booty:      `¯\\_(__)_/¯`,
    },
    [TYPES.SLACK]: {
        antennae:   `   ᕙ  ᕗ`,
        head:       `¯\\_(ツ)_/¯`,
        body:       `¯\\_(    )_/¯`,
        booty:      `¯\\_(__)_/¯`,
    },
}, {
    species: `inflatus`,
    commonName: `Smugapillar`,
    [TYPES.PLAIN]: {
        antennae:   `    ᕙ     ᕗ`,
        head:       `¯\\_(⌣̯̀⌣́)_/¯`,
        body:       `¯\\_(       )_/¯`,
        booty:      `¯\\_(ˍˍˍˍˍˍ)_/¯`,
    },
    [TYPES.TWITTER]: {
        antennae:   `   ᕙ       ᕗ`,
        head:       `¯\\_(⌣̯̀⌣́)_/¯`,
        body:       `¯\\_(          )_/¯`,
        booty:      `¯\\_(ˍˍˍˍˍˍˍˍ)_/¯`,
    },
    [TYPES.MONO]: {
        antennae:   `   ᕙ  ᕗ`,
        head:       `¯\\_(⌣̯̀⌣́)_/¯`,
        body:       `¯\\_(   )_/¯`,
        booty:      `¯\\_(___)_/¯`,
    },
    [TYPES.SLACK]: {
        antennae:   `    ᕙ   ᕗ`,
        head:       `¯\\_(⌣̯̀⌣́)_/¯`,
        body:       `¯\\_(       )_/¯`,
        booty:      `¯\\_(ˍˍˍˍˍ)_/¯`,
    },
}, {
    species: `incertus`,
    commonName: `Unsureapillar`,
    [TYPES.PLAIN]: {
        antennae:   `   ᕙ    ᕗ`,
        head:       `¯\\_(º_o)_/¯`,
        body:       `¯\\_(     )_/¯`,
        booty:      `¯\\_(ˍˍˍˍ)_/¯`,
    },
    [TYPES.TWITTER]: {
        antennae:   `   ᕙ    ᕗ`,
        head:       `¯\\_(º_o)_/¯`,
        body:       `¯\\_(     )_/¯`,
        booty:      `¯\\_(ˍˍˍˍ)_/¯`,
    },
    [TYPES.MONO]: {
        antennae:   `   ᕙ  ᕗ`,
        head:       `¯\\_(º_o)_/¯`,
        body:       `¯\\_(   )_/¯`,
        booty:      `¯\\_(___)_/¯`,
    },
    [TYPES.SLACK]: {
        antennae:   `    ᕙ  ᕗ`,
        head:       `¯\\_(º_o)_/¯`,
        body:       `¯\\_(     )_/¯`,
        booty:      `¯\\_(ˍˍˍ)_/¯`,
    },
}, {
    species: `ignavia`,
    commonName: `Apathetapillar`,
    [TYPES.PLAIN]: {
        antennae: `   ᕙ     ᕗ`,
        head: `¯\\_(´-｀)_/¯`,
        body: `¯\\_(       )_/¯`,
        booty: `¯\\_(ˍˍˍˍˍˍ)_/¯`,
    },
    [TYPES.TWITTER]: {
        antennae: `   ᕙ    ᕗ`,
        head: `¯\\_(´-｀)_/¯`,
        body: `¯\\_(       )_/¯`,
        booty: `¯\\_(ˍˍˍˍˍˍ)_/¯`,
    },
    [TYPES.MONO]: {
        antennae:   `   ᕙ   ᕗ`,
        head:       `¯\\_(´-｀)_/¯`,
        body:       `¯\\_(    )_/¯`,
        booty:      `¯\\_(____)_/¯`,
    },
    [TYPES.SLACK]: {
        antennae: `   ᕙ     ᕗ`,
        head: `¯\\_(´-｀)_/¯`,
        body: `¯\\_(       )_/¯`,
        booty: `¯\\_(ˍˍˍˍˍ)_/¯`,
    },
}, {
    species: `indignati`,
    commonName: `Indignapillar`,
    [TYPES.PLAIN]: {
        antennae:   `    ༽     ༼`,
        head:       `¯\\_(ಠ_ಠ)_/¯`,
        body:       `¯\\_(       )_/¯`,
        booty:      `¯\\_(ˍˍˍˍˍ)_/¯`,
    },
    [TYPES.TWITTER]: {
        antennae:   `    ༽     ༼`,
        head:       `¯\\_(ಠ_ಠ)_/¯`,
        body:       `¯\\_(       )_/¯`,
        booty:      `¯\\_(ˍˍˍˍˍˍ)_/¯`,
    },
    [TYPES.MONO]: {
        antennae:   `   ༽   ༼`,
        head:       `¯\\_(ಠ_ಠ)_/¯`,
        body:       `¯\\_(   )_/¯`,
        booty:      `¯\\_(___)_/¯`,
    },
    [TYPES.SLACK]: {
        antennae:   `    ༽      ༼`,
        head:       `¯\\_(ಠ_ಠ)_/¯`,
        body:       `¯\\_(       )_/¯`,
        booty:      `¯\\_(ˍˍˍˍˍ)_/¯`,
    },
}, {
    species: `contentus`,
    commonName: `Contentapillar`,
    [TYPES.PLAIN]: {
        antennae:   `     ᕙ     ᕗ`,
        head:       `¯\\_(◉‿◉)_/¯`,
        body:       `¯\\_(          )_/¯`,
        booty:      `¯\\_(ˍˍˍˍˍˍˍˍ)_/¯`,
    },
    [TYPES.TWITTER]: {
        antennae:   `     ᕙ     ᕗ`,
        head:       `¯\\_(◉‿◉)_/¯`,
        body:       `¯\\_(          )_/¯`,
        booty:      `¯\\_(ˍˍˍˍˍˍˍˍ)_/¯`,
    },
    [TYPES.MONO]: {
        antennae:   `   ᕙ   ᕗ`,
        head:       `¯\\_(◉‿◉)_/¯`,
        body:       `¯\\_(    )_/¯`,
        booty:      `¯\\_(____)_/¯`,
    },
    [TYPES.SLACK]: {
        antennae:   `     ᕙ      ᕗ`,
        head:       `¯\\_(◉‿◉)_/¯`,
        body:       `¯\\_(           )_/¯`,
        booty:      `¯\\_(ˍˍˍˍˍˍˍ)_/¯`,
    },
}, {
    species: `exasperentur`,
    commonName: `Desuapillar`,
    [TYPES.PLAIN]: {
        antennae:   `    ᕙ       ᕗ`,
        head:       `¯\\_( ͡° ͜ʖ ͡° )_/¯`,
        body:       `¯\\_(          )_/¯`,
        booty:      `¯\\_(ˍˍˍˍˍˍˍˍ)_/¯`,
    },
    [TYPES.TWITTER]: {
        antennae:   `    ᕙ            ᕗ`,
        head:       `¯\\_( ͡° ͜ʖ ͡° )_/¯`,
        body:       `¯\\_(                 )_/¯`,
        booty:      `¯\\_(ˍˍˍˍˍˍˍˍˍˍˍˍˍˍ)_/¯`,
    },
    [TYPES.MONO]: {
        antennae:   `   ᕙ       ᕗ`,
        head:       `¯\\_( ͡° ͜ʖ ͡° )_/¯`,
        body:       `¯\\_(       )_/¯`,
        booty:      `¯\\_(_______)_/¯`,
    },
    [TYPES.SLACK]: {
        antennae:   `   ᕙ          ᕗ`,
        head:       `¯\\_( ͡° ͜ʖ ͡° )_/¯`,
        body:       `¯\\_(            )_/¯`,
        booty:      `¯\\_(ˍˍˍˍˍˍˍˍ)_/¯`,
    },
}, {
    species: `omnipotentem`,
    commonName: `Illumipillar`,
    description: `The illumipillar knows all. Sees all. But doesn't care. lol.`,
    [TYPES.PLAIN]: {
        antennae:   `   ᕙ   ᕗ`,
        head:       `¯\\_(👁)_/¯`,
        body:       `¯\\_(     )_/¯`,
        booty:      `¯\\_(ˍˍˍˍ)_/¯`,
    },
    [TYPES.TWITTER]: {
        antennae:   `   ᕙ   ᕗ`,
        head:       `¯\\_(👁)_/¯`,
        body:       `¯\\_(     )_/¯`,
        booty:      `¯\\_(ˍˍˍˍ)_/¯`,
    },
    [TYPES.MONO]: {
        antennae:   `   ᕙ ᕗ`,
        head:       `¯\\_(👁)_/¯`,
        body:       `¯\\_(  )_/¯`,
        booty:      `¯\\_(__)_/¯`,
    },
    [TYPES.SLACK]: {
        antennae:   `   ᕙ    ᕗ`,
        head:       `¯\\_(👁)_/¯`,
        body:       `¯\\_(     )_/¯`,
        booty:      `¯\\_(ˍˍˍ)_/¯`,
    },
}, {
    species: `lepidoptera`,
    commonName: `Concealapillar`,
    [TYPES.PLAIN]: {
        antennae:   `    ༽        ༼`,
        head:       `¯\\_(ಥ﹏ಥ)_/¯`,
        body:       `¯\\_(          )_/¯`,
        booty:      `¯\\_(_____)_/¯`,
    },
    [TYPES.TWITTER]: {
        antennae:   `    ༽        ༼`,
        head:       `¯\\_(ಥ﹏ಥ)_/¯`,
        body:       `¯\\_(         )_/¯`,
        booty:      `¯\\_(_____)_/¯`,
    },
    [TYPES.MONO]: {
        antennae:   `   ༽    ༼`,
        head:       `¯\\_(ಥ﹏ಥ)_/¯`,
        body:       `¯\\_(    )_/¯`,
        booty:      `¯\\_(____)_/¯`,
    },
    [TYPES.SLACK]: {
        antennae:   `    ༽         ༼`,
        head:       `¯\\_(ಥ﹏ಥ)_/¯`,
        body:       `¯\\_(          )_/¯`,
        booty:      `¯\\_(______)_/¯`,
    },
});
