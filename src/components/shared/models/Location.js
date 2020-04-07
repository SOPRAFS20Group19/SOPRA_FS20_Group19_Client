/**
 * Location model
 */
class Location {
    constructor(data = {}) {
        this.id = null;
        this.coordinates = null;
        Object.assign(this, data);
    }
}
export default Location;
