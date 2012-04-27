Proxy2dContext = function() {
  this.actions = [];
  this.deps = {};
};
Proxy2dContext.prototype = {
  callFunction: function(method, args) {
    // convert args to real array
    args = Array.prototype.slice.call(args);
    this.actions.push([0, method, args]);
  },
  setAttribute: function(key, value) {
    this.actions.push([1, key, value]);
  },
  callCustom: function(method, args) {
    // convert args to real array
    args = Array.prototype.slice.call(args);
    this.actions.push([3, method, args]);
  },
  dependsOn: function(id) {
    if (id in this.deps)
      return;
    this.deps[id] = true;
    this.actions.push([4, id]);
  },

  // State
  save: function() {
    this.callFunction('save', []);
  },
  restore: function() {
    this.callFunction('restore', []);
  },
  // Transformations
  rotate: function() {
    this.callFunction('rotate', arguments);
  },
  scale: function() {
    this.callFunction('scale', arguments);
  },
  setTransform: function() {
    this.callFunction('setTransform', arguments);
  },
  transform: function() {
    this.callFunction('transform', arguments);
  },
  translate: function() {
    this.callFunction('translate', arguments);
  },
  // rects
  clearRect: function() {
    this.callFunction('clearRect', arguments);
  },
  fillRect: function() {
    this.callFunction('fillRect', arguments);
  },
  strokeRect: function() {
    this.callFunction('strokeRect', arguments);
  },
  // Complex shapes (paths)
  arc: function() {
    this.callFunction('arc', arguments);
  },
  arcTo: function() {
    this.callFunction('arcTo', arguments);
  },
  beginPath: function() {
    this.callFunction('beginPath', []);
  },
  bezierCurveTo: function() {
    this.callFunction('bezierCurveTo', arguments);
  },
  clip: function() {
    this.callFunction('clip', arguments);
  },
  closePath: function() {
    this.callFunction('closePath', arguments);
  },
  fill: function() {
    this.callFunction('fill', arguments);
  },
  lineTo: function() {
    this.callFunction('lineTo', arguments);
  },
  moveTo: function() {
    this.callFunction('moveTo', arguments);
  },
  quadraticCurveTo: function() {
    this.callFunction('quadraticCurveTo', arguments);
  },
  rect: function() {
    this.callFunction('rect', arguments);
  },
  stroke: function() {
    this.callFunction('stroke', arguments);
  },
  // Text
  fillText: function() {
    this.callFunction('fillText', arguments);
  },
  strokeText: function() {
    this.callFunction('strokeText', arguments);
  },
  /**
   * At the moment this is a non stanard function
   * Should be called with an image object and a transformation
   */
  drawImage: function() {
    this.callCustom('drawImage', arguments);
  },
  createImageData: function(width, height) {
    return {
      data: new Array(width * height * 4),
      length: width * height * 4,
      'width': width,
      'height': height
    }
  },
  /**
   * At the moment this is a non stanard function
   * Should be called with an ImageData object and a transformation
   */
  putImageDataWithTransform: function() {
    this.callCustom('putImageDataWithTransform', arguments);
  },
  // Attributes
  set globalAlpha(value) {
    this.setAttribute('globalAlpha', value);
  },
  set globalCompositeOperation(value) {
    this.setAttribute('globalCompositeOperation', value);
  },
  set fillStyle(value) {
    this.setAttribute('fillStyle', value);
  },
  set strokeStyle(value) {
    this.setAttribute('strokeStyle', value);
  },
  set lineCap(value) {
    this.setAttribute('lineCap', value);
  },
  set lineJoin(value) {
    this.setAttribute('lineJoin', value);
  },
  set lineWidth(value) {
    this.setAttribute('lineWidth', value);
  },
  set miterLimit(value) {
    this.setAttribute('miterLimit', value);
  },
  set font(value) {
    this.setAttribute('font', value);
  }
};