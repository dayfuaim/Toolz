/* Some toolz for VM */

const _VMoptions = {
  childList: true,
  subtree: true,
  characterDataOldValue: false
};

var _Node2Watch = document.querySelector('body');

function _Watch(_Node2Watch, _Node2Act, _KickCallback) {

  const callback = function(mutations) {
    for (let mutation of mutations) {
      if (mutation.type === 'childList' || mutation.type === 'subTree') {
        let _node = _Node2Act;
        if (_node && typeof _kickCallback == 'function') {
          _KickCallback(_node);
        }
      }
    }
  }

  const observer = new MutationObserver(callback);
  observer.observe(_Node2Watch, _VMoptions);
  return observer;
}
