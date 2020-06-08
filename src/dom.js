window.dom = {
  find(selector) {
    return document.querySelectorAll(selector);
  },
  style(node, name, value) {
    if (arguments.length === 3) {
      // dom.style(div,'color','red')
      node.style[name] = value;
    } else if (arguments.length === 2) {
      // dom.style(div,'color')
      return node.style[nam];
    } else if (name instanceof Object) {
      // dom.style(div,{color:'red'})
      const object = name;
      for (let key in object) {
        node.style[key] = object[key];
      }
    }
  },
  each(nodelList, fn) {
    for (let i = 0; i < nodelList.length; i++) {
      fn.call(null, nodelList[i]);
    }
  },
};
