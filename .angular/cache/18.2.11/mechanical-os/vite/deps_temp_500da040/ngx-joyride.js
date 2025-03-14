import {
  Router,
  RouterModule
} from "./chunk-QKFLVWMO.js";
import "./chunk-M5IQYEUJ.js";
import "./chunk-YV7FIGCR.js";
import {
  AsyncPipe,
  CommonModule,
  NgIf,
  NgStyle,
  NgTemplateOutlet,
  isPlatformBrowser
} from "./chunk-M3QBU4KS.js";
import {
  ApplicationRef,
  Component,
  ComponentFactoryResolver$1,
  Directive,
  EventEmitter,
  HostListener,
  Inject,
  Injectable,
  Injector,
  Input,
  NgModule,
  Output,
  PLATFORM_ID,
  Renderer2,
  RendererFactory2,
  ViewChild,
  ViewContainerRef,
  ViewEncapsulation$1,
  setClassMetadata,
  ɵɵNgOnChangesFeature,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainer,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵinject,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵpureFunction3,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵresetView,
  ɵɵresolveWindow,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵviewQuery
} from "./chunk-XZCMO2WH.js";
import "./chunk-4N4GOYJH.js";
import "./chunk-5OPE3T2R.js";
import {
  Observable,
  ReplaySubject,
  Subject,
  finalize,
  of
} from "./chunk-FHTVLBLO.js";
import {
  __async
} from "./chunk-3OV72XIM.js";

// node_modules/ngx-joyride/fesm2020/ngx-joyride.mjs
var _c0 = ["*"];
var _c1 = (a0, a1, a2) => ({
  "background-color": a0,
  "color": a1,
  "border-color": a2
});
var _c2 = ["stepHolder"];
var _c3 = ["stepContainer"];
function JoyrideStepComponent_joyride_arrow_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "joyride-arrow", 21);
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵstyleProp("top", ctx_r1.arrowTopPosition, "px")("left", ctx_r1.arrowLeftPosition, "px");
    ɵɵproperty("position", ctx_r1.arrowPosition);
  }
}
function JoyrideStepComponent_ng_container_11_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function JoyrideStepComponent_ng_template_12_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtext(0);
    ɵɵpipe(1, "async");
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(1, 1, ctx_r1.text), " ");
  }
}
function JoyrideStepComponent_div_15_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function JoyrideStepComponent_div_15_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 23);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵtextInterpolate(ctx_r1.counter);
  }
}
function JoyrideStepComponent_div_15_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 22);
    ɵɵtemplate(1, JoyrideStepComponent_div_15_ng_container_1_Template, 1, 0, "ng-container", 15)(2, JoyrideStepComponent_div_15_ng_template_2_Template, 2, 1, "ng-template", null, 4, ɵɵtemplateRefExtractor);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const defaultCounter_r3 = ɵɵreference(3);
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r1.customCounter ? ctx_r1.customCounter : defaultCounter_r3)("ngTemplateOutletContext", ctx_r1.counterData);
  }
}
function JoyrideStepComponent_div_17_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function JoyrideStepComponent_div_17_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "joyride-button", 26);
    ɵɵtext(1);
    ɵɵpipe(2, "async");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵproperty("color", ctx_r1.themeColor);
    ɵɵadvance();
    ɵɵtextInterpolate(ɵɵpipeBind1(2, 2, ctx_r1.prevText));
  }
}
function JoyrideStepComponent_div_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 24);
    ɵɵlistener("click", function JoyrideStepComponent_div_17_Template_div_click_0_listener() {
      ɵɵrestoreView(_r4);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.prev());
    });
    ɵɵtemplate(1, JoyrideStepComponent_div_17_ng_container_1_Template, 1, 0, "ng-container", 25)(2, JoyrideStepComponent_div_17_ng_template_2_Template, 3, 4, "ng-template", null, 5, ɵɵtemplateRefExtractor);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const defaultPrevButton_r5 = ɵɵreference(3);
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r1.customPrevButton ? ctx_r1.customPrevButton : defaultPrevButton_r5);
  }
}
function JoyrideStepComponent_div_18_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function JoyrideStepComponent_div_18_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "joyride-button", 28);
    ɵɵtext(1);
    ɵɵpipe(2, "async");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵproperty("color", ctx_r1.themeColor);
    ɵɵadvance();
    ɵɵtextInterpolate(ɵɵpipeBind1(2, 2, ctx_r1.nextText));
  }
}
function JoyrideStepComponent_div_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 27);
    ɵɵlistener("click", function JoyrideStepComponent_div_18_Template_div_click_0_listener() {
      ɵɵrestoreView(_r6);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.next());
    });
    ɵɵtemplate(1, JoyrideStepComponent_div_18_ng_container_1_Template, 1, 0, "ng-container", 25)(2, JoyrideStepComponent_div_18_ng_template_2_Template, 3, 4, "ng-template", null, 6, ɵɵtemplateRefExtractor);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const defaulNextButton_r7 = ɵɵreference(3);
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r1.customNextButton ? ctx_r1.customNextButton : defaulNextButton_r7);
  }
}
function JoyrideStepComponent_ng_template_19_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function JoyrideStepComponent_ng_template_19_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "joyride-button", 30);
    ɵɵtext(1);
    ɵɵpipe(2, "async");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵproperty("color", ctx_r1.themeColor);
    ɵɵadvance();
    ɵɵtextInterpolate(ɵɵpipeBind1(2, 2, ctx_r1.doneText));
  }
}
function JoyrideStepComponent_ng_template_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 29);
    ɵɵlistener("click", function JoyrideStepComponent_ng_template_19_Template_div_click_0_listener() {
      ɵɵrestoreView(_r8);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.close());
    });
    ɵɵtemplate(1, JoyrideStepComponent_ng_template_19_ng_container_1_Template, 1, 0, "ng-container", 25)(2, JoyrideStepComponent_ng_template_19_ng_template_2_Template, 3, 4, "ng-template", null, 7, ɵɵtemplateRefExtractor);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const defaultDoneButton_r9 = ɵɵreference(3);
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r1.customDoneButton ? ctx_r1.customDoneButton : defaultDoneButton_r9);
  }
}
var JoyrideStep = class {
  constructor() {
    this.title = new ReplaySubject();
    this.text = new ReplaySubject();
  }
};
var JoyrideError = class _JoyrideError extends Error {
  constructor(message) {
    super(message);
    Object.setPrototypeOf(this, _JoyrideError.prototype);
  }
};
var JoyrideStepDoesNotExist = class _JoyrideStepDoesNotExist extends Error {
  constructor(message) {
    super(message);
    Object.setPrototypeOf(this, _JoyrideStepDoesNotExist.prototype);
  }
};
var JoyrideStepOutOfRange = class _JoyrideStepOutOfRange extends Error {
  constructor(message) {
    super(message);
    Object.setPrototypeOf(this, _JoyrideStepOutOfRange.prototype);
  }
};
var DEFAULT_THEME_COLOR = "#3b5560";
var STEP_DEFAULT_POSITION = "bottom";
var DEFAULT_TIMEOUT_BETWEEN_STEPS = 1;
var ObservableCustomTexts = class {
};
var DEFAULT_TEXTS = {
  prev: of("prev"),
  next: of("next"),
  done: of("done"),
  close: of(null)
};
var JoyrideOptionsService = class {
  constructor() {
    this.themeColor = DEFAULT_THEME_COLOR;
    this.stepDefaultPosition = STEP_DEFAULT_POSITION;
    this.logsEnabled = false;
    this.showCounter = true;
    this.showPrevButton = true;
    this.stepsOrder = [];
  }
  setOptions(options) {
    this.stepsOrder = options.steps;
    this.stepDefaultPosition = options.stepDefaultPosition ? options.stepDefaultPosition : this.stepDefaultPosition;
    this.logsEnabled = typeof options.logsEnabled !== "undefined" ? options.logsEnabled : this.logsEnabled;
    this.showCounter = typeof options.showCounter !== "undefined" ? options.showCounter : this.showCounter;
    this.showPrevButton = typeof options.showPrevButton !== "undefined" ? options.showPrevButton : this.showPrevButton;
    this.themeColor = options.themeColor ? options.themeColor : this.themeColor;
    this.firstStep = options.startWith;
    this.waitingTime = typeof options.waitingTime !== "undefined" ? options.waitingTime : DEFAULT_TIMEOUT_BETWEEN_STEPS;
    typeof options.customTexts !== "undefined" ? this.setCustomText(options.customTexts) : this.setCustomText(DEFAULT_TEXTS);
  }
  getBackdropColor() {
    return this.hexToRgb(this.themeColor);
  }
  getThemeColor() {
    return this.themeColor;
  }
  getStepDefaultPosition() {
    return this.stepDefaultPosition;
  }
  getStepsOrder() {
    return this.stepsOrder;
  }
  getFirstStep() {
    return this.firstStep;
  }
  getWaitingTime() {
    return this.waitingTime;
  }
  areLogsEnabled() {
    return this.logsEnabled;
  }
  isCounterVisible() {
    return this.showCounter;
  }
  isPrevButtonVisible() {
    return this.showPrevButton;
  }
  getCustomTexts() {
    return this.customTexts;
  }
  setCustomText(texts) {
    let prev;
    let next;
    let done;
    let close;
    prev = texts.prev ? texts.prev : DEFAULT_TEXTS.prev;
    next = texts.next ? texts.next : DEFAULT_TEXTS.next;
    done = texts.done ? texts.done : DEFAULT_TEXTS.done;
    close = texts.close ? texts.close : DEFAULT_TEXTS.close;
    this.customTexts = {
      prev: this.toObservable(prev),
      next: this.toObservable(next),
      done: this.toObservable(done),
      close: this.toObservable(close)
    };
  }
  toObservable(value) {
    return value instanceof Observable ? value : of(value);
  }
  hexToRgb(hex) {
    const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
    hex = hex.replace(shorthandRegex, (m, r, g, b) => {
      return r + r + g + g + b + b;
    });
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? `${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(result[3], 16)}` : null;
  }
};
JoyrideOptionsService.ɵfac = function JoyrideOptionsService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || JoyrideOptionsService)();
};
JoyrideOptionsService.ɵprov = ɵɵdefineInjectable({
  token: JoyrideOptionsService,
  factory: JoyrideOptionsService.ɵfac
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(JoyrideOptionsService, [{
    type: Injectable
  }], null, null);
})();
var JOYRIDE = "ngx-joyride:::";
var LoggerService = class {
  constructor(optionService) {
    this.optionService = optionService;
  }
  debug(message, data = "") {
    if (this.optionService.areLogsEnabled()) {
      console.debug(JOYRIDE + message, data);
    }
  }
  info(message, data = "") {
    if (this.optionService.areLogsEnabled()) {
      console.info(JOYRIDE + message, data);
    }
  }
  warn(message, data = "") {
    if (this.optionService.areLogsEnabled()) {
      console.warn(JOYRIDE + message, data);
    }
  }
  error(message, data = "") {
    if (this.optionService.areLogsEnabled()) {
      console.error(JOYRIDE + message, data);
    }
  }
};
LoggerService.ɵfac = function LoggerService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || LoggerService)(ɵɵinject(JoyrideOptionsService));
};
LoggerService.ɵprov = ɵɵdefineInjectable({
  token: LoggerService,
  factory: LoggerService.ɵfac
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LoggerService, [{
    type: Injectable
  }], function() {
    return [{
      type: JoyrideOptionsService
    }];
  }, null);
})();
var ROUTE_SEPARATOR = "@";
var StepActionType;
(function(StepActionType2) {
  StepActionType2["NEXT"] = "NEXT";
  StepActionType2["PREV"] = "PREV";
})(StepActionType || (StepActionType = {}));
var JoyrideStepsContainerService = class {
  constructor(stepOptions, logger) {
    this.stepOptions = stepOptions;
    this.logger = logger;
    this.tempSteps = [];
    this.currentStepIndex = -2;
    this.stepHasBeenModified = new Subject();
  }
  getFirstStepIndex() {
    const firstStep = this.stepOptions.getFirstStep();
    const stepIds = this.stepOptions.getStepsOrder();
    let index = stepIds.indexOf(firstStep);
    if (index < 0) {
      index = 0;
      if (firstStep !== void 0) this.logger.warn(`The step ${firstStep} does not exist. Check in your step list if it's present.`);
    }
    return index;
  }
  init() {
    this.logger.info("Initializing the steps array.");
    this.steps = [];
    this.currentStepIndex = this.getFirstStepIndex() - 1;
    let stepIds = this.stepOptions.getStepsOrder();
    stepIds.forEach((stepId) => this.steps.push({
      id: stepId,
      step: null
    }));
  }
  addStep(stepToAdd) {
    let stepExist = this.tempSteps.filter((step) => step.name === stepToAdd.name).length > 0;
    if (!stepExist) {
      this.logger.info(`Adding step ${stepToAdd.name} to the steps list.`);
      this.tempSteps.push(stepToAdd);
    } else {
      let stepIndexToReplace = this.tempSteps.findIndex((step) => step.name === stepToAdd.name);
      this.tempSteps[stepIndexToReplace] = stepToAdd;
    }
  }
  get(action) {
    if (action === StepActionType.NEXT) this.currentStepIndex++;
    else this.currentStepIndex--;
    if (this.currentStepIndex < 0 || this.currentStepIndex >= this.steps.length) throw new JoyrideStepOutOfRange("The first or last step of the tour cannot be found!");
    const stepName = this.getStepName(this.steps[this.currentStepIndex].id);
    const index = this.tempSteps.findIndex((step) => step.name === stepName);
    let stepFound = this.tempSteps[index];
    this.steps[this.currentStepIndex].step = stepFound;
    if (stepFound == null) {
      this.logger.warn(`Step ${this.steps[this.currentStepIndex].id} not found in the DOM. Check if it's hidden by *ngIf directive.`);
    }
    return stepFound;
  }
  getStepRoute(action) {
    let stepID;
    if (action === StepActionType.NEXT) {
      stepID = this.steps[this.currentStepIndex + 1] ? this.steps[this.currentStepIndex + 1].id : null;
    } else {
      stepID = this.steps[this.currentStepIndex - 1] ? this.steps[this.currentStepIndex - 1].id : null;
    }
    let stepRoute = stepID && stepID.includes(ROUTE_SEPARATOR) ? stepID.split(ROUTE_SEPARATOR)[1] : "";
    return stepRoute;
  }
  updatePosition(stepName, position) {
    let index = this.getStepIndex(stepName);
    if (this.steps[index].step) {
      this.steps[index].step.position = position;
      this.stepHasBeenModified.next(this.steps[index].step);
    } else {
      this.logger.warn(`Trying to modify the position of ${stepName} to ${position}. Step not found!Is this step located in a different route?`);
    }
  }
  getStepNumber(stepName) {
    return this.getStepIndex(stepName) + 1;
  }
  getStepsCount() {
    let stepsOrder = this.stepOptions.getStepsOrder();
    return stepsOrder.length;
  }
  getStepIndex(stepName) {
    const index = this.steps.map((step) => step.id.includes(ROUTE_SEPARATOR) ? step.id.split(ROUTE_SEPARATOR)[0] : step.id).findIndex((name) => stepName === name);
    if (index === -1) throw new JoyrideError(`The step with name: ${stepName} does not exist in the step list.`);
    return index;
  }
  getStepName(stepID) {
    let stepName = stepID && stepID.includes(ROUTE_SEPARATOR) ? stepID.split(ROUTE_SEPARATOR)[0] : stepID;
    return stepName;
  }
};
JoyrideStepsContainerService.ɵfac = function JoyrideStepsContainerService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || JoyrideStepsContainerService)(ɵɵinject(JoyrideOptionsService), ɵɵinject(LoggerService));
};
JoyrideStepsContainerService.ɵprov = ɵɵdefineInjectable({
  token: JoyrideStepsContainerService,
  factory: JoyrideStepsContainerService.ɵfac
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(JoyrideStepsContainerService, [{
    type: Injectable
  }], function() {
    return [{
      type: JoyrideOptionsService
    }, {
      type: LoggerService
    }];
  }, null);
})();
var DomRefService = class {
  constructor(platformId) {
    this.platformId = platformId;
    this.fakeDocument = {
      body: {},
      documentElement: {}
    };
    this.fakeWindow = {
      document: this.fakeDocument,
      navigator: {}
    };
  }
  getNativeWindow() {
    if (isPlatformBrowser(this.platformId)) return window;
    else return this.fakeWindow;
  }
  getNativeDocument() {
    if (isPlatformBrowser(this.platformId)) return document;
    else return this.fakeDocument;
  }
};
DomRefService.ɵfac = function DomRefService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || DomRefService)(ɵɵinject(PLATFORM_ID));
};
DomRefService.ɵprov = ɵɵdefineInjectable({
  token: DomRefService,
  factory: DomRefService.ɵfac
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DomRefService, [{
    type: Injectable
  }], function() {
    return [{
      type: Object,
      decorators: [{
        type: Inject,
        args: [PLATFORM_ID]
      }]
    }];
  }, null);
})();
var TemplatesService = class {
  setPrevButton(template) {
    this._prevButton = template;
  }
  getPrevButton() {
    return this._prevButton;
  }
  setNextButton(template) {
    this._nextButton = template;
  }
  getNextButton() {
    return this._nextButton;
  }
  setDoneButton(template) {
    this._doneButton = template;
  }
  getDoneButton() {
    return this._doneButton;
  }
  setCounter(template) {
    this._counter = template;
  }
  getCounter() {
    return this._counter;
  }
};
TemplatesService.ɵfac = function TemplatesService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || TemplatesService)();
};
TemplatesService.ɵprov = ɵɵdefineInjectable({
  token: TemplatesService,
  factory: TemplatesService.ɵfac
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TemplatesService, [{
    type: Injectable
  }], null, null);
})();
var NO_POSITION = "NO_POSITION";
var JoyrideDirective = class {
  constructor(joyrideStepsContainer, viewContainerRef, domService, router, templateService, platformId) {
    this.joyrideStepsContainer = joyrideStepsContainer;
    this.viewContainerRef = viewContainerRef;
    this.domService = domService;
    this.router = router;
    this.templateService = templateService;
    this.platformId = platformId;
    this.stepPosition = NO_POSITION;
    this.prev = new EventEmitter();
    this.next = new EventEmitter();
    this.done = new EventEmitter();
    this.subscriptions = [];
    this.windowRef = this.domService.getNativeWindow();
    this.step = new JoyrideStep();
  }
  ngAfterViewInit() {
    if (!isPlatformBrowser(this.platformId)) return;
    if (this.prevTemplate) this.templateService.setPrevButton(this.prevTemplate);
    if (this.nextTemplate) this.templateService.setNextButton(this.nextTemplate);
    if (this.doneTemplate) this.templateService.setDoneButton(this.doneTemplate);
    if (this.counterTemplate) this.templateService.setCounter(this.counterTemplate);
    this.step.position = this.stepPosition;
    this.step.targetViewContainer = this.viewContainerRef;
    this.setAsyncFields(this.step);
    this.step.stepContent = this.stepContent;
    this.step.stepContentParams = this.stepContentParams;
    this.step.nextClicked = this.next;
    this.step.prevCliked = this.prev;
    this.step.tourDone = this.done;
    if (!this.name) throw new JoyrideError("All the steps should have the 'joyrideStep' property set with a custom name.");
    this.step.name = this.name;
    this.step.route = this.router.url.substr(0, 1) === "/" ? this.router.url.substr(1) : this.router.url;
    this.step.transformCssStyle = this.windowRef.getComputedStyle(this.viewContainerRef.element.nativeElement).transform;
    this.step.isElementOrAncestorFixed = this.isElementFixed(this.viewContainerRef.element) || this.isAncestorsFixed(this.viewContainerRef.element.nativeElement.parentElement);
    this.joyrideStepsContainer.addStep(this.step);
  }
  ngOnChanges(changes) {
    if (changes["title"] || changes["text"]) {
      this.setAsyncFields(this.step);
    }
  }
  isElementFixed(element) {
    return this.windowRef.getComputedStyle(element.nativeElement).position === "fixed";
  }
  setAsyncFields(step) {
    if (this.title instanceof Observable) {
      this.subscriptions.push(this.title.subscribe((title) => {
        step.title.next(title);
      }));
    } else {
      step.title.next(this.title);
    }
    if (this.text instanceof Observable) {
      this.subscriptions.push(this.text.subscribe((text) => {
        step.text.next(text);
      }));
    } else {
      step.text.next(this.text);
    }
  }
  isAncestorsFixed(nativeElement) {
    if (!nativeElement || !nativeElement.parentElement) return false;
    let isElementFixed = this.windowRef.getComputedStyle(nativeElement.parentElement).position === "fixed";
    if (nativeElement.nodeName === "BODY") {
      return isElementFixed;
    }
    if (isElementFixed) return true;
    else return this.isAncestorsFixed(nativeElement.parentElement);
  }
  ngOnDestroy() {
    this.subscriptions.forEach((sub) => {
      sub.unsubscribe();
    });
  }
};
JoyrideDirective.ɵfac = function JoyrideDirective_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || JoyrideDirective)(ɵɵdirectiveInject(JoyrideStepsContainerService), ɵɵdirectiveInject(ViewContainerRef), ɵɵdirectiveInject(DomRefService), ɵɵdirectiveInject(Router), ɵɵdirectiveInject(TemplatesService), ɵɵdirectiveInject(PLATFORM_ID));
};
JoyrideDirective.ɵdir = ɵɵdefineDirective({
  type: JoyrideDirective,
  selectors: [["joyrideStep"], ["", "joyrideStep", ""]],
  inputs: {
    name: [0, "joyrideStep", "name"],
    nextStep: "nextStep",
    title: "title",
    text: "text",
    stepPosition: "stepPosition",
    stepContent: "stepContent",
    stepContentParams: "stepContentParams",
    prevTemplate: "prevTemplate",
    nextTemplate: "nextTemplate",
    doneTemplate: "doneTemplate",
    counterTemplate: "counterTemplate"
  },
  outputs: {
    prev: "prev",
    next: "next",
    done: "done"
  },
  features: [ɵɵNgOnChangesFeature]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(JoyrideDirective, [{
    type: Directive,
    args: [{
      selector: "joyrideStep, [joyrideStep]"
    }]
  }], function() {
    return [{
      type: JoyrideStepsContainerService
    }, {
      type: ViewContainerRef
    }, {
      type: DomRefService
    }, {
      type: Router
    }, {
      type: TemplatesService
    }, {
      type: Object,
      decorators: [{
        type: Inject,
        args: [PLATFORM_ID]
      }]
    }];
  }, {
    name: [{
      type: Input,
      args: ["joyrideStep"]
    }],
    nextStep: [{
      type: Input
    }],
    title: [{
      type: Input
    }],
    text: [{
      type: Input
    }],
    stepPosition: [{
      type: Input
    }],
    stepContent: [{
      type: Input
    }],
    stepContentParams: [{
      type: Input
    }],
    prevTemplate: [{
      type: Input
    }],
    nextTemplate: [{
      type: Input
    }],
    doneTemplate: [{
      type: Input
    }],
    counterTemplate: [{
      type: Input
    }],
    prev: [{
      type: Output
    }],
    next: [{
      type: Output
    }],
    done: [{
      type: Output
    }]
  });
})();
var JoyrideStepInfo = class {
};
var DocumentService = class {
  constructor(DOMService, platformId) {
    this.DOMService = DOMService;
    if (!isPlatformBrowser(platformId)) {
      return;
    }
    this.setDocumentHeight();
    var doc = DOMService.getNativeDocument();
    if (doc && !doc.elementsFromPoint) {
      doc.elementsFromPoint = this.elementsFromPoint.bind(this);
    }
  }
  getElementFixedTop(elementRef) {
    return elementRef.nativeElement.getBoundingClientRect().top;
  }
  getElementFixedLeft(elementRef) {
    return elementRef.nativeElement.getBoundingClientRect().left;
  }
  getElementAbsoluteTop(elementRef) {
    const scrollOffsets = this.getScrollOffsets();
    return elementRef.nativeElement.getBoundingClientRect().top + scrollOffsets.y;
  }
  getElementAbsoluteLeft(elementRef) {
    const scrollOffsets = this.getScrollOffsets();
    return elementRef.nativeElement.getBoundingClientRect().left + scrollOffsets.x;
  }
  setDocumentHeight() {
    this.documentHeight = this.calculateDocumentHeight();
  }
  getDocumentHeight() {
    return this.documentHeight;
  }
  isParentScrollable(elementRef) {
    return this.getFirstScrollableParent(elementRef.nativeElement) !== this.DOMService.getNativeDocument().body;
  }
  isElementBeyondOthers(elementRef, isElementFixed, keywordToDiscard) {
    const x1 = isElementFixed ? this.getElementFixedLeft(elementRef) : this.getElementAbsoluteLeft(elementRef);
    const y1 = isElementFixed ? this.getElementFixedTop(elementRef) : this.getElementAbsoluteTop(elementRef);
    const x2 = x1 + elementRef.nativeElement.getBoundingClientRect().width - 1;
    const y2 = y1 + elementRef.nativeElement.getBoundingClientRect().height - 1;
    const elements1 = this.DOMService.getNativeDocument().elementsFromPoint(x1, y1);
    const elements2 = this.DOMService.getNativeDocument().elementsFromPoint(x2, y2);
    if (elements1.length === 0 && elements2.length === 0) return 1;
    if (this.getFirstElementWithoutKeyword(elements1, keywordToDiscard) !== elementRef.nativeElement || this.getFirstElementWithoutKeyword(elements2, keywordToDiscard) !== elementRef.nativeElement) {
      return 2;
    }
    return 3;
  }
  scrollIntoView(elementRef, isElementFixed) {
    const firstScrollableParent = this.getFirstScrollableParent(elementRef.nativeElement);
    const top = isElementFixed ? this.getElementFixedTop(elementRef) : this.getElementAbsoluteTop(elementRef);
    if (firstScrollableParent !== this.DOMService.getNativeDocument().body) {
      if (firstScrollableParent.scrollTo) {
        firstScrollableParent.scrollTo(0, top - 150);
      } else {
        firstScrollableParent.scrollTop = top - 150;
      }
    } else {
      this.DOMService.getNativeWindow().scrollTo(0, top - 150);
    }
  }
  scrollToTheTop(elementRef) {
    const firstScrollableParent = this.getFirstScrollableParent(elementRef.nativeElement);
    if (firstScrollableParent !== this.DOMService.getNativeDocument().body) {
      if (firstScrollableParent.scrollTo) {
        firstScrollableParent.scrollTo(0, 0);
      } else {
        firstScrollableParent.scrollTop = 0;
      }
    } else {
      this.DOMService.getNativeWindow().scrollTo(0, 0);
    }
  }
  scrollToTheBottom(elementRef) {
    const firstScrollableParent = this.getFirstScrollableParent(elementRef.nativeElement);
    if (firstScrollableParent !== this.DOMService.getNativeDocument().body) {
      if (firstScrollableParent.scrollTo) {
        firstScrollableParent.scrollTo(0, this.DOMService.getNativeDocument().body.scrollHeight);
      } else {
        firstScrollableParent.scrollTop = firstScrollableParent.scrollHeight - firstScrollableParent.clientHeight;
      }
    } else {
      this.DOMService.getNativeWindow().scrollTo(0, this.DOMService.getNativeDocument().body.scrollHeight);
    }
  }
  getFirstScrollableParent(node) {
    const regex = /(auto|scroll|overlay)/;
    const style = (node2, prop) => this.DOMService.getNativeWindow().getComputedStyle(node2, null).getPropertyValue(prop);
    const scroll = (node2) => regex.test(style(node2, "overflow") + style(node2, "overflow-y") + style(node2, "overflow-x"));
    const scrollparent = (node2) => {
      return !node2 || node2 === this.DOMService.getNativeDocument().body ? this.DOMService.getNativeDocument().body : scroll(node2) ? node2 : scrollparent(node2.parentNode);
    };
    return scrollparent(node);
  }
  calculateDocumentHeight() {
    const documentRef = this.DOMService.getNativeDocument();
    return Math.max(documentRef.body.scrollHeight, documentRef.documentElement.scrollHeight, documentRef.body.offsetHeight, documentRef.documentElement.offsetHeight, documentRef.body.clientHeight, documentRef.documentElement.clientHeight);
  }
  getScrollOffsets() {
    const winReference = this.DOMService.getNativeWindow();
    const docReference = this.DOMService.getNativeDocument();
    if (winReference.pageXOffset != null) return {
      x: winReference.pageXOffset,
      y: winReference.pageYOffset
    };
    if (docReference.compatMode == "CSS1Compat") return {
      x: docReference.documentElement.scrollLeft,
      y: docReference.documentElement.scrollTop
    };
    return {
      x: docReference.body.scrollLeft,
      y: docReference.body.scrollTop
    };
  }
  elementsFromPoint(x, y) {
    var parents = [];
    var parent = void 0;
    do {
      const elem = this.DOMService.getNativeDocument().elementFromPoint(x, y);
      if (elem && parent !== elem) {
        parent = elem;
        parents.push(parent);
        parent.style.pointerEvents = "none";
      } else {
        parent = false;
      }
    } while (parent);
    parents.forEach(function(parent2) {
      return parent2.style.pointerEvents = "all";
    });
    return parents;
  }
  getFirstElementWithoutKeyword(elements, keyword) {
    while (elements[0] && elements[0].classList.toString().includes(keyword)) {
      elements.shift();
    }
    return elements[0];
  }
};
DocumentService.ɵfac = function DocumentService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || DocumentService)(ɵɵinject(DomRefService), ɵɵinject(PLATFORM_ID));
};
DocumentService.ɵprov = ɵɵdefineInjectable({
  token: DocumentService,
  factory: DocumentService.ɵfac
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DocumentService, [{
    type: Injectable
  }], function() {
    return [{
      type: DomRefService
    }, {
      type: Object,
      decorators: [{
        type: Inject,
        args: [PLATFORM_ID]
      }]
    }];
  }, null);
})();
var JoyrideBackdropService = class {
  constructor(documentService, optionsService, rendererFactory) {
    this.documentService = documentService;
    this.optionsService = optionsService;
    this.rendererFactory = rendererFactory;
    this.lastXScroll = 0;
    this.lastYScroll = 0;
    this.setRenderer();
  }
  setRenderer() {
    this.renderer = this.rendererFactory.createRenderer(null, null);
  }
  draw(step) {
    this.elementRef = step.targetViewContainer;
    this.targetAbsoluteTop = this.getTargetTotalTop(step);
    this.targetAbsoluteLeft = this.getTargetTotalLeft(step);
    this.currentBackdropContainer = this.renderer.createElement("div");
    this.renderer.addClass(this.currentBackdropContainer, "backdrop-container");
    this.renderer.setStyle(this.currentBackdropContainer, "position", "fixed");
    this.renderer.setStyle(this.currentBackdropContainer, "top", "0px");
    this.renderer.setStyle(this.currentBackdropContainer, "left", "0px");
    this.renderer.setStyle(this.currentBackdropContainer, "width", "100%");
    this.renderer.setStyle(this.currentBackdropContainer, "height", "100%");
    this.renderer.setStyle(this.currentBackdropContainer, "z-index", "1000");
    this.renderer.setAttribute(this.currentBackdropContainer, "id", "backdrop-" + step.name);
    this.backdropContent = this.renderer.createElement("div");
    this.renderer.addClass(this.backdropContent, "backdrop-content");
    this.renderer.setStyle(this.backdropContent, "position", "relative");
    this.renderer.setStyle(this.backdropContent, "height", "100%");
    this.renderer.setStyle(this.backdropContent, "display", "flex");
    this.renderer.setStyle(this.backdropContent, "flex-direction", "column");
    this.renderer.appendChild(this.currentBackdropContainer, this.backdropContent);
    this.backdropTop = this.renderer.createElement("div");
    this.renderer.addClass(this.backdropTop, "joyride-backdrop");
    this.renderer.addClass(this.backdropTop, "backdrop-top");
    this.renderer.setStyle(this.backdropTop, "width", "100%");
    this.renderer.setStyle(this.backdropTop, "height", this.targetAbsoluteTop - this.lastYScroll + "px");
    this.renderer.setStyle(this.backdropTop, "flex-shrink", "0");
    this.renderer.setStyle(this.backdropTop, "background-color", `rgba(${this.optionsService.getBackdropColor()}, 0.7)`);
    this.renderer.appendChild(this.backdropContent, this.backdropTop);
    this.backdropMiddleContainer = this.renderer.createElement("div");
    this.renderer.addClass(this.backdropMiddleContainer, "backdrop-middle-container");
    this.renderer.setStyle(this.backdropMiddleContainer, "height", this.elementRef.element.nativeElement.offsetHeight + "px");
    this.renderer.setStyle(this.backdropMiddleContainer, "width", "100%");
    this.renderer.setStyle(this.backdropMiddleContainer, "flex-shrink", "0");
    this.renderer.appendChild(this.backdropContent, this.backdropMiddleContainer);
    this.backdropMiddleContent = this.renderer.createElement("div");
    this.renderer.addClass(this.backdropMiddleContent, "backdrop-middle-content");
    this.renderer.setStyle(this.backdropMiddleContent, "display", "flex");
    this.renderer.setStyle(this.backdropMiddleContent, "width", "100%");
    this.renderer.setStyle(this.backdropMiddleContent, "height", "100%");
    this.renderer.appendChild(this.backdropMiddleContainer, this.backdropMiddleContent);
    this.leftBackdrop = this.renderer.createElement("div");
    this.renderer.addClass(this.leftBackdrop, "joyride-backdrop");
    this.renderer.addClass(this.leftBackdrop, "backdrop-left");
    this.renderer.setStyle(this.leftBackdrop, "flex-shrink", "0");
    this.renderer.setStyle(this.leftBackdrop, "width", this.targetAbsoluteLeft - this.lastXScroll + "px");
    this.renderer.setStyle(this.leftBackdrop, "background-color", `rgba(${this.optionsService.getBackdropColor()}, 0.7)`);
    this.renderer.appendChild(this.backdropMiddleContent, this.leftBackdrop);
    this.targetBackdrop = this.renderer.createElement("div");
    this.renderer.addClass(this.targetBackdrop, "backdrop-target");
    this.renderer.setStyle(this.targetBackdrop, "flex-shrink", "0");
    this.renderer.setStyle(this.targetBackdrop, "width", this.elementRef.element.nativeElement.offsetWidth + "px");
    this.renderer.appendChild(this.backdropMiddleContent, this.targetBackdrop);
    this.rightBackdrop = this.renderer.createElement("div");
    this.renderer.addClass(this.rightBackdrop, "joyride-backdrop");
    this.renderer.addClass(this.rightBackdrop, "backdrop-right");
    this.renderer.setStyle(this.rightBackdrop, "width", "100%");
    this.renderer.setStyle(this.rightBackdrop, "background-color", `rgba(${this.optionsService.getBackdropColor()}, 0.7)`);
    this.renderer.appendChild(this.backdropMiddleContent, this.rightBackdrop);
    this.backdropBottom = this.renderer.createElement("div");
    this.renderer.addClass(this.backdropBottom, "joyride-backdrop");
    this.renderer.addClass(this.backdropBottom, "backdrop-bottom");
    this.renderer.setStyle(this.backdropBottom, "width", "100%");
    this.renderer.setStyle(this.backdropBottom, "height", "100%");
    this.renderer.setStyle(this.backdropBottom, "background-color", `rgba(${this.optionsService.getBackdropColor()}, 0.7)`);
    this.renderer.appendChild(this.backdropContent, this.backdropBottom);
    this.removeLastBackdrop();
    this.drawCurrentBackdrop();
    this.lastBackdropContainer = this.currentBackdropContainer;
  }
  remove() {
    this.removeLastBackdrop();
  }
  redrawTarget(step) {
    this.targetAbsoluteLeft = this.getTargetTotalLeft(step);
    this.targetAbsoluteTop = this.getTargetTotalTop(step);
    this.handleVerticalScroll(step);
    this.handleHorizontalScroll(step);
  }
  getTargetTotalTop(step) {
    let targetVC = step.targetViewContainer;
    return step.isElementOrAncestorFixed ? this.documentService.getElementFixedTop(targetVC.element) : this.documentService.getElementAbsoluteTop(targetVC.element);
  }
  getTargetTotalLeft(step) {
    let targetVC = step.targetViewContainer;
    return step.isElementOrAncestorFixed ? this.documentService.getElementFixedLeft(targetVC.element) : this.documentService.getElementAbsoluteLeft(targetVC.element);
  }
  redraw(step, scroll) {
    if (this.lastYScroll !== scroll.scrollY) {
      this.lastYScroll = scroll.scrollY;
      if (this.elementRef) {
        this.handleVerticalScroll(step);
      }
    }
    if (this.lastXScroll !== scroll.scrollX) {
      this.lastXScroll = scroll.scrollX;
      if (this.elementRef) {
        this.handleHorizontalScroll(step);
      }
    }
  }
  handleHorizontalScroll(step) {
    let newBackdropLeftWidth = step.isElementOrAncestorFixed ? this.targetAbsoluteLeft : this.targetAbsoluteLeft - this.lastXScroll;
    if (newBackdropLeftWidth >= 0) {
      this.renderer.setStyle(this.leftBackdrop, "width", newBackdropLeftWidth + "px");
      this.renderer.setStyle(this.targetBackdrop, "width", this.elementRef.element.nativeElement.offsetWidth + "px");
    } else {
      this.handleTargetPartialWidth(newBackdropLeftWidth);
    }
  }
  handleTargetPartialWidth(newBackdropLeftWidth) {
    this.renderer.setStyle(this.leftBackdrop, "width", "0px");
    let visibleTargetWidth = this.elementRef.element.nativeElement.offsetWidth + newBackdropLeftWidth;
    if (visibleTargetWidth >= 0) {
      this.renderer.setStyle(this.targetBackdrop, "width", visibleTargetWidth + "px");
    } else {
      this.renderer.setStyle(this.targetBackdrop, "width", "0px");
    }
  }
  handleVerticalScroll(step) {
    let newBackdropTopHeight = step.isElementOrAncestorFixed ? this.targetAbsoluteTop : this.targetAbsoluteTop - this.lastYScroll;
    if (newBackdropTopHeight >= 0) {
      this.renderer.setStyle(this.backdropTop, "height", newBackdropTopHeight + "px");
      this.renderer.setStyle(this.backdropMiddleContainer, "height", this.elementRef.element.nativeElement.offsetHeight + "px");
    } else {
      this.handleTargetPartialHeight(newBackdropTopHeight);
    }
  }
  handleTargetPartialHeight(newBackdropTopHeight) {
    this.renderer.setStyle(this.backdropTop, "height", "0px");
    let visibleTargetHeight = this.elementRef.element.nativeElement.offsetHeight + newBackdropTopHeight;
    if (visibleTargetHeight >= 0) {
      this.renderer.setStyle(this.backdropMiddleContainer, "height", visibleTargetHeight + "px");
    } else {
      this.renderer.setStyle(this.backdropMiddleContainer, "height", "0px");
    }
  }
  removeLastBackdrop() {
    if (this.lastBackdropContainer) {
      this.renderer.removeChild(document.body, this.lastBackdropContainer);
      this.lastBackdropContainer = void 0;
    }
  }
  drawCurrentBackdrop() {
    this.renderer.appendChild(document.body, this.currentBackdropContainer);
  }
};
JoyrideBackdropService.ɵfac = function JoyrideBackdropService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || JoyrideBackdropService)(ɵɵinject(DocumentService), ɵɵinject(JoyrideOptionsService), ɵɵinject(RendererFactory2));
};
JoyrideBackdropService.ɵprov = ɵɵdefineInjectable({
  token: JoyrideBackdropService,
  factory: JoyrideBackdropService.ɵfac
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(JoyrideBackdropService, [{
    type: Injectable
  }], function() {
    return [{
      type: DocumentService
    }, {
      type: JoyrideOptionsService
    }, {
      type: RendererFactory2
    }];
  }, null);
})();
var Scroll = class {
};
var EventListenerService = class {
  constructor(rendererFactory, DOMService) {
    this.rendererFactory = rendererFactory;
    this.DOMService = DOMService;
    this.scrollEvent = new Subject();
    this.resizeEvent = new Subject();
    this.renderer = rendererFactory.createRenderer(null, null);
  }
  startListeningScrollEvents() {
    this.scrollUnlisten = this.renderer.listen("document", "scroll", (evt) => {
      this.scrollEvent.next({
        scrollX: this.DOMService.getNativeWindow().pageXOffset,
        scrollY: this.DOMService.getNativeWindow().pageYOffset
      });
    });
  }
  startListeningResizeEvents() {
    this.resizeUnlisten = this.renderer.listen("window", "resize", (evt) => {
      this.resizeEvent.next(evt);
    });
  }
  stopListeningScrollEvents() {
    this.scrollUnlisten();
  }
  stopListeningResizeEvents() {
    this.resizeUnlisten();
  }
};
EventListenerService.ɵfac = function EventListenerService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || EventListenerService)(ɵɵinject(RendererFactory2), ɵɵinject(DomRefService));
};
EventListenerService.ɵprov = ɵɵdefineInjectable({
  token: EventListenerService,
  factory: EventListenerService.ɵfac
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(EventListenerService, [{
    type: Injectable
  }], function() {
    return [{
      type: RendererFactory2
    }, {
      type: DomRefService
    }];
  }, null);
})();
var JoyrideArrowComponent = class {
  constructor() {
    this.position = "top";
  }
};
JoyrideArrowComponent.ɵfac = function JoyrideArrowComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || JoyrideArrowComponent)();
};
JoyrideArrowComponent.ɵcmp = ɵɵdefineComponent({
  type: JoyrideArrowComponent,
  selectors: [["joyride-arrow"]],
  inputs: {
    position: "position"
  },
  decls: 1,
  vars: 8,
  template: function JoyrideArrowComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵelement(0, "div");
    }
    if (rf & 2) {
      ɵɵclassProp("joyride-arrow__top", ctx.position == "top")("joyride-arrow__bottom", ctx.position == "bottom")("joyride-arrow__left", ctx.position == "left")("joyride-arrow__right", ctx.position == "right");
    }
  },
  styles: [".joyride-arrow__top{border-left:11px solid transparent;border-right:11px solid transparent;border-bottom:11px solid #ffffff}.joyride-arrow__bottom{border-left:11px solid transparent;border-right:11px solid transparent;border-top:11px solid #ffffff}.joyride-arrow__right{border-left:11px solid #ffffff;border-bottom:11px solid transparent;border-top:11px solid transparent}.joyride-arrow__left{border-right:11px solid #ffffff;border-top:11px solid transparent;border-bottom:11px solid transparent}\n"],
  encapsulation: 2
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(JoyrideArrowComponent, [{
    type: Component,
    args: [{
      selector: "joyride-arrow",
      encapsulation: ViewEncapsulation$1.None,
      template: `<div [class.joyride-arrow__top]="position == 'top'"
     [class.joyride-arrow__bottom]="position == 'bottom'"
     [class.joyride-arrow__left]="position == 'left'"
     [class.joyride-arrow__right]="position == 'right'">
</div>`,
      styles: [".joyride-arrow__top{border-left:11px solid transparent;border-right:11px solid transparent;border-bottom:11px solid #ffffff}.joyride-arrow__bottom{border-left:11px solid transparent;border-right:11px solid transparent;border-top:11px solid #ffffff}.joyride-arrow__right{border-left:11px solid #ffffff;border-bottom:11px solid transparent;border-top:11px solid transparent}.joyride-arrow__left{border-right:11px solid #ffffff;border-top:11px solid transparent;border-bottom:11px solid transparent}\n"]
    }]
  }], null, {
    position: [{
      type: Input
    }]
  });
})();
var JoyrideCloseButtonComponent = class {
};
JoyrideCloseButtonComponent.ɵfac = function JoyrideCloseButtonComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || JoyrideCloseButtonComponent)();
};
JoyrideCloseButtonComponent.ɵcmp = ɵɵdefineComponent({
  type: JoyrideCloseButtonComponent,
  selectors: [["joy-close-button"]],
  decls: 3,
  vars: 0,
  consts: [["viewBox", "0 0 25 25", "xmlns", "http://www.w3.org/2000/svg"], ["x1", "1", "y1", "24", "x2", "24", "y2", "1", "stroke", "black", "stroke-width", "3"], ["x1", "1", "y1", "1", "x2", "24", "y2", "24", "stroke", "black", "stroke-width", "3"]],
  template: function JoyrideCloseButtonComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵnamespaceSVG();
      ɵɵelementStart(0, "svg", 0);
      ɵɵelement(1, "line", 1)(2, "line", 2);
      ɵɵelementEnd();
    }
  },
  encapsulation: 2
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(JoyrideCloseButtonComponent, [{
    type: Component,
    args: [{
      selector: "joy-close-button",
      template: `<svg viewBox="0 0 25 25" xmlns="http://www.w3.org/2000/svg">
                <line x1="1" y1="24" 
                    x2="24" y2="1" 
                    stroke="black" 
                    stroke-width="3"/>
                <line x1="1" y1="1" 
                    x2="24" y2="24" 
                    stroke="black" 
                    stroke-width="3"/>
            </svg>`
    }]
  }], null, null);
})();
var JoyrideButtonComponent = class {
  constructor() {
    this.clicked = new EventEmitter();
  }
  onClick() {
    this.clicked.emit();
  }
};
JoyrideButtonComponent.ɵfac = function JoyrideButtonComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || JoyrideButtonComponent)();
};
JoyrideButtonComponent.ɵcmp = ɵɵdefineComponent({
  type: JoyrideButtonComponent,
  selectors: [["joyride-button"]],
  inputs: {
    color: "color"
  },
  outputs: {
    clicked: "clicked"
  },
  ngContentSelectors: _c0,
  decls: 2,
  vars: 5,
  consts: [[1, "joyride-button", 3, "mouseleave", "mouseover", "click", "ngStyle"]],
  template: function JoyrideButtonComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵelementStart(0, "button", 0);
      ɵɵlistener("mouseleave", function JoyrideButtonComponent_Template_button_mouseleave_0_listener() {
        return ctx.hover = false;
      })("mouseover", function JoyrideButtonComponent_Template_button_mouseover_0_listener() {
        return ctx.hover = true;
      })("click", function JoyrideButtonComponent_Template_button_click_0_listener() {
        return ctx.onClick();
      });
      ɵɵprojection(1);
      ɵɵelementEnd();
    }
    if (rf & 2) {
      ɵɵproperty("ngStyle", ɵɵpureFunction3(1, _c1, ctx.hover ? "#fff" : ctx.color, ctx.hover ? ctx.color : "#fff", ctx.hover ? ctx.color : "transparent"));
    }
  },
  dependencies: [NgStyle],
  styles: [".joyride-button[_ngcontent-%COMP%]{text-transform:uppercase;border:2px solid transparent;outline:none;padding:6px 12px;font-size:12px;font-weight:700;color:#fff;background-color:#3b5560;cursor:pointer}.joyride-button[_ngcontent-%COMP%]:hover{color:#3b5560;border:2px solid #3b5560;background-color:#fff}"]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(JoyrideButtonComponent, [{
    type: Component,
    args: [{
      selector: "joyride-button",
      template: `<button (mouseleave)="hover=false" (mouseover)="hover=true"
    [ngStyle]="{'background-color': hover ? '#fff' : color, 
                'color': hover ? color : '#fff',
                'border-color' : hover ? color : 'transparent'}"
    class="joyride-button" (click)="onClick()">
    <ng-content></ng-content>
</button>`,
      styles: [".joyride-button{text-transform:uppercase;border:2px solid transparent;outline:none;padding:6px 12px;font-size:12px;font-weight:700;color:#fff;background-color:#3b5560;cursor:pointer}.joyride-button:hover{color:#3b5560;border:2px solid #3b5560;background-color:#fff}\n"]
    }]
  }], null, {
    color: [{
      type: Input
    }],
    clicked: [{
      type: Output
    }]
  });
})();
var STEP_MIN_WIDTH = 200;
var STEP_MAX_WIDTH = 400;
var CUSTOM_STEP_MAX_WIDTH_VW = 90;
var STEP_HEIGHT = 200;
var ASPECT_RATIO = 1.212;
var DEFAULT_DISTANCE_FROM_MARGIN_TOP = 2;
var DEFAULT_DISTANCE_FROM_MARGIN_LEFT = 2;
var DEFAULT_DISTANCE_FROM_MARGIN_BOTTOM = 5;
var DEFAULT_DISTANCE_FROM_MARGIN_RIGHT = 5;
var KEY_CODE;
(function(KEY_CODE2) {
  KEY_CODE2[KEY_CODE2["RIGHT_ARROW"] = 39] = "RIGHT_ARROW";
  KEY_CODE2[KEY_CODE2["LEFT_ARROW"] = 37] = "LEFT_ARROW";
  KEY_CODE2[KEY_CODE2["ESCAPE_KEY"] = 27] = "ESCAPE_KEY";
})(KEY_CODE || (KEY_CODE = {}));
var JoyrideStepComponent = class {
  constructor(injector, stepsContainerService, eventListenerService, documentService, renderer, logger, optionsService, templateService) {
    this.injector = injector;
    this.stepsContainerService = stepsContainerService;
    this.eventListenerService = eventListenerService;
    this.documentService = documentService;
    this.renderer = renderer;
    this.logger = logger;
    this.optionsService = optionsService;
    this.templateService = templateService;
    this.stepWidth = STEP_MIN_WIDTH;
    this.stepHeight = STEP_HEIGHT;
    this.showArrow = true;
    this.arrowSize = ARROW_SIZE;
    this.subscriptions = [];
  }
  ngOnInit() {
    this.joyrideStepService = this.injector.get(JoyrideStepService);
    this.documentHeight = this.documentService.getDocumentHeight();
    this.subscriptions.push(this.subscribeToResizeEvents());
    this.title = this.step.title.asObservable();
    this.text = this.step.text.asObservable();
    this.setCustomTemplates();
    this.setCustomTexts();
    this.counter = this.getCounter();
    this.isCounterVisible = this.optionsService.isCounterVisible();
    this.isPrevButtonVisible = this.optionsService.isPrevButtonVisible();
    this.themeColor = this.optionsService.getThemeColor();
    if (this.text) this.text.subscribe((val) => this.checkRedraw(val));
    if (this.title) this.title.subscribe((val) => this.checkRedraw(val));
  }
  ngAfterViewInit() {
    if (this.isCustomized()) {
      this.renderer.setStyle(this.stepContainer.nativeElement, "max-width", CUSTOM_STEP_MAX_WIDTH_VW + "vw");
      this.updateStepDimensions();
    } else {
      this.renderer.setStyle(this.stepContainer.nativeElement, "max-width", STEP_MAX_WIDTH + "px");
      let dimensions = this.getDimensionsByAspectRatio(this.stepContainer.nativeElement.clientWidth, this.stepContainer.nativeElement.clientHeight, ASPECT_RATIO);
      dimensions = this.adjustDimensions(dimensions.width, dimensions.height);
      this.stepWidth = dimensions.width;
      this.stepHeight = dimensions.height;
      this.renderer.setStyle(this.stepContainer.nativeElement, "width", this.stepWidth + "px");
      this.renderer.setStyle(this.stepContainer.nativeElement, "height", this.stepHeight + "px");
    }
    this.drawStep();
  }
  checkRedraw(val) {
    if (val != null) {
      setTimeout(() => {
        this.redrawStep();
      }, 2);
    }
  }
  isCustomized() {
    return this.step.stepContent || this.templateService.getCounter() || this.templateService.getPrevButton() || this.templateService.getNextButton() || this.templateService.getDoneButton();
  }
  setCustomTexts() {
    const customeTexts = this.optionsService.getCustomTexts();
    this.prevText = customeTexts.prev;
    this.nextText = customeTexts.next;
    this.doneText = customeTexts.done;
  }
  drawStep() {
    let position = this.step.isElementOrAncestorFixed ? "fixed" : "absolute";
    this.renderer.setStyle(this.stepHolder.nativeElement, "position", position);
    this.renderer.setStyle(this.stepHolder.nativeElement, "transform", this.step.transformCssStyle);
    this.targetWidth = this.step.targetViewContainer.element.nativeElement.getBoundingClientRect().width;
    this.targetHeight = this.step.targetViewContainer.element.nativeElement.getBoundingClientRect().height;
    this.targetAbsoluteLeft = position === "fixed" ? this.documentService.getElementFixedLeft(this.step.targetViewContainer.element) : this.documentService.getElementAbsoluteLeft(this.step.targetViewContainer.element);
    this.targetAbsoluteTop = position === "fixed" ? this.documentService.getElementFixedTop(this.step.targetViewContainer.element) : this.documentService.getElementAbsoluteTop(this.step.targetViewContainer.element);
    this.setStepStyle();
  }
  getCounter() {
    let stepPosition = this.stepsContainerService.getStepNumber(this.step.name);
    let numberOfSteps = this.stepsContainerService.getStepsCount();
    this.counterData = {
      step: stepPosition,
      total: numberOfSteps
    };
    return stepPosition + "/" + numberOfSteps;
  }
  setCustomTemplates() {
    this.customContent = this.step.stepContent;
    this.ctx = this.step.stepContentParams;
    this.customPrevButton = this.templateService.getPrevButton();
    this.customNextButton = this.templateService.getNextButton();
    this.customDoneButton = this.templateService.getDoneButton();
    this.customCounter = this.templateService.getCounter();
  }
  keyEvent(event) {
    console.log(event);
    if (event.keyCode === KEY_CODE.RIGHT_ARROW) {
      if (this.isLastStep()) {
        this.close();
      } else {
        this.next();
      }
    } else if (event.keyCode === KEY_CODE.LEFT_ARROW) {
      this.prev();
    } else if (event.keyCode === KEY_CODE.ESCAPE_KEY) {
      this.close();
    }
  }
  prev() {
    this.joyrideStepService.prev();
  }
  next() {
    this.joyrideStepService.next();
  }
  close() {
    this.joyrideStepService.close();
  }
  isFirstStep() {
    return this.stepsContainerService.getStepNumber(this.step.name) === 1;
  }
  isLastStep() {
    return this.stepsContainerService.getStepNumber(this.step.name) === this.stepsContainerService.getStepsCount();
  }
  setStepStyle() {
    switch (this.step.position) {
      case "top": {
        this.setStyleTop();
        break;
      }
      case "bottom": {
        this.setStyleBottom();
        break;
      }
      case "right": {
        this.setStyleRight();
        break;
      }
      case "left": {
        this.setStyleLeft();
        break;
      }
      case "center": {
        this.setStyleCenter();
        break;
      }
      default: {
        this.setStyleBottom();
      }
    }
  }
  setStyleTop() {
    this.stepsContainerService.updatePosition(this.step.name, "top");
    this.topPosition = this.targetAbsoluteTop - DISTANCE_FROM_TARGET - this.stepHeight;
    this.stepAbsoluteTop = this.targetAbsoluteTop - DISTANCE_FROM_TARGET - this.stepHeight;
    this.arrowTopPosition = this.stepHeight;
    this.leftPosition = this.targetWidth / 2 - this.stepWidth / 2 + this.targetAbsoluteLeft;
    this.stepAbsoluteLeft = this.targetWidth / 2 - this.stepWidth / 2 + this.targetAbsoluteLeft;
    this.arrowLeftPosition = this.stepWidth / 2 - this.arrowSize;
    this.adjustLeftPosition();
    this.adjustRightPosition();
    this.arrowPosition = "bottom";
    this.autofixTopPosition();
  }
  setStyleRight() {
    this.stepsContainerService.updatePosition(this.step.name, "right");
    this.topPosition = this.targetAbsoluteTop + this.targetHeight / 2 - this.stepHeight / 2;
    this.stepAbsoluteTop = this.targetAbsoluteTop + this.targetHeight / 2 - this.stepHeight / 2;
    this.arrowTopPosition = this.stepHeight / 2 - this.arrowSize;
    this.leftPosition = this.targetAbsoluteLeft + this.targetWidth + DISTANCE_FROM_TARGET;
    this.stepAbsoluteLeft = this.targetAbsoluteLeft + this.targetWidth + DISTANCE_FROM_TARGET;
    this.arrowLeftPosition = -this.arrowSize;
    this.adjustTopPosition();
    this.adjustBottomPosition();
    this.arrowPosition = "left";
    this.autofixRightPosition();
  }
  setStyleBottom() {
    this.stepsContainerService.updatePosition(this.step.name, "bottom");
    this.topPosition = this.targetAbsoluteTop + this.targetHeight + DISTANCE_FROM_TARGET;
    this.stepAbsoluteTop = this.targetAbsoluteTop + this.targetHeight + DISTANCE_FROM_TARGET;
    this.arrowTopPosition = -this.arrowSize;
    this.arrowLeftPosition = this.stepWidth / 2 - this.arrowSize;
    this.leftPosition = this.targetWidth / 2 - this.stepWidth / 2 + this.targetAbsoluteLeft;
    this.stepAbsoluteLeft = this.targetWidth / 2 - this.stepWidth / 2 + this.targetAbsoluteLeft;
    this.adjustLeftPosition();
    this.adjustRightPosition();
    this.arrowPosition = "top";
    this.autofixBottomPosition();
  }
  setStyleLeft() {
    this.stepsContainerService.updatePosition(this.step.name, "left");
    this.topPosition = this.targetAbsoluteTop + this.targetHeight / 2 - this.stepHeight / 2;
    this.stepAbsoluteTop = this.targetAbsoluteTop + this.targetHeight / 2 - this.stepHeight / 2;
    this.arrowTopPosition = this.stepHeight / 2 - this.arrowSize;
    this.leftPosition = this.targetAbsoluteLeft - this.stepWidth - DISTANCE_FROM_TARGET;
    this.stepAbsoluteLeft = this.targetAbsoluteLeft - this.stepWidth - DISTANCE_FROM_TARGET;
    this.arrowLeftPosition = this.stepWidth;
    this.adjustTopPosition();
    this.adjustBottomPosition();
    this.arrowPosition = "right";
    this.autofixLeftPosition();
  }
  setStyleCenter() {
    this.renderer.setStyle(this.stepHolder.nativeElement, "position", "fixed");
    this.renderer.setStyle(this.stepHolder.nativeElement, "top", "50%");
    this.renderer.setStyle(this.stepHolder.nativeElement, "left", "50%");
    this.updateStepDimensions();
    this.renderer.setStyle(this.stepHolder.nativeElement, "transform", `translate(-${this.stepWidth / 2}px, -${this.stepHeight / 2}px)`);
    this.showArrow = false;
  }
  adjustLeftPosition() {
    if (this.leftPosition < 0) {
      this.arrowLeftPosition = this.arrowLeftPosition + this.leftPosition - DEFAULT_DISTANCE_FROM_MARGIN_LEFT;
      this.leftPosition = DEFAULT_DISTANCE_FROM_MARGIN_LEFT;
    }
  }
  adjustRightPosition() {
    let currentWindowWidth = document.body.clientWidth;
    if (this.stepAbsoluteLeft + this.stepWidth > currentWindowWidth) {
      let newLeftPos = this.leftPosition - (this.stepAbsoluteLeft + this.stepWidth + DEFAULT_DISTANCE_FROM_MARGIN_RIGHT - currentWindowWidth);
      let deltaLeftPosition = newLeftPos - this.leftPosition;
      this.leftPosition = newLeftPos;
      this.arrowLeftPosition = this.arrowLeftPosition - deltaLeftPosition;
    }
  }
  adjustTopPosition() {
    if (this.stepAbsoluteTop < 0) {
      this.arrowTopPosition = this.arrowTopPosition + this.topPosition - DEFAULT_DISTANCE_FROM_MARGIN_TOP;
      this.topPosition = DEFAULT_DISTANCE_FROM_MARGIN_TOP;
    }
  }
  adjustBottomPosition() {
    if (this.stepAbsoluteTop + this.stepHeight > this.documentHeight) {
      let newTopPos = this.topPosition - (this.stepAbsoluteTop + this.stepHeight + DEFAULT_DISTANCE_FROM_MARGIN_BOTTOM - this.documentHeight);
      let deltaTopPosition = newTopPos - this.topPosition;
      this.topPosition = newTopPos;
      this.arrowTopPosition = this.arrowTopPosition - deltaTopPosition;
    }
  }
  autofixTopPosition() {
    if (this.positionAlreadyFixed) {
      this.logger.warn("No step positions found for this step. The step will be centered.");
    } else if (this.targetAbsoluteTop - this.stepHeight - this.arrowSize < 0) {
      this.positionAlreadyFixed = true;
      this.setStyleRight();
    }
  }
  autofixRightPosition() {
    if (this.targetAbsoluteLeft + this.targetWidth + this.stepWidth + this.arrowSize > document.body.clientWidth) {
      this.setStyleBottom();
    }
  }
  autofixBottomPosition() {
    if (this.targetAbsoluteTop + this.stepHeight + this.arrowSize + this.targetHeight > this.documentHeight) {
      this.setStyleLeft();
    }
  }
  autofixLeftPosition() {
    if (this.targetAbsoluteLeft - this.stepWidth - this.arrowSize < 0) {
      this.setStyleTop();
    }
  }
  subscribeToResizeEvents() {
    return this.eventListenerService.resizeEvent.subscribe(() => {
      this.redrawStep();
    });
  }
  redrawStep() {
    this.updateStepDimensions();
    this.drawStep();
  }
  getDimensionsByAspectRatio(width, height, aspectRatio) {
    let calcHeight = (width + height) / (1 + aspectRatio);
    let calcWidth = calcHeight * aspectRatio;
    return {
      width: calcWidth,
      height: calcHeight
    };
  }
  adjustDimensions(width, height) {
    let area = width * height;
    let newWidth = width;
    let newHeight = height;
    if (width > STEP_MAX_WIDTH) {
      newWidth = STEP_MAX_WIDTH;
      newHeight = area / newWidth;
    } else if (width < STEP_MIN_WIDTH) {
      newWidth = STEP_MIN_WIDTH;
      newHeight = STEP_MIN_WIDTH / ASPECT_RATIO;
    }
    return {
      width: newWidth,
      height: newHeight
    };
  }
  updateStepDimensions() {
    this.stepWidth = this.stepContainer.nativeElement.clientWidth;
    this.stepHeight = this.stepContainer.nativeElement.clientHeight;
  }
  ngOnDestroy() {
    this.subscriptions.forEach((subscription) => {
      subscription.unsubscribe();
    });
  }
};
JoyrideStepComponent.ɵfac = function JoyrideStepComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || JoyrideStepComponent)(ɵɵdirectiveInject(Injector), ɵɵdirectiveInject(JoyrideStepsContainerService), ɵɵdirectiveInject(EventListenerService), ɵɵdirectiveInject(DocumentService), ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(LoggerService), ɵɵdirectiveInject(JoyrideOptionsService), ɵɵdirectiveInject(TemplatesService));
};
JoyrideStepComponent.ɵcmp = ɵɵdefineComponent({
  type: JoyrideStepComponent,
  selectors: [["joyride-step"]],
  viewQuery: function JoyrideStepComponent_Query(rf, ctx) {
    if (rf & 1) {
      ɵɵviewQuery(_c2, 7);
      ɵɵviewQuery(_c3, 7);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.stepHolder = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.stepContainer = _t.first);
    }
  },
  hostBindings: function JoyrideStepComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      ɵɵlistener("keyup", function JoyrideStepComponent_keyup_HostBindingHandler($event) {
        return ctx.keyEvent($event);
      }, false, ɵɵresolveWindow);
    }
  },
  inputs: {
    step: "step"
  },
  decls: 21,
  vars: 17,
  consts: [["stepHolder", ""], ["stepContainer", ""], ["defaultContent", ""], ["doneButton", ""], ["defaultCounter", ""], ["defaultPrevButton", ""], ["defaulNextButton", ""], ["defaultDoneButton", ""], [1, "joyride-step__holder", 3, "id"], ["class", "joyride-step__arrow", 3, "position", "top", "left", 4, "ngIf"], [1, "joyride-step__container"], [1, "joyride-step__close", 3, "click"], [1, "joyride-step__header"], [1, "joyride-step__title"], [1, "joyride-step__body"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "joyride-step__footer"], ["class", "joyride-step__counter-container", 4, "ngIf"], [1, "joyride-step__buttons-container"], ["class", "joyride-step__prev-container joyride-step__button", 3, "click", 4, "ngIf"], ["class", "joyride-step__next-container joyride-step__button", 3, "click", 4, "ngIf", "ngIfElse"], [1, "joyride-step__arrow", 3, "position"], [1, "joyride-step__counter-container"], [1, "joyride-step__counter"], [1, "joyride-step__prev-container", "joyride-step__button", 3, "click"], [4, "ngTemplateOutlet"], [1, "joyride-step__prev-button", 3, "color"], [1, "joyride-step__next-container", "joyride-step__button", 3, "click"], [3, "color"], [1, "joyride-step__done-container", "joyride-step__button", 3, "click"], [1, "joyride-step__done-button", 3, "color"]],
  template: function JoyrideStepComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = ɵɵgetCurrentView();
      ɵɵelementStart(0, "div", 8, 0);
      ɵɵtemplate(2, JoyrideStepComponent_joyride_arrow_2_Template, 1, 5, "joyride-arrow", 9);
      ɵɵelementStart(3, "div", 10, 1)(5, "joy-close-button", 11);
      ɵɵlistener("click", function JoyrideStepComponent_Template_joy_close_button_click_5_listener() {
        ɵɵrestoreView(_r1);
        return ɵɵresetView(ctx.close());
      });
      ɵɵelementEnd();
      ɵɵelementStart(6, "div", 12)(7, "div", 13);
      ɵɵtext(8);
      ɵɵpipe(9, "async");
      ɵɵelementEnd()();
      ɵɵelementStart(10, "div", 14);
      ɵɵtemplate(11, JoyrideStepComponent_ng_container_11_Template, 1, 0, "ng-container", 15)(12, JoyrideStepComponent_ng_template_12_Template, 2, 3, "ng-template", null, 2, ɵɵtemplateRefExtractor);
      ɵɵelementEnd();
      ɵɵelementStart(14, "div", 16);
      ɵɵtemplate(15, JoyrideStepComponent_div_15_Template, 4, 2, "div", 17);
      ɵɵelementStart(16, "div", 18);
      ɵɵtemplate(17, JoyrideStepComponent_div_17_Template, 4, 1, "div", 19)(18, JoyrideStepComponent_div_18_Template, 4, 1, "div", 20)(19, JoyrideStepComponent_ng_template_19_Template, 4, 1, "ng-template", null, 3, ɵɵtemplateRefExtractor);
      ɵɵelementEnd()()()();
    }
    if (rf & 2) {
      const defaultContent_r10 = ɵɵreference(13);
      const doneButton_r11 = ɵɵreference(20);
      ɵɵstyleProp("top", ctx.topPosition, "px")("left", ctx.leftPosition, "px");
      ɵɵproperty("id", "joyride-step-" + ctx.step.name);
      ɵɵadvance(2);
      ɵɵproperty("ngIf", ctx.showArrow);
      ɵɵadvance(5);
      ɵɵstyleProp("color", ctx.themeColor);
      ɵɵadvance();
      ɵɵtextInterpolate(ɵɵpipeBind1(9, 15, ctx.title));
      ɵɵadvance(3);
      ɵɵproperty("ngTemplateOutlet", ctx.customContent ? ctx.customContent : defaultContent_r10)("ngTemplateOutletContext", ctx.ctx);
      ɵɵadvance(4);
      ɵɵproperty("ngIf", ctx.isCounterVisible);
      ɵɵadvance(2);
      ɵɵproperty("ngIf", ctx.isPrevButtonVisible && !ctx.isFirstStep());
      ɵɵadvance();
      ɵɵproperty("ngIf", !ctx.isLastStep())("ngIfElse", doneButton_r11);
    }
  },
  dependencies: [JoyrideArrowComponent, JoyrideCloseButtonComponent, JoyrideButtonComponent, NgIf, NgTemplateOutlet, AsyncPipe],
  styles: [".joyride-step__holder{position:absolute;font-family:Arial,Helvetica,sans-serif;font-size:16px;z-index:1001}.joyride-step__arrow{position:absolute;left:40px;z-index:1002}.joyride-step__container{box-sizing:border-box;position:relative;color:#000;background-color:#fff;display:flex;flex-direction:column;justify-content:space-between;padding:10px;box-shadow:0 0 30px 1px #000}.joyride-step__header{display:flex;align-items:center;padding:8px}.joyride-step__title{font-weight:700;font-size:20px}.joyride-step__close{position:absolute;right:10px;top:10px;width:14px;height:14px;cursor:pointer}.joyride-step__body{text-align:left;padding:10px 8px}.joyride-step__footer{display:flex;flex-direction:row;justify-content:space-between;align-items:center;padding-left:8px}.joyride-step__buttons-container{display:flex;flex-direction:row}.joyride-step__button:first-child{margin-right:2.5px}.joyride-step__button:last-child{margin-left:2.5px}.joyride-step__counter{font-weight:700;font-size:14px}.joyride-step__counter-container{margin-right:10px}\n"],
  encapsulation: 2
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(JoyrideStepComponent, [{
    type: Component,
    args: [{
      selector: "joyride-step",
      encapsulation: ViewEncapsulation$1.None,
      template: `<div #stepHolder class="joyride-step__holder" [id]="'joyride-step-' + step.name" [style.top.px]="topPosition" [style.left.px]="leftPosition">
    <joyride-arrow *ngIf="showArrow" class="joyride-step__arrow" [position]="arrowPosition" [style.top.px]="arrowTopPosition"
        [style.left.px]="arrowLeftPosition"></joyride-arrow>
    <div #stepContainer class="joyride-step__container">
        <joy-close-button class="joyride-step__close" (click)="close()"></joy-close-button>
        <div class="joyride-step__header">
            <div class="joyride-step__title" [style.color]="themeColor">{{ title | async }}</div>
        </div>
        <div class="joyride-step__body">
            <ng-container *ngTemplateOutlet="customContent ? customContent : defaultContent; context: ctx"></ng-container>
            <ng-template #defaultContent>
                {{ text | async }}
            </ng-template>
        </div>
        <div class="joyride-step__footer">
            <div *ngIf="isCounterVisible" class="joyride-step__counter-container">
                <ng-container *ngTemplateOutlet="customCounter ? customCounter : defaultCounter; context: counterData"></ng-container>
                <ng-template #defaultCounter>
                    <div class="joyride-step__counter">{{ counter }}</div>
                </ng-template>
            </div>
            <div class="joyride-step__buttons-container">
                <div class="joyride-step__prev-container joyride-step__button" *ngIf="isPrevButtonVisible && !isFirstStep()" (click)="prev()">
                    <ng-container *ngTemplateOutlet="customPrevButton ? customPrevButton : defaultPrevButton"></ng-container>
                    <ng-template #defaultPrevButton>
                        <joyride-button class="joyride-step__prev-button" [color]="themeColor">{{ prevText | async }}</joyride-button>
                    </ng-template>
                </div>
                <div class="joyride-step__next-container joyride-step__button" *ngIf="!isLastStep(); else doneButton" (click)="next()">
                    <ng-container *ngTemplateOutlet="customNextButton ? customNextButton : defaulNextButton"></ng-container>
                    <ng-template #defaulNextButton>
                        <joyride-button [color]="themeColor">{{ nextText | async }}</joyride-button>
                    </ng-template>
                </div>
                <ng-template #doneButton>
                    <div class="joyride-step__done-container joyride-step__button" (click)="close()">
                        <ng-container *ngTemplateOutlet="customDoneButton ? customDoneButton : defaultDoneButton"></ng-container>
                        <ng-template #defaultDoneButton>
                            <joyride-button class="joyride-step__done-button" [color]="themeColor">{{ doneText | async }}</joyride-button>
                        </ng-template>
                    </div>
                </ng-template>
            </div>
        </div>
    </div>
</div>`,
      styles: [".joyride-step__holder{position:absolute;font-family:Arial,Helvetica,sans-serif;font-size:16px;z-index:1001}.joyride-step__arrow{position:absolute;left:40px;z-index:1002}.joyride-step__container{box-sizing:border-box;position:relative;color:#000;background-color:#fff;display:flex;flex-direction:column;justify-content:space-between;padding:10px;box-shadow:0 0 30px 1px #000}.joyride-step__header{display:flex;align-items:center;padding:8px}.joyride-step__title{font-weight:700;font-size:20px}.joyride-step__close{position:absolute;right:10px;top:10px;width:14px;height:14px;cursor:pointer}.joyride-step__body{text-align:left;padding:10px 8px}.joyride-step__footer{display:flex;flex-direction:row;justify-content:space-between;align-items:center;padding-left:8px}.joyride-step__buttons-container{display:flex;flex-direction:row}.joyride-step__button:first-child{margin-right:2.5px}.joyride-step__button:last-child{margin-left:2.5px}.joyride-step__counter{font-weight:700;font-size:14px}.joyride-step__counter-container{margin-right:10px}\n"]
    }]
  }], function() {
    return [{
      type: Injector
    }, {
      type: JoyrideStepsContainerService
    }, {
      type: EventListenerService
    }, {
      type: DocumentService
    }, {
      type: Renderer2
    }, {
      type: LoggerService
    }, {
      type: JoyrideOptionsService
    }, {
      type: TemplatesService
    }];
  }, {
    step: [{
      type: Input
    }],
    stepHolder: [{
      type: ViewChild,
      args: ["stepHolder", {
        static: true
      }]
    }],
    stepContainer: [{
      type: ViewChild,
      args: ["stepContainer", {
        static: true
      }]
    }],
    keyEvent: [{
      type: HostListener,
      args: ["window:keyup", ["$event"]]
    }]
  });
})();
var StepDrawerService = class {
  constructor(componentFactoryResolver, appRef, injector) {
    this.componentFactoryResolver = componentFactoryResolver;
    this.appRef = appRef;
    this.injector = injector;
    this.refMap = {};
  }
  draw(step) {
    const ref = this.componentFactoryResolver.resolveComponentFactory(JoyrideStepComponent).create(this.injector);
    this.appRef.attachView(ref.hostView);
    const domElem = ref.hostView.rootNodes[0];
    document.body.appendChild(domElem);
    const instance = ref.instance;
    instance.step = step;
    ref.changeDetectorRef.detectChanges();
    step.stepInstance = instance;
    this.refMap[step.name] = ref;
  }
  remove(step) {
    this.appRef.detachView(this.refMap[step.name].hostView);
    this.refMap[step.name].destroy();
  }
};
StepDrawerService.ɵfac = function StepDrawerService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || StepDrawerService)(ɵɵinject(ComponentFactoryResolver$1), ɵɵinject(ApplicationRef), ɵɵinject(Injector));
};
StepDrawerService.ɵprov = ɵɵdefineInjectable({
  token: StepDrawerService,
  factory: StepDrawerService.ɵfac
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StepDrawerService, [{
    type: Injectable
  }], function() {
    return [{
      type: ComponentFactoryResolver$1
    }, {
      type: ApplicationRef
    }, {
      type: Injector
    }];
  }, null);
})();
var SCROLLBAR_SIZE = 20;
var DISTANCE_FROM_TARGET = 15;
var ARROW_SIZE = 10;
var JoyrideStepService = class {
  constructor(backDropService, eventListener, stepsContainerService, documentService, DOMService, stepDrawerService, optionsService, router, logger) {
    this.backDropService = backDropService;
    this.eventListener = eventListener;
    this.stepsContainerService = stepsContainerService;
    this.documentService = documentService;
    this.DOMService = DOMService;
    this.stepDrawerService = stepDrawerService;
    this.optionsService = optionsService;
    this.router = router;
    this.logger = logger;
    this.winTopPosition = 0;
    this.winBottomPosition = 0;
    this.stepsObserver = new ReplaySubject();
    this.initViewportPositions();
    this.subscribeToScrollEvents();
    this.subscribeToResizeEvents();
  }
  initViewportPositions() {
    this.winTopPosition = 0;
    this.winBottomPosition = this.DOMService.getNativeWindow().innerHeight - SCROLLBAR_SIZE;
  }
  subscribeToScrollEvents() {
    this.eventListener.startListeningScrollEvents();
    this.eventListener.scrollEvent.subscribe((scroll) => {
      this.winTopPosition = scroll.scrollY;
      this.winBottomPosition = this.winTopPosition + this.DOMService.getNativeWindow().innerHeight - SCROLLBAR_SIZE;
      if (this.currentStep) this.backDropService.redraw(this.currentStep, scroll);
    });
  }
  subscribeToResizeEvents() {
    this.eventListener.resizeEvent.subscribe(() => {
      if (this.currentStep) this.backDropService.redrawTarget(this.currentStep);
    });
  }
  drawStep(step) {
    step.position = step.position === NO_POSITION ? this.optionsService.getStepDefaultPosition() : step.position;
    this.stepDrawerService.draw(step);
  }
  startTour() {
    this.stepsObserver = new ReplaySubject();
    this.stepsContainerService.init();
    this.documentService.setDocumentHeight();
    this.tryShowStep(StepActionType.NEXT);
    this.eventListener.startListeningResizeEvents();
    this.subscribeToStepsUpdates();
    return this.stepsObserver.asObservable();
  }
  close() {
    this.removeCurrentStep();
    this.notifyTourIsFinished();
    this.DOMService.getNativeWindow().scrollTo(0, 0);
    this.eventListener.stopListeningResizeEvents();
    this.backDropService.remove();
  }
  prev() {
    this.removeCurrentStep();
    this.currentStep.prevCliked.emit();
    this.tryShowStep(StepActionType.PREV);
  }
  next() {
    this.removeCurrentStep();
    this.currentStep.nextClicked.emit();
    this.tryShowStep(StepActionType.NEXT);
  }
  navigateToStepPage(action) {
    return __async(this, null, function* () {
      let stepRoute = this.stepsContainerService.getStepRoute(action);
      if (stepRoute) {
        return yield this.router.navigate([stepRoute]);
      }
    });
  }
  subscribeToStepsUpdates() {
    this.stepsContainerService.stepHasBeenModified.subscribe((updatedStep) => {
      if (this.currentStep && this.currentStep.name === updatedStep.name) {
        this.currentStep = updatedStep;
      }
    });
  }
  tryShowStep(actionType) {
    return __async(this, null, function* () {
      yield this.navigateToStepPage(actionType);
      const timeout = this.optionsService.getWaitingTime();
      if (timeout > 100) this.backDropService.remove();
      setTimeout(() => {
        try {
          this.showStep(actionType);
        } catch (error) {
          if (error instanceof JoyrideStepDoesNotExist) {
            this.tryShowStep(actionType);
          } else if (error instanceof JoyrideStepOutOfRange) {
            this.logger.error("Forcing the tour closure: First or Last step not found in the DOM.");
            this.close();
          } else {
            throw new Error(error);
          }
        }
      }, timeout);
    });
  }
  showStep(actionType) {
    this.currentStep = this.stepsContainerService.get(actionType);
    if (this.currentStep == null) throw new JoyrideStepDoesNotExist("");
    this.notifyStepClicked(actionType);
    this.scrollIfElementBeyondOtherElements();
    this.backDropService.draw(this.currentStep);
    this.drawStep(this.currentStep);
    this.scrollIfStepAndTargetAreNotVisible();
  }
  notifyStepClicked(actionType) {
    let stepInfo = {
      number: this.stepsContainerService.getStepNumber(this.currentStep.name),
      name: this.currentStep.name,
      route: this.currentStep.route,
      actionType
    };
    this.stepsObserver.next(stepInfo);
  }
  notifyTourIsFinished() {
    if (this.currentStep) this.currentStep.tourDone.emit();
    this.stepsObserver.complete();
  }
  removeCurrentStep() {
    if (this.currentStep) this.stepDrawerService.remove(this.currentStep);
  }
  scrollIfStepAndTargetAreNotVisible() {
    this.scrollWhenTargetOrStepAreHiddenBottom();
    this.scrollWhenTargetOrStepAreHiddenTop();
  }
  scrollWhenTargetOrStepAreHiddenBottom() {
    let totalTargetBottom = this.getMaxTargetAndStepBottomPosition();
    if (totalTargetBottom > this.winBottomPosition) {
      this.DOMService.getNativeWindow().scrollBy(0, totalTargetBottom - this.winBottomPosition);
    }
  }
  scrollWhenTargetOrStepAreHiddenTop() {
    let totalTargetTop = this.getMaxTargetAndStepTopPosition();
    if (totalTargetTop < this.winTopPosition) {
      this.DOMService.getNativeWindow().scrollBy(0, totalTargetTop - this.winTopPosition);
    }
  }
  getMaxTargetAndStepBottomPosition() {
    let targetAbsoluteTop = this.documentService.getElementAbsoluteTop(this.currentStep.targetViewContainer.element);
    if (this.currentStep.position === "top") {
      return targetAbsoluteTop + this.currentStep.stepInstance.targetHeight;
    } else if (this.currentStep.position === "bottom") {
      return targetAbsoluteTop + this.currentStep.stepInstance.targetHeight + this.currentStep.stepInstance.stepHeight + ARROW_SIZE + DISTANCE_FROM_TARGET;
    } else if (this.currentStep.position === "right" || this.currentStep.position === "left") {
      return Math.max(targetAbsoluteTop + this.currentStep.stepInstance.targetHeight, targetAbsoluteTop + this.currentStep.stepInstance.targetHeight / 2 + this.currentStep.stepInstance.stepHeight / 2);
    }
  }
  getMaxTargetAndStepTopPosition() {
    let targetAbsoluteTop = this.documentService.getElementAbsoluteTop(this.currentStep.targetViewContainer.element);
    if (this.currentStep.position === "top") {
      return targetAbsoluteTop - (this.currentStep.stepInstance.stepHeight + ARROW_SIZE + DISTANCE_FROM_TARGET);
    } else if (this.currentStep.position === "bottom") {
      return targetAbsoluteTop;
    } else if (this.currentStep.position === "right" || this.currentStep.position === "left") {
      return Math.min(targetAbsoluteTop, targetAbsoluteTop + this.currentStep.stepInstance.targetHeight / 2 - this.currentStep.stepInstance.stepHeight / 2);
    }
  }
  scrollIfElementBeyondOtherElements() {
    if (this.isElementBeyondOthers() === 2) {
      this.documentService.scrollToTheTop(this.currentStep.targetViewContainer.element);
    }
    if (this.isElementBeyondOthers() === 2) {
      this.documentService.scrollToTheBottom(this.currentStep.targetViewContainer.element);
    }
    if (this.isElementBeyondOthers() === 1 && this.documentService.isParentScrollable(this.currentStep.targetViewContainer.element)) {
      this.documentService.scrollIntoView(this.currentStep.targetViewContainer.element, this.currentStep.isElementOrAncestorFixed);
    }
    if (this.isElementBeyondOthers() === 1 && this.documentService.isParentScrollable(this.currentStep.targetViewContainer.element)) {
      this.currentStep.targetViewContainer.element.nativeElement.scrollIntoView();
    }
  }
  isElementBeyondOthers() {
    return this.documentService.isElementBeyondOthers(this.currentStep.targetViewContainer.element, this.currentStep.isElementOrAncestorFixed, "backdrop");
  }
};
JoyrideStepService.ɵfac = function JoyrideStepService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || JoyrideStepService)(ɵɵinject(JoyrideBackdropService), ɵɵinject(EventListenerService), ɵɵinject(JoyrideStepsContainerService), ɵɵinject(DocumentService), ɵɵinject(DomRefService), ɵɵinject(StepDrawerService), ɵɵinject(JoyrideOptionsService), ɵɵinject(Router), ɵɵinject(LoggerService));
};
JoyrideStepService.ɵprov = ɵɵdefineInjectable({
  token: JoyrideStepService,
  factory: JoyrideStepService.ɵfac
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(JoyrideStepService, [{
    type: Injectable
  }], function() {
    return [{
      type: JoyrideBackdropService
    }, {
      type: EventListenerService
    }, {
      type: JoyrideStepsContainerService
    }, {
      type: DocumentService
    }, {
      type: DomRefService
    }, {
      type: StepDrawerService
    }, {
      type: JoyrideOptionsService
    }, {
      type: Router
    }, {
      type: LoggerService
    }];
  }, null);
})();
var JoyrideService = class {
  constructor(platformId, stepService, optionsService) {
    this.platformId = platformId;
    this.stepService = stepService;
    this.optionsService = optionsService;
    this.tourInProgress = false;
  }
  startTour(options) {
    if (!isPlatformBrowser(this.platformId)) {
      return of(new JoyrideStepInfo());
    }
    if (!this.tourInProgress) {
      this.tourInProgress = true;
      if (options) {
        this.optionsService.setOptions(options);
      }
      this.tour$ = this.stepService.startTour().pipe(finalize(() => this.tourInProgress = false));
      this.tour$.subscribe();
    }
    return this.tour$;
  }
  closeTour() {
    if (this.isTourInProgress()) this.stepService.close();
  }
  isTourInProgress() {
    return this.tourInProgress;
  }
};
JoyrideService.ɵfac = function JoyrideService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || JoyrideService)(ɵɵinject(PLATFORM_ID), ɵɵinject(JoyrideStepService), ɵɵinject(JoyrideOptionsService));
};
JoyrideService.ɵprov = ɵɵdefineInjectable({
  token: JoyrideService,
  factory: JoyrideService.ɵfac
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(JoyrideService, [{
    type: Injectable
  }], function() {
    return [{
      type: Object,
      decorators: [{
        type: Inject,
        args: [PLATFORM_ID]
      }]
    }, {
      type: JoyrideStepService
    }, {
      type: JoyrideOptionsService
    }];
  }, null);
})();
var routerModuleForChild = RouterModule.forChild([]);
var JoyrideModule = class _JoyrideModule {
  static forRoot() {
    return {
      ngModule: _JoyrideModule,
      providers: [JoyrideService, JoyrideStepService, JoyrideStepsContainerService, JoyrideBackdropService, EventListenerService, DocumentService, JoyrideOptionsService, StepDrawerService, DomRefService, LoggerService, TemplatesService]
    };
  }
  static forChild() {
    return {
      ngModule: _JoyrideModule,
      providers: []
    };
  }
};
JoyrideModule.ɵfac = function JoyrideModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || JoyrideModule)();
};
JoyrideModule.ɵmod = ɵɵdefineNgModule({
  type: JoyrideModule,
  declarations: [JoyrideDirective, JoyrideStepComponent, JoyrideArrowComponent, JoyrideButtonComponent, JoyrideCloseButtonComponent],
  imports: [CommonModule, RouterModule],
  exports: [JoyrideDirective]
});
JoyrideModule.ɵinj = ɵɵdefineInjector({
  imports: [[CommonModule, routerModuleForChild]]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(JoyrideModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, routerModuleForChild],
      declarations: [JoyrideDirective, JoyrideStepComponent, JoyrideArrowComponent, JoyrideButtonComponent, JoyrideCloseButtonComponent],
      exports: [JoyrideDirective]
    }]
  }], null, null);
})();
export {
  ARROW_SIZE,
  DEFAULT_DISTANCE_FROM_MARGIN_LEFT,
  DEFAULT_DISTANCE_FROM_MARGIN_TOP,
  DEFAULT_TEXTS,
  DEFAULT_THEME_COLOR,
  DEFAULT_TIMEOUT_BETWEEN_STEPS,
  DISTANCE_FROM_TARGET,
  DocumentService,
  DomRefService,
  EventListenerService,
  JoyrideArrowComponent,
  JoyrideBackdropService,
  JoyrideButtonComponent,
  JoyrideCloseButtonComponent,
  JoyrideDirective,
  JoyrideModule,
  JoyrideOptionsService,
  JoyrideService,
  JoyrideStepComponent,
  JoyrideStepService,
  JoyrideStepsContainerService,
  KEY_CODE,
  LoggerService,
  NO_POSITION,
  ObservableCustomTexts,
  STEP_DEFAULT_POSITION,
  Scroll,
  StepActionType,
  StepDrawerService,
  TemplatesService,
  routerModuleForChild
};
//# sourceMappingURL=ngx-joyride.js.map
