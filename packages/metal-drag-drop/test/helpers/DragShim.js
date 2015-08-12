'use strict';

import dom from 'bower:metal/src/dom/dom';
import DragShim from '../../src/helpers/DragShim';

describe('DragShim', function() {
	afterEach(function() {
		DragShim.docShim_ = null;
	});

	it('should return shim element from "getDocShim" method', function() {
		assert.ok(DragShim.getDocShim());
	});

	it('should always return the same shim element from "getDocShim"', function() {
		assert.strictEqual(DragShim.getDocShim(), DragShim.getDocShim());
	});

	it('should attach mouse listeners to the shim element', function() {
		var listener = sinon.stub();
		DragShim.attachDocListeners(true, {
			mousedown: listener
		});

		dom.triggerEvent(document, 'mousedown');
		assert.strictEqual(0, listener.callCount);

		dom.triggerEvent(DragShim.getDocShim(), 'mousedown');
		assert.strictEqual(1, listener.callCount);
	});

	it('should attach non mouse listeners to the document', function() {
		var listener = sinon.stub();
		DragShim.attachDocListeners(true, {
			touchstart: listener
		});

		dom.triggerEvent(document, 'touchstart');
		assert.strictEqual(1, listener.callCount);
	});

	it('should attach mouse listeners to the document if "useShim" is passed as false', function() {
		var listener = sinon.stub();
		DragShim.attachDocListeners(false, {
			mousedown: listener
		});

		dom.triggerEvent(document, 'mousedown');
		assert.strictEqual(1, listener.callCount);
	});

	it('should show document shim when attaching listeners to it', function() {
		var shim = DragShim.getDocShim();
		assert.strictEqual('none', shim.style.display);

		DragShim.attachDocListeners(true, {
			mousedown: sinon.stub()
		});
		assert.strictEqual('block', shim.style.display);
	});

	it('should hide document shim', function() {
		var shim = DragShim.getDocShim();
		DragShim.hideDocShim();
		assert.strictEqual('none', shim.style.display);
	});
});