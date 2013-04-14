SpriteMorph.prototype.initBlocks = function () {
    SpriteMorph.prototype.blocks = {

        // Motion
        forward: {
            type: 'command',
            category: 'motion',
            spec: 'move %n steps',
            defaults: [10]
        },
        turn: {
            type: 'command',
            category: 'motion',
            spec: 'turn %clockwise %n degrees',
            defaults: [15]
        },
        turnLeft: {
            type: 'command',
            category: 'motion',
            spec: 'turn %counterclockwise %n degrees',
            defaults: [15]
        },
        setHeading: {
            type: 'command',
            category: 'motion',
            spec: 'point in direction %dir'
        },
        doFaceTowards: {
            type: 'command',
            category: 'motion',
            spec: 'point towards %dst'
        },
        gotoXY: {
            type: 'command',
            category: 'motion',
            spec: 'go to x: %n y: %n',
            defaults: [0, 0]
        },
        doGotoObject: {
            type: 'command',
            category: 'motion',
            spec: 'go to %dst'
        },
        doGlide: {
            type: 'command',
            category: 'motion',
            spec: 'glide %n secs to x: %n y: %n',
            defaults: [1, 0, 0]
        },
        changeXPosition: {
            type: 'command',
            category: 'motion',
            spec: 'change x by %n',
            defaults: [10]
        },
        setXPosition: {
            type: 'command',
            category: 'motion',
            spec: 'set x to %n',
            defaults: [0]
        },
        changeYPosition: {
            type: 'command',
            category: 'motion',
            spec: 'change y by %n',
            defaults: [10]
        },
        setYPosition: {
            type: 'command',
            category: 'motion',
            spec: 'set y to %n',
            defaults: [0]
        },
        bounceOffEdge: {
            type: 'command',
            category: 'motion',
            spec: 'if on edge, bounce'
        },
        xPosition: {
            type: 'reporter',
            category: 'motion',
            spec: 'x position'
        },
        yPosition: {
            type: 'reporter',
            category: 'motion',
            spec: 'y position'
        },
        direction: {
            type: 'reporter',
            category: 'motion',
            spec: 'direction'
        },

        // Looks
        doSwitchToCostume: {
            type: 'command',
            category: 'looks',
            spec: 'switch to costume %cst'
        },
        doWearNextCostume: {
            type: 'command',
            category: 'looks',
            spec: 'next costume'
        },
        getCostumeIdx: {
            type: 'reporter',
            category: 'looks',
            spec: 'costume #'
        },
        doSayFor: {
            type: 'command',
            category: 'looks',
            spec: 'say %s for %n secs',
            defaults: [localize('Hello!'), 2]
        },
        bubble: {
            type: 'command',
            category: 'looks',
            spec: 'say %s',
            defaults: [localize('Hello!')]
        },
        doThinkFor: {
            type: 'command',
            category: 'looks',
            spec: 'think %s for %n secs',
            defaults: [localize('Hmm...'), 2]
        },
        doThink: {
            type: 'command',
            category: 'looks',
            spec: 'think %s',
            defaults: [localize('Hmm...')]
        },
        changeEffect: {
            type: 'command',
            category: 'looks',
            spec: 'change %eff effect by %n',
            defaults: [null, 25]
        },
        setEffect: {
            type: 'command',
            category: 'looks',
            spec: 'set %eff effect to %n',
            defaults: [null, 0]
        },
        clearEffects: {
            type: 'command',
            category: 'looks',
            spec: 'clear graphic effects'
        },
        changeScale: {
            type: 'command',
            category: 'looks',
            spec: 'change size by %n',
            defaults: [10]
        },
        setScale: {
            type: 'command',
            category: 'looks',
            spec: 'set size to %n %',
            defaults: [100]
        },
        getScale: {
            type: 'reporter',
            category: 'looks',
            spec: 'size'
        },
        show: {
            type: 'command',
            category: 'looks',
            spec: 'show'
        },
        hide: {
            type: 'command',
            category: 'looks',
            spec: 'hide'
        },
        comeToFront: {
            type: 'command',
            category: 'looks',
            spec: 'go to front'
        },
        goBack: {
            type: 'command',
            category: 'looks',
            spec: 'go back %n layers',
            defaults: [1]
        },

        // Looks - Debugging primitives for development mode
        alert: {
            type: 'command',
            category: 'looks',
            spec: 'alert %mult%s'
        },
        log: {
            type: 'command',
            category: 'looks',
            spec: 'console log %mult%s'
        },

        // Sound
        playSound: {
            type: 'command',
            category: 'sound',
            spec: 'play sound %snd'
        },
        doPlaySoundUntilDone: {
            type: 'command',
            category: 'sound',
            spec: 'play sound %snd until done'
        },
        doStopAllSounds: {
            type: 'command',
            category: 'sound',
            spec: 'stop all sounds'
        },
        doRest: {
            type: 'command',
            category: 'sound',
            spec: 'rest for %n beats',
            defaults: [0.2]
        },
        doPlayNote: {
            type: 'command',
            category: 'sound',
            spec: 'play note %n for %n beats',
            defaults: [60, 0.5]
        },
        doChangeTempo: {
            type: 'command',
            category: 'sound',
            spec: 'change tempo by %n',
            defaults: [20]
        },
        doSetTempo: {
            type: 'command',
            category: 'sound',
            spec: 'set tempo to %n bpm',
            defaults: [60]
        },
        getTempo: {
            type: 'reporter',
            category: 'sound',
            spec: 'tempo'
        },

        // Pen
        clear: {
            type: 'command',
            category: 'pen',
            spec: 'clear'
        },
        down: {
            type: 'command',
            category: 'pen',
            spec: 'pen down'
        },
        up: {
            type: 'command',
            category: 'pen',
            spec: 'pen up'
        },
        setColor: {
            type: 'command',
            category: 'pen',
            spec: 'set pen color to %clr'
        },
        changeHue: {
            type: 'command',
            category: 'pen',
            spec: 'change pen color by %n',
            defaults: [10]
        },
        setHue: {
            type: 'command',
            category: 'pen',
            spec: 'set pen color to %n',
            defaults: [0]
        },
        getHue: {
            type: 'reporter',
            category: 'pen',
            spec: 'get pen color'
        },
        changeBrightness: {
            type: 'command',
            category: 'pen',
            spec: 'change pen shade by %n',
            defaults: [10]
        },
        setBrightness: {
            type: 'command',
            category: 'pen',
            spec: 'set pen shade to %n',
            defaults: [100]
        },
        getBrightness: {
            type: 'reporter',
            category: 'pen',
            spec: 'get pen shade'
        },
        changeSize: {
            type: 'command',
            category: 'pen',
            spec: 'change pen size by %n',
            defaults: [1]
        },
        setSize: {
            type: 'command',
            category: 'pen',
            spec: 'set pen size to %n',
            defaults: [1]
        },
        doStamp: {
            type: 'command',
            category: 'pen',
            spec: 'stamp'
        },

        // Control
        receiveGo: {
            type: 'hat',
            category: 'control',
            spec: 'when %greenflag clicked'
        },
        receiveKey: {
            type: 'hat',
            category: 'control',
            spec: 'when %keyHat key pressed'
        },
        receiveClick: {
            type: 'hat',
            category: 'control',
            spec: 'when I am clicked'
        },
        receiveMessage: {
            type: 'hat',
            category: 'control',
            spec: 'when I receive %msgHat'
        },
        doBroadcast: {
            type: 'command',
            category: 'control',
            spec: 'broadcast %msg'
        },
        doBroadcastAndWait: {
            type: 'command',
            category: 'control',
            spec: 'broadcast %msg and wait'
        },
        doWait: {
            type: 'command',
            category: 'control',
            spec: 'wait %n secs',
            defaults: [1]
        },
        doWaitUntil: {
            type: 'command',
            category: 'control',
            spec: 'wait until %b'
        },
        doForever: {
            type: 'command',
            category: 'control',
            spec: 'forever %c'
        },
        doRepeat: {
            type: 'command',
            category: 'control',
            spec: 'repeat %n %c',
            defaults: [10]
        },
        doUntil: {
            type: 'command',
            category: 'control',
            spec: 'repeat until %b %c'
        },
        doIf: {
            type: 'command',
            category: 'control',
            spec: 'if %b %c'
        },
        doIfElse: {
            type: 'command',
            category: 'control',
            spec: 'if %b %c else %c'
        },
        doStop: {
            type: 'command',
            category: 'control',
            spec: 'stop script'
        },
        doStopAll: {
            type: 'command',
            category: 'control',
            spec: 'stop all %stop'
        },
        doRun: {
            type: 'command',
            category: 'control',
            spec: 'run %cmdRing %inputs'
        },
        fork: {
            type: 'command',
            category: 'control',
            spec: 'launch %cmdRing %inputs'
        },
        evaluate: {
            type: 'reporter',
            category: 'control',
            spec: 'call %repRing %inputs'
        },
    /*
        doRunWithInputList: {
            type: 'command',
            category: 'control',
            spec: 'run %cmd with input list %l'
        },

        forkWithInputList: {
            type: 'command',
            category: 'control',
            spec: 'launch %cmd with input list %l'
        },

        evaluateWithInputList: {
            type: 'reporter',
            category: 'control',
            spec: 'call %r with input list %l'
        },
    */
        doReport: {
            type: 'command',
            category: 'control',
            spec: 'report %s'
        },
        doStopBlock: {
            type: 'command',
            category: 'control',
            spec: 'stop block'
        },
        doCallCC: {
            type: 'command',
            category: 'control',
            spec: 'run %cmdRing w/continuation'
        },
        reportCallCC: {
            type: 'reporter',
            category: 'control',
            spec: 'call %cmdRing w/continuation'
        },
        doWarp: {
            type: 'command',
            category: 'other',
            spec: 'warp %c'
        },

        // Cloning - very experimental
        receiveOnClone: {
            type: 'hat',
            category: 'control',
            spec: 'when I start as a clone'
        },
        createClone: {
            type: 'command',
            category: 'control',
            spec: 'create a clone of %cln'
        },
        removeClone: {
            type: 'command',
            category: 'control',
            spec: 'delete this clone'
        },

        // Sensing

        reportTouchingObject: {
            type: 'predicate',
            category: 'sensing',
            spec: 'touching %col ?'
        },
        reportTouchingColor: {
            type: 'predicate',
            category: 'sensing',
            spec: 'touching %clr ?'
        },
        reportColorIsTouchingColor: {
            type: 'predicate',
            category: 'sensing',
            spec: 'color %clr is touching %clr ?'
        },
        colorFiltered: {
            type: 'reporter',
            category: 'sensing',
            spec: 'filtered for %clr'
        },
        reportStackSize: {
            type: 'reporter',
            category: 'sensing',
            spec: 'stack size'
        },
        reportFrameCount: {
            type: 'reporter',
            category: 'sensing',
            spec: 'frames'
        },
        doAsk: {
            type: 'command',
            category: 'sensing',
            spec: 'ask %s and wait',
            defaults: [localize('what\'s your name?')]
        },
        reportLastAnswer: {
            type: 'reporter',
            category: 'sensing',
            spec: 'answer'
        },
        getLastAnswer: { // variant for watcher
            type: 'reporter',
            category: 'sensing',
            spec: 'answer'
        },
        reportMouseX: {
            type: 'reporter',
            category: 'sensing',
            spec: 'mouse x'
        },
        reportMouseY: {
            type: 'reporter',
            category: 'sensing',
            spec: 'mouse y'
        },
        reportMouseDown: {
            type: 'predicate',
            category: 'sensing',
            spec: 'mouse down?'
        },
        reportKeyPressed: {
            type: 'predicate',
            category: 'sensing',
            spec: 'key %key pressed?'
        },
        reportDistanceTo: {
            type: 'reporter',
            category: 'sensing',
            spec: 'distance to %dst'
        },
        doResetTimer: {
            type: 'command',
            category: 'sensing',
            spec: 'reset timer'
        },
        reportTimer: {
            type: 'reporter',
            category: 'sensing',
            spec: 'timer'
        },
        getTimer: { // variant for watcher
            type: 'reporter',
            category: 'sensing',
            spec: 'timer'
        },
        reportAttributeOf: {
            type: 'reporter',
            category: 'sensing',
            spec: '%att of %spr',
            defaults: [['costume #']]
        },
        reportURL: {
            type: 'reporter',
            category: 'sensing',
            spec: 'http:// %s',
            defaults: ['snap.berkeley.edu']
        },
        reportIsFastTracking: {
            type: 'predicate',
            category: 'sensing',
            spec: 'turbo mode?'
        },
        doSetFastTracking: {
            type: 'command',
            category: 'sensing',
            spec: 'set turbo mode to %b'
        },

        // Operators
        reifyScript: {
            type: 'ring',
            category: 'other',
            spec: '%rc %ringparms'
        },
        reifyReporter: {
            type: 'ring',
            category: 'other',
            spec: '%rr %ringparms'
        },
        reifyPredicate: {
            type: 'ring',
            category: 'other',
            spec: '%rp %ringparms'
        },
        reportSum: {
            type: 'reporter',
            category: 'operators',
            spec: '%n + %n'
        },
        reportDifference: {
            type: 'reporter',
            category: 'operators',
            spec: '%n \u2212 %n'
        },
        reportProduct: {
            type: 'reporter',
            category: 'operators',
            spec: '%n \u00D7 %n'
        },
        reportQuotient: {
            type: 'reporter',
            category: 'operators',
            spec: '%n / %n' // '%n \u00F7 %n'
        },
        reportRound: {
            type: 'reporter',
            category: 'operators',
            spec: 'round %n'
        },
        reportMonadic: {
            type: 'reporter',
            category: 'operators',
            spec: '%fun of %n',
            defaults: [null, 10]
        },
        reportModulus: {
            type: 'reporter',
            category: 'operators',
            spec: '%n mod %n'
        },
        reportRandom: {
            type: 'reporter',
            category: 'operators',
            spec: 'pick random %n to %n',
            defaults: [1, 10]
        },
        reportLessThan: {
            type: 'predicate',
            category: 'operators',
            spec: '%s < %s'
        },
        reportEquals: {
            type: 'predicate',
            category: 'operators',
            spec: '%s = %s'
        },
        reportGreaterThan: {
            type: 'predicate',
            category: 'operators',
            spec: '%s > %s'
        },
        reportAnd: {
            type: 'predicate',
            category: 'operators',
            spec: '%b and %b'
        },
        reportOr: {
            type: 'predicate',
            category: 'operators',
            spec: '%b or %b'
        },
        reportNot: {
            type: 'predicate',
            category: 'operators',
            spec: 'not %b'
        },
        reportTrue: {
            type: 'predicate',
            category: 'operators',
            spec: 'true'
        },
        reportFalse: {
            type: 'predicate',
            category: 'operators',
            spec: 'false'
        },
        reportJoinWords: {
            type: 'reporter',
            category: 'operators',
            spec: 'join %words',
            defaults: [localize('hello') + ' ', localize('world')]
        },
        reportLetter: {
            type: 'reporter',
            category: 'operators',
            spec: 'letter %n of %s',
            defaults: [1, localize('world')]
        },
        reportStringSize: {
            type: 'reporter',
            category: 'operators',
            spec: 'length of %s',
            defaults: [localize('world')]
        },
        reportUnicode: {
            type: 'reporter',
            category: 'operators',
            spec: 'unicode of %s',
            defaults: ['a']
        },
        reportUnicodeAsLetter: {
            type: 'reporter',
            category: 'operators',
            spec: 'unicode %n as letter',
            defaults: [65]
        },
        reportIsA: {
            type: 'predicate',
            category: 'operators',
            spec: 'is %s a %typ ?',
            defaults: [5]
        },
        reportIsIdentical: {
            type: 'predicate',
            category: 'operators',
            spec: 'is %s identical to %s ?'
        },
        reportTypeOf: { // only in dev mode for debugging
            type: 'reporter',
            category: 'operators',
            spec: 'type of %s',
            defaults: [5]
        },
    /*
        reportScript: {
            type: 'reporter',
            category: 'operators',
            spec: 'the script %parms %c'
        },
        reify: {
            type: 'reporter',
            category: 'operators',
            spec: 'the %f block %parms'
        },
    */

        // Variables
        doSetVar: {
            type: 'command',
            category: 'variables',
            spec: 'set %var to %s',
            defaults: [null, 0]
        },
        doChangeVar: {
            type: 'command',
            category: 'variables',
            spec: 'change %var by %n',
            defaults: [null, 1]
        },
        doShowVar: {
            type: 'command',
            category: 'variables',
            spec: 'show variable %var'
        },
        doHideVar: {
            type: 'command',
            category: 'variables',
            spec: 'hide variable %var'
        },
        doDeclareVariables: {
            type: 'command',
            category: 'other',
            spec: 'script variables %scriptVars'
        },

        // Lists
        reportNewList: {
            type: 'reporter',
            category: 'lists',
            spec: 'list %exp'
        },
        reportCONS: {
            type: 'reporter',
            category: 'lists',
            spec: '%s in front of %l'
        },
        reportListItem: {
            type: 'reporter',
            category: 'lists',
            spec: 'item %idx of %l',
            defaults: [1]
        },
        reportCDR: {
            type: 'reporter',
            category: 'lists',
            spec: 'all but first of %l'
        },
        reportListLength: {
            type: 'reporter',
            category: 'lists',
            spec: 'length of %l'
        },
        reportListContainsItem: {
            type: 'predicate',
            category: 'lists',
            spec: '%l contains %s',
            defaults: [null, localize('thing')]
        },
        doAddToList: {
            type: 'command',
            category: 'lists',
            spec: 'add %s to %l',
            defaults: [localize('thing')]
        },
        doDeleteFromList: {
            type: 'command',
            category: 'lists',
            spec: 'delete %ida of %l',
            defaults: [1]
        },
        doInsertInList: {
            type: 'command',
            category: 'lists',
            spec: 'insert %s at %idx of %l',
            defaults: [localize('thing'), 1]
        },
        doReplaceInList: {
            type: 'command',
            category: 'lists',
            spec: 'replace item %idx of %l with %s',
            defaults: [1, null, localize('thing')]
        }
    };
};

SpriteMorph.prototype.initBlocks();

SpriteMorph.prototype.blockAlternatives = {
    // motion:
    turn: ['turnLeft'],
    turnLeft: ['turn'],
    changeXPosition: ['changeYPosition', 'setXPosition', 'setYPosition'],
    setXPosition: ['setYPosition', 'changeXPosition', 'changeYPosition'],
    changeYPosition: ['changeXPosition', 'setYPosition', 'setXPosition'],
    setYPosition: ['setXPosition', 'changeYPosition', 'changeXPosition'],
    xPosition: ['yPosition'],
    yPosition: ['xPosition'],

    // looks:
    doSayFor: ['doThinkFor'],
    doThinkFor: ['doSayFor'],
    bubble: ['doThink'],
    doThink: ['bubble'],
    show: ['hide'],
    hide: ['show'],
    changeEffect: ['setEffect'],
    setEffect: ['changeEffect'],
    changeScale: ['setScale'],
    setScale: ['changeScale'],

    // sound:
    playSound: ['doPlaySoundUntilDone'],
    doPlaySoundUntilDone: ['playSound'],
    doChangeTempo: ['doSetTempo'],
    doSetTempo: ['doChangeTempo'],

    // pen:
    clear: ['down', 'up', 'doStamp'],
    down: ['up', 'clear', 'doStamp'],
    up: ['down', 'clear', 'doStamp'],
    doStamp: ['clear', 'down', 'up'],
    changeHue: ['setHue', 'changeBrightness', 'setBrightness'],
    setHue: ['changeHue', 'changeBrightness', 'setBrightness'],
    getHue: ['getBrightness'],
    changeBrightness: ['setBrightness', 'setHue', 'changeHue'],
    setBrightness: ['changeBrightness', 'setHue', 'changeHue'],
    getBrightness: ['getHue'],
    changeSize: ['setSize'],
    setSize: ['changeSize'],

    // control:
    receiveGo: ['receiveClick'],
    receiveClick: ['receiveGo'],
    doBroadcast: ['doBroadcastAndWait'],
    doBroadcastAndWait: ['doBroadcast'],
    doStopBlock: ['doStop', 'doStopAll'],
    doStop: ['doStopBlock', 'doStopAll'],
    doStopAll: ['doStopBlock', 'doStop'],

    // sensing:
    reportLastAnswer: ['reportTimer'],
    reportTimer: ['reportLastAnswer'],
    reportMouseX: ['reportMouseY'],
    reportMouseY: ['reportMouseX'],

    // operators:
    reportSum: ['reportDifference', 'reportProduct', 'reportQuotient'],
    reportDifference: ['reportSum', 'reportProduct', 'reportQuotient'],
    reportProduct: ['reportDifference', 'reportSum', 'reportQuotient'],
    reportQuotient: ['reportDifference', 'reportProduct', 'reportSum'],
    reportLessThan: ['reportEquals', 'reportGreaterThan'],
    reportEquals: ['reportLessThan', 'reportGreaterThan'],
    reportGreaterThan: ['reportEquals', 'reportLessThan'],
    reportAnd: ['reportOr'],
    reportOr: ['reportAnd'],
    reportTrue: ['reportFalse'],
    reportFalse: ['reportTrue'],

    // variables
    doSetVar: ['doChangeVar'],
    doChangeVar: ['doSetVar'],
    doShowVar: ['doHideVar'],
    doHideVar: ['doShowVar']
};
