import axios from "axios";



export const getPlacesData = async (type, sw, ne) => {
    try {
        const {
          data: { data },
        } = await axios.get(
          `https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`,
          {
            params: {
              bl_latitude: sw.lat,
              tr_latitude: ne.lat,
              bl_longitude: sw.lng,
              tr_longitude: ne.lng,
            },
            headers: {
              "x-rapidapi-key":
                "db192efdf8msh6bac87a2b2fc1c2p14f797jsn26c00ec5c25a",
              "x-rapidapi-host": "travel-advisor.p.rapidapi.com",
            },
          }
        );
        return data;

    } catch (error) {
        console.log(error);
    }
}