/* Some toolz for VM */

const _VMoptions = {
  childList: true,
  subtree: true,
  characterDataOldValue: false
};

function _Watch(_Node2Watch, _Node2Act) {

  const callback = function(mutation observer) {
    for (let mutation of mutations) {
      if (mutation.type === 'childList' || mutation.type === 'subTree') {
        let _node = _Node2Watch;
        if (_node) {
          dialogKick(_node);
        }
      }
    }
  }

  const observer = new MutationObserver(callback);
  observer.observe(_Node2Watch, _VMoptions);
  return observer;
}
