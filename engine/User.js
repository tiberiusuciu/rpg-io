var User = function() {
	this.username = "CoreProxy";
	this.inventory = {};
	this.stats = {};
	this.posX = 0;
	this.poxY = 0;
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
