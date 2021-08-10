import axios from "axios";

const url = "https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary"

export const getPlacesData = async (sw, ne) => {
    try {
        const {data: {data}} = await axios.get(url, {
        params: {
          bl_latitude: sw.lat,
          tr_latitude: ne.lat,
          bl_longitude: sw.lng,
          tr_longitude: ne.lng,
        },
        headers: {
          'x-rapidapi-key': '68e7881c01msh77e4dfd1eb99ea4p1c9484jsnb31d02105d53',
          'x-rapidapi-host': 'travel-advisor.p.rapidapi.com'
        }
        });
        return data;

    } catch (error) {
        console.log(error);
    }
}