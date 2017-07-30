module.exports = batch;

// Execute task(buffer) for every <size> items
function batch(items, size, task, callback) {
	let buffer = [];
	for (const item of items) {
		if (buffer.length >= size) {
			task(buffer);
			buffer = [];
		}
		buffer.push(item);
	}
	// Send callback on final iteration
	task(buffer, callback);
}
