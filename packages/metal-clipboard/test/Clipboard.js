'use strict';

import core from 'bower:metal/src/core';
import dom from 'bower:metal/src/dom/dom';
import Clipboard from '../src/Clipboard';

describe('Clipboard', function() {
	var clipboard;

	beforeEach(function() {
		sinon.stub(document, 'execCommand').returns(true);
	});

	afterEach(function() {
		clipboard.dispose();
		document.execCommand.restore();
		document.body.innerHTML = '';
		window.getSelection().removeAllRanges();
	});

	describe('Text', function() {
		it('should copy text from data-text to clipboard', function() {
			dom.enterDocument('<div data-clipboard data-text="From data-text"></div>');

			clipboard = new Clipboard();
			dom.triggerEvent(dom.toElement('[data-clipboard]'), 'click');

			assert.strictEqual('From data-text', window.getSelection().toString());
			assert.strictEqual(1, document.execCommand.callCount);
			assert.strictEqual('copy', document.execCommand.args[0][0]);
		});

		it('should copy text from "text" attribute fn to clipboard', function() {
			dom.enterDocument('<div data-clipboard data-text="From data-text"></div>');

			clipboard = new Clipboard({
				text: function() {
					return 'From text attribute fn';
				}
			});
			dom.triggerEvent(dom.toElement('[data-clipboard]'), 'click');

			assert.strictEqual('From text attribute fn', window.getSelection().toString());
			assert.strictEqual(1, document.execCommand.callCount);
			assert.strictEqual('copy', document.execCommand.args[0][0]);
		});
	});

	describe('Selector', function() {
		it('should copy text from elements matching selector to clipboard', function() {
			dom.enterDocument('<div data-clipboard data-text="data-clipboard attribute"></div>');
			dom.enterDocument('<div class="copy" data-text="copy class"></div>');
			dom.enterDocument('<div class="copy" data-text="copy class 2"></div>');

			clipboard = new Clipboard({
				selector: '.copy'
			});
			dom.triggerEvent(dom.toElement('[data-clipboard]'), 'click');
			assert.strictEqual(0, document.execCommand.callCount);

			dom.triggerEvent(dom.toElement('.copy'), 'click');
			assert.strictEqual('copy class', window.getSelection().toString());
			assert.strictEqual(1, document.execCommand.callCount);
			assert.strictEqual('copy', document.execCommand.args[0][0]);

			dom.triggerEvent(document.querySelectorAll('.copy')[1], 'click');
			assert.strictEqual('copy class 2', window.getSelection().toString());
			assert.strictEqual(2, document.execCommand.callCount);
			assert.strictEqual('copy', document.execCommand.args[1][0]);
		});
	});

	describe('Action', function() {
		it('should copy text to clipboard using the action specified by data-action', function() {
			dom.enterDocument('<div data-clipboard data-text="From data-text" data-action="cut"></div>');

			clipboard = new Clipboard();
			dom.triggerEvent(dom.toElement('[data-clipboard]'), 'click');

			assert.strictEqual('From data-text', window.getSelection().toString());
			assert.strictEqual(1, document.execCommand.callCount);
			assert.strictEqual('cut', document.execCommand.args[0][0]);
		});

		it('should copy text to clipboard using the action specified by the action attribute', function() {
			dom.enterDocument('<div data-clipboard data-text="From data-text" data-action="cut"></div>');

			clipboard = new Clipboard({
				action: function() {
					return 'copy';
				}
			});
			dom.triggerEvent(dom.toElement('[data-clipboard]'), 'click');

			assert.strictEqual('From data-text', window.getSelection().toString());
			assert.strictEqual(1, document.execCommand.callCount);
			assert.strictEqual('copy', document.execCommand.args[0][0]);
		});
	});

	describe('Fake text element', function() {
		it('should remove fake text element used for copying when document is clicked again', function() {
			dom.enterDocument('<div data-clipboard data-text="From data-text"></div>');
			clipboard = new Clipboard();

			dom.triggerEvent(dom.toElement('[data-clipboard]'), 'click');
			assert.ok(document.querySelector('textarea'));

			dom.triggerEvent(document, 'click');
			assert.ok(!document.querySelector('textarea'));
		});

		it('should remove fake text element used for copying when Clipboard instance is disposed', function() {
			dom.enterDocument('<div data-clipboard data-text="From data-text"></div>');
			clipboard = new Clipboard();

			dom.triggerEvent(dom.toElement('[data-clipboard]'), 'click');
			assert.ok(document.querySelector('textarea'));

			clipboard.dispose();
			assert.ok(!document.querySelector('textarea'));
		});
	});

	describe('Target', function() {
		it('should copy text from text input element to clipboard', function() {
			dom.enterDocument('<div data-clipboard data-target="#target"></div>');
			dom.enterDocument('<input id="target" type="text" value="From text input">');
			clipboard = new Clipboard();

			dom.triggerEvent(dom.toElement('[data-clipboard]'), 'click');

			assert.strictEqual('From text input', window.getSelection().toString());
			assert.strictEqual(1, document.execCommand.callCount);
			assert.strictEqual('copy', document.execCommand.args[0][0]);
		});

		it('should copy text from textarea element to clipboard', function() {
			dom.enterDocument('<div data-clipboard data-target="#target"></div>');
			dom.enterDocument('<textarea id="target" type="text">From textarea</textarea>');
			clipboard = new Clipboard();

			dom.triggerEvent(dom.toElement('[data-clipboard]'), 'click');

			assert.strictEqual('From textarea', window.getSelection().toString());
			assert.strictEqual(1, document.execCommand.callCount);
			assert.strictEqual('copy', document.execCommand.args[0][0]);
		});

		it('should copy text from any element to clipboard', function() {
			dom.enterDocument('<div data-clipboard data-target="#target"></div>');
			dom.enterDocument('<div id="target">From div</div>');
			clipboard = new Clipboard();

			dom.triggerEvent(dom.toElement('[data-clipboard]'), 'click');

			assert.strictEqual('From div', window.getSelection().toString());
			assert.strictEqual(1, document.execCommand.callCount);
			assert.strictEqual('copy', document.execCommand.args[0][0]);
		});

		it('should copy text from the element given in the "target" attribute', function() {
			dom.enterDocument('<div data-clipboard data-target="#target"></div>');
			dom.enterDocument('<div id="target">From div</div>');
			dom.enterDocument('<span id="target2">From span</span>');
			clipboard = new Clipboard({
				target: function() {
					return dom.toElement('#target2');
				}
			});

			dom.triggerEvent(dom.toElement('[data-clipboard]'), 'click');

			assert.strictEqual('From span', window.getSelection().toString());
			assert.strictEqual(1, document.execCommand.callCount);
			assert.strictEqual('copy', document.execCommand.args[0][0]);
		});
	});

	describe('Events', function() {
		it('should trigger "success" event when text is successfully copied', function() {
			dom.enterDocument('<div data-clipboard data-text="From data-text"></div>');
			clipboard = new Clipboard();

			var listener = sinon.stub();
			clipboard.on('success', listener);

			var element = dom.toElement('[data-clipboard]');
			dom.triggerEvent(element, 'click');
			assert.strictEqual(1, listener.callCount);

			var event = listener.args[0][0];
			assert.strictEqual('copy', event.action);
			assert.strictEqual('From data-text', event.text);
			assert.strictEqual(element, event.trigger);
			assert.ok(core.isFunction(event.clearSelection));
		});

		it('should clear the selection through the function given by the "success" event', function() {
			dom.enterDocument('<div data-clipboard data-text="From data-text"></div>');
			clipboard = new Clipboard();

			var listener = sinon.stub();
			clipboard.on('success', listener);
			dom.triggerEvent(dom.toElement('[data-clipboard]'), 'click');
			assert.strictEqual('From data-text', window.getSelection().toString());

			var event = listener.args[0][0];
			event.clearSelection();
			assert.strictEqual('', window.getSelection().toString());
		});

		it('should blur target through the function given by the "success" event', function() {
			dom.enterDocument('<div data-clipboard data-target="#target"></div>');
			dom.enterDocument('<textarea id="target">From textarea</textarea>');
			clipboard = new Clipboard();

			var listener = sinon.stub();
			clipboard.on('success', listener);

			var target = dom.toElement('#target');
			sinon.spy(target, 'blur');
			dom.triggerEvent(dom.toElement('[data-clipboard]'), 'click');
			assert.strictEqual(0, target.blur.callCount);

			var event = listener.args[0][0];
			event.clearSelection();
			assert.strictEqual(1, target.blur.callCount);
		});

		it('should trigger "error" event when document.execCommand returns false', function() {
			document.execCommand.returns(false);
			dom.enterDocument('<div data-clipboard data-text="From data-text"></div>');
			clipboard = new Clipboard();

			var listener = sinon.stub();
			clipboard.on('error', listener);

			var element = dom.toElement('[data-clipboard]');
			dom.triggerEvent(element, 'click');
			assert.strictEqual(1, listener.callCount);

			var event = listener.args[0][0];
			assert.strictEqual('copy', event.action);
			assert.strictEqual(element, event.trigger);
			assert.ok(core.isFunction(event.clearSelection));
		});

		it('should trigger "error" event when document.execCommand throws error', function() {
			document.execCommand.throws();
			dom.enterDocument('<div data-clipboard data-text="From data-text"></div>');
			clipboard = new Clipboard();

			var listener = sinon.stub();
			clipboard.on('error', listener);

			var element = dom.toElement('[data-clipboard]');
			dom.triggerEvent(element, 'click');
			assert.strictEqual(1, listener.callCount);

			var event = listener.args[0][0];
			assert.strictEqual('copy', event.action);
			assert.strictEqual(element, event.trigger);
			assert.ok(core.isFunction(event.clearSelection));
		});
	});

	it('should not copy anything to clipboard if neither target nor text is given', function() {
		dom.enterDocument('<div data-clipboard></div>');
		clipboard = new Clipboard();
		dom.triggerEvent(dom.toElement('[data-clipboard]'), 'click');

		assert.strictEqual('', window.getSelection().toString());
		assert.strictEqual(0, document.execCommand.callCount);
	});
});