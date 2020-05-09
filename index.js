/**
 * @file mofron-event-visiclick/index.js
 * @brief visible switch click event for mofron
 * @author simpart
 */
const Click = require('mofron-event-click');

module.exports = class extends Click {
    /**
     * initilize event
     *
     * @param p1 (object) event option
     * @param p1 (string) visible mode
     * @param p2 (Component) target component
     */
    constructor (p1, p2) {
        try {
            super();
            this.name('VisiClick');
            this.shortForm('mode', 'tgtComp');
	    
	    /* init config */
            this.confmng().add("callback", { type: "function" });
	    this.confmng().add("tgtComp",  { type: "Component" });
            this.confmng().add("mode",     { type: "string", init: "switch" });

	    /* set config */
	    if (0 < arguments.length) {
                this.config(p1,p2);
	    }
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * add click event to target component.
     *
     * @param (component) event target component
     * @type private
     */
    contents (tgt_dom) {
        try {
            super.contents(tgt_dom);
            this.listener(
                (tgt, ev, vs) => {
                    try {
                        if ('enable' === vs.mode()) {
                            vs.tgtComp().visible(true, this.callback());
                        } else if ('disable' === vs.mode()) {
                            vs.tgtComp().visible(false, this.callback());
                        } else if ('destroy' === vs.mode()) {
                            vs.tgtComp().destroy(this.tgtParam());
                        } else if ('switch' === vs.mode()) {
                            vs.tgtComp().visible(!vs.tgtComp().visible(), this.callback());
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
     * @type parameter
     */
    tgtComp (prm) {
        try {
	    let ret = this.confmng("tgtComp", prm);
	    return (null === ret) ? this.component() : ret;
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * callback function for switch
     * 
     * @param (function) callback function
     * @return (function) callback function
     * @type parameter
     */
    callback (prm) {
        try {
	    let ret = this.confmng("callback", prm);
            return (null === ret) ? undefined : ret;
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
	    return this.confmng("mode", prm);
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
}
/* end of file */
