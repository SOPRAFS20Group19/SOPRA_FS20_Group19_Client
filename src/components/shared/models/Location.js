/**
 * Location model
 */
class Location {
    constructor(data = {}) {
        this.id = null;
        this.coordinates = null;
        this.latitude = null;
        this.longitude = null;
        this.additionalInformation = null;
        Object.assign(this, data);
    }
}
export default Location;
