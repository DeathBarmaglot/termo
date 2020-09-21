/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};
var opts = {
    'gAudioPreloadPreference': 'auto',

    'gVideoPreloadPreference': 'auto'
};
var resources = [
];
var symbols = {
"stage": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
            {
                id: 'r1',
                type: 'image',
                rect: ['1px', '0px','298px','180px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"r1.png",'0px','0px']
            },
            {
                id: 'k1',
                type: 'image',
                rect: ['11px', '102px','276px','72px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"k1.png",'0px','0px']
            },
            {
                id: 'p1',
                type: 'image',
                rect: ['24px', '56px','253px','48px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"p1.png",'0px','0px']
            },
            {
                id: 'l1',
                type: 'image',
                rect: ['14px', '10px','272px','66px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"l1.png",'0px','0px']
            },
            {
                id: 'r2',
                type: 'image',
                rect: ['2px', '0px','297px','180px','auto', 'auto'],
                clip: ['rect(0px 297px 180px -3.599609375px)'],
                fill: ["rgba(0,0,0,0)",im+"r2.png",'0px','0px']
            },
            {
                id: 'l2',
                type: 'image',
                rect: ['19px', '6px','262px','51px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"l2.png",'0px','0px']
            },
            {
                id: 'p2',
                type: 'image',
                rect: ['15px', '56px','270px','51px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"p2.png",'0px','0px']
            },
            {
                id: 'k2',
                type: 'image',
                rect: ['1px', '101px','294px','73px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"k2.png",'0px','0px'],
                transform: [[],[],[],['0.9','0.9']]
            }],
            symbolInstances: [

            ]
        },
    states: {
        "Base State": {
            "${_p1}": [
                ["style", "top", '56px'],
                ["style", "left", '24px'],
                ["style", "height", '48px'],
                ["style", "opacity", '1'],
                ["style", "clip", [0,-5,48,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "width", '253px']
            ],
            "${_k2}": [
                ["style", "top", '101px'],
                ["transform", "scaleY", '0.9'],
                ["style", "height", '73px'],
                ["transform", "scaleX", '0.9'],
                ["style", "opacity", '0'],
                ["style", "left", '1px'],
                ["style", "width", '294px']
            ],
            "${_l2}": [
                ["style", "top", '6px'],
                ["style", "height", '51px'],
                ["style", "opacity", '0'],
                ["style", "left", '19px'],
                ["style", "width", '262px']
            ],
            "${_r2}": [
                ["style", "top", '0px'],
                ["style", "left", '2px'],
                ["style", "height", '180px'],
                ["style", "opacity", '0'],
                ["style", "clip", [0,297,180,-3.599609375], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "width", '297px']
            ],
            "${_k1}": [
                ["style", "top", '104px'],
                ["style", "height", '72px'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '11px'],
                ["style", "width", '276px']
            ],
            "${_r1}": [
                ["style", "top", '0px'],
                ["style", "height", '180px'],
                ["style", "opacity", '1'],
                ["style", "left", '1px'],
                ["style", "width", '298px']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "width", '300px'],
                ["style", "height", '180px'],
                ["style", "overflow", 'hidden']
            ],
            "${_p2}": [
                ["style", "top", '56px'],
                ["style", "left", '15px'],
                ["style", "height", '51px'],
                ["style", "opacity", '0'],
                ["style", "clip", [0,-5,48,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "width", '270px']
            ],
            "${_l1}": [
                ["style", "top", '6px'],
                ["style", "height", '66px'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '14px'],
                ["style", "width", '272px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 16000,
            autoPlay: true,
            timeline: [
                { id: "eid37", tween: [ "style", "${_p1}", "opacity", '0', { fromValue: '1'}], position: 7750, duration: 250 },
                { id: "eid52", tween: [ "style", "${_l2}", "opacity", '1', { fromValue: '0'}], position: 8750, duration: 500 },
                { id: "eid65", tween: [ "style", "${_l2}", "opacity", '0', { fromValue: '1'}], position: 15250, duration: 500 },
                { id: "eid22", tween: [ "style", "${_l1}", "opacity", '1', { fromValue: '0.000000'}], position: 0, duration: 500 },
                { id: "eid38", tween: [ "style", "${_l1}", "opacity", '0', { fromValue: '1'}], position: 7750, duration: 250 },
                { id: "eid43", tween: [ "style", "${_r1}", "left", '317px', { fromValue: '1px'}], position: 8000, duration: 250 },
                { id: "eid39", tween: [ "style", "${_r1}", "opacity", '0', { fromValue: '1'}], position: 7750, duration: 250 },
                { id: "eid55", tween: [ "style", "${_p2}", "clip", [0,45.7998046875,48,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,-5,48,0]}], position: 9750, duration: 500 },
                { id: "eid56", tween: [ "style", "${_p2}", "clip", [0,89.80078125,48,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,45.7998046875,48,0]}], position: 10750, duration: 500 },
                { id: "eid57", tween: [ "style", "${_p2}", "clip", [0,135.400390625,48,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,89.80078125,48,0]}], position: 11750, duration: 500 },
                { id: "eid58", tween: [ "style", "${_p2}", "clip", [0,179.80078125,48,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,135.400390625,48,0]}], position: 12750, duration: 500 },
                { id: "eid59", tween: [ "style", "${_p2}", "clip", [0,226.6005859375,48,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,179.80078125,48,0]}], position: 13750, duration: 500 },
                { id: "eid60", tween: [ "style", "${_p2}", "clip", [0,268.6005859375,48,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,226.6005859375,48,0]}], position: 14500, duration: 500 },
                { id: "eid41", tween: [ "style", "${_p1}", "left", '340px', { fromValue: '24px'}], position: 8000, duration: 250 },
                { id: "eid36", tween: [ "style", "${_p1}", "clip", [0,41,48,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,-5,48,0]}], position: 2000, duration: 500 },
                { id: "eid30", tween: [ "style", "${_p1}", "clip", [0,85,48,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,41,48,0]}], position: 3000, duration: 500 },
                { id: "eid31", tween: [ "style", "${_p1}", "clip", [0,124.6005859375,48,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,85,48,0]}], position: 4000, duration: 500 },
                { id: "eid32", tween: [ "style", "${_p1}", "clip", [0,167.80078125,48,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,124.6005859375,48,0]}], position: 5000, duration: 500 },
                { id: "eid33", tween: [ "style", "${_p1}", "clip", [0,209.80078125,48,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,167.80078125,48,0]}], position: 6000, duration: 500 },
                { id: "eid34", tween: [ "style", "${_p1}", "clip", [0,255.400390625,48,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,209.80078125,48,0]}], position: 6750, duration: 500 },
                { id: "eid46", tween: [ "style", "${_r2}", "opacity", '1', { fromValue: '0'}], position: 8250, duration: 500 },
                { id: "eid62", tween: [ "style", "${_r2}", "opacity", '0', { fromValue: '1'}], position: 15250, duration: 500 },
                { id: "eid19", tween: [ "style", "${_k1}", "opacity", '1', { fromValue: '0.000000'}], position: 1250, duration: 500 },
                { id: "eid40", tween: [ "style", "${_k1}", "opacity", '0', { fromValue: '1'}], position: 7750, duration: 250 },
                { id: "eid48", tween: [ "style", "${_p2}", "opacity", '1', { fromValue: '0'}], position: 9750, duration: 500 },
                { id: "eid63", tween: [ "style", "${_p2}", "opacity", '0', { fromValue: '1'}], position: 15250, duration: 500 },
                { id: "eid50", tween: [ "style", "${_k2}", "opacity", '1', { fromValue: '0'}], position: 9250, duration: 500 },
                { id: "eid64", tween: [ "style", "${_k2}", "opacity", '0', { fromValue: '1'}], position: 15250, duration: 500 },
                { id: "eid44", tween: [ "style", "${_k1}", "left", '327px', { fromValue: '11px'}], position: 8000, duration: 250 },
                { id: "eid42", tween: [ "style", "${_l1}", "left", '330px', { fromValue: '14px'}], position: 8000, duration: 250 }            ]
        }
    }
}
};


Edge.registerCompositionDefn(compId, symbols, fonts, resources, opts);

/**
 * Adobe Edge DOM Ready Event Handler
 */
$(window).ready(function() {
     Edge.launchComposition(compId);
});
})(jQuery, AdobeEdge, "EDGE-4766420");
