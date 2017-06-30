var User = function(specsheet) {
	this.username = specsheet.username;
	this.inventory = specsheet.inventory;
	this.stats = specsheet.stats;
	this.posX = specsheet.posX;
	this.poxY = specsheet.posY;
}

// Application.prototype._getSurfaceById = function(surfaceID) {
// 	if (!surfaceID) {
// 		console.warn("No surface selected");
// 		return null;
// 	}
// 	var children = this.screen.getLayer(Screen.MAIN_LAYER).children;
// 	var surface = find(children, function(child) {
// 		return (child._id == surfaceID);
// 	});
//
// 	return surface;
// };

module.exports = User;
