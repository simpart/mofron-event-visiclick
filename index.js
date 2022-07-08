/**
 * @file mofron-event-visiclick/index.js
 * @brief visible switch click event for mofron
 * @license MIT
 */
const Click = require('mofron-event-click');

module.exports = class extends Click {
    /**
     * initilize event
     *
     * @param (mixed) dict: event option
     *                string: visible mode
     * @param (Component) target component
     * @type private
     */
    constructor (p1, p2) {
        try {
            super();
            this.name('VisiClick');
            this.shortForm('visible', 'target');
	    
	    /* init config */
            this.confmng().add("callback", { type: "event" });
	    this.confmng().add("target",   { type: "Component" });
            this.confmng().add("visible",  { type: "boolean", init: true });

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
		        vs.target().visible(vs.visible());
                        //if ('enable' === vs.mode()) {
                        //    vs.tgtComp().visible(true, this.callback());
                        //} else if ('disable' === vs.mode()) {
                        //    vs.tgtComp().visible(false, this.callback());
                        //} else if ('destroy' === vs.mode()) {
                        //    vs.tgtComp().destroy(this.tgtParam());
                        //} else if ('switch' === vs.mode()) {
                        //    vs.tgtComp().visible(!vs.tgtComp().visible(), this.callback());
                        //}
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
     * @param (mixed) Component: set visible target component
     *                undefined: call as getter
     * @return (Component) visible target component
     * @type parameter
     */
    target (prm) {
        try {
	    let ret = this.confmng("target", prm);
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
     *                   undefined: call as getter
     * @return (function) callback function
     * @type parameter
     */
    callback (fnc,prm) {
        try {
	    return this.confmng("callback", (undefined !== fnc) ? [fnc,prm]:undefined);
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * visible mode setter/getter
     *
     * @param (string) visible mode ('enable', 'disable', 'switch')
     *                 undefined: call as getter
     * @return (string) visible mode
     * @type parameter
     */
    visible (prm) {
        try {
	    return this.confmng("visible", prm);
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
}
/* end of file */
