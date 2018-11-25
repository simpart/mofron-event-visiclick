/**
 * @file mofron-event-visiclick/index.js
 * @brief visible switch click event for mofron
 * @author simpart
 */
const mf = require('mofron');
const Click = require('mofron-event-click');

mf.event.VisiClick = class extends Click {
    /**
     * initilize event
     *
     * @param p1 (object) event option
     * @param p1 (string) visible mode
     * @param p2 (Component) target component
     */
    constructor (po, p2) {
        try {
            super();
            this.name('VisiClick');
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
    
    /**
     * target component setter/getter
     *
     * @param p1 (Component) set visible target component
     * @param p1 (undefined) call as getter
     * @return (Component) visible target component
     */
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
    
    /**
     * visible mode setter/getter
     *
     * @param p1 (string) visible mode ('enable', 'disable', 'switch')
     * @param p1 (undefined) call as getter
     * @return (string) visible mode
     */
    mode (prm) {
        try {
            return this.member('mode', ['enable', 'disable', 'switch'], prm, 'switch');
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
}
module.exports = mofron.event.VisiClick;
/* end of file */
