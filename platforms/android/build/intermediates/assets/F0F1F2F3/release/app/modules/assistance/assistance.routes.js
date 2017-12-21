"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var pending_component_1 = require("./pending/pending.component");
var assist_component_1 = require("./assist/assist.component");
exports.AssistanceRoutes = [
    {
        path: '',
        component: pending_component_1.PendingComponent
    },
    {
        path: 'pending',
        component: pending_component_1.PendingComponent
    },
    {
        path: 'assist/:assistid',
        component: assist_component_1.AssistComponent
    }
];