/**
 * @file mofron-event-visiswh/index.js
 * @brief visible switch click event for mofron
 * @author simpart
 */
const mf = require('mofron');
const Click = require('mofron-event-click');

/**
 * @class mofron.event.VisiSwh
 * @brief VisiSwh event class for component
 */
mf.event.VisiSwh = class extends Click {
    
    constructor (po, p2) {
        try {
            super();
            this.name('VisiSwh');
            this.prmMap('mode', 'tgtComp');
            this.prmOpt(po, p2);
            this.handler(
                (tgt, vs) => {
                    try {
                        if ('enable' === vs.mode()) {
                            vs.tgtComp().visible(true);
                        } else if ('disable' === vs.mode()) {
                            vs.tgtComp().visible(false);
                        } else if ('switch' === vs.mode()) {
                            vs.tgtComp().visible(!vs.tgtComp().visible());
                        }
                    } catch (e) {
                        console.error(e.stack);
                        throw e;
                    }
                },
                this
            );
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    tgtComp (prm) {
        try {
            if (undefined === prm) {
                /* getter */
                return (undefined === this.m_tgtcomp) ? this.component() : this.m_tgtcomp;
            }
            /* setter */
            if (true !== mf.func.isInclude(prm, 'Component')) {
                throw new Error('invalid parameter');
            }
            this.m_tgtcomp = prm;
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    mode (prm) {
        try {
            if (undefined === prm) {
                /* getter */
                return (undefined === this.m_mode) ? 'switch' : this.m_mode;
            }
            /* setter */
            if (('enable' !== prm) && ('disable' !== prm) && ('switch' !== prm)) {
                throw new Error('invalid parameter');
            }
            this.m_mode = prm;
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
}
module.exports = mofron.event.VisiSwh;
/* end of file */
