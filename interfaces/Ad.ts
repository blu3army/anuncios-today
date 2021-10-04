import City from "./City";
import User from "./User";

export default interface Ad{
    title:          string,
    date:           string,
    uid:            string,
    user:           User,
    cityCode:       number,
    city?:          City,
    images?:        string[],
    rubro:          string,
    cat:            string,
    subcat?:        string,
}