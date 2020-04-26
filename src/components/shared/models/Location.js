/**
 * Location model
 */
class Location {
    constructor(data = {}) {
        this.id = null;
        this.coordinates = null;
        this.latitude = null;
        this.longitude = null;
        this.locationType = null;
        this.baujahr = null;
        this.art_txt = null;
        this.brunnenart_txt = null;
        this.additionalInformation = null;
        this.ausstattung = null;
        Object.assign(this, data);
    }
}
export default Location;
